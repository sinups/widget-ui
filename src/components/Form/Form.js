/**
 * Copyright 2020 wdgt <dev@justiva.ru>
 * @Zaritsky
 */

import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import { Form as FormWrapper, Field } from 'react-final-form'
import Button from '../Button'
import styles from './styles.scss'

const Form = ({ children, className, rules, onSubmit }) => (
  <FormWrapper
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit} className={`${styles.form} ${className}`}>
        {children.map((child, index) => {
          const { validation, name } = child.props

          const composeValidators = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined)

          const mapRules = args => {
            const detectedRules = []
            args.map(iterator => detectedRules.push(rules[iterator]))

            return composeValidators(...detectedRules)
          }

          return (
            <Field
              name={name || index}
              key={name || index}
              validate={typeof validation === 'object' ? mapRules(validation) : rules[validation] || null}
            >
              {({ input, meta }) =>
                // eslint-disable-next-line implicit-arrow-linebreak
                cloneElement(child, {
                  ...input,
                  id: input.name,
                  error: meta.error,
                  touched: meta.touched,
                  active: meta.active,
                })}
            </Field>
          )
        })}
        <Button primary fullWidth type="submit">
          Отправить
        </Button>
      </form>
    )}
  />
)

Form.propTypes = {
  /** Дочерние элементы Form */
  children: PropTypes.node.isRequired,
  /** Дополнительный класс */
  className: PropTypes.string,
  /** Правила (функции валидации) */
  rules: PropTypes.object,
  /** Функция отправки формы */
  onSubmit: PropTypes.func.isRequired,
}

Form.defaultProps = {
  className: '',
  rules: {},
}

export default Form

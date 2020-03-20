/**
 * Copyright 2020 wdgt <dev@justiva.ru>
 * @Zaritsky
 */

import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import { Form as FormWrapper, Field } from 'react-final-form'
import Button from '../Button'
import styles from './style.scss'

const Form = ({ children, className, rules, onSubmit }) => (
  <FormWrapper
    onSubmit={onSubmit}
    render={({ handleSubmit, form, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit} className={`${styles.form} ${className}`}>
        <div className={styles.block}>
          {children.map((child, index) => {
            const { validation, name, label } = child.props

            const composeValidators = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined)

            const mapRules = args => {
              const detectedRules = []
              args.map(iterator => detectedRules.push(rules[iterator]))

              return composeValidators(...detectedRules)
            }

            const activeLabel = meta => {
              if (meta.active) return styles.activeLabel
              if (meta.touched && meta.error) return styles.activeLabel
              if (meta.touched && !meta.empty) return styles.activeLabel
            }

            return (
              <Field
                name={name || index}
                key={name || index}
                validate={typeof validation === 'object' ? mapRules(validation) : rules[validation] || null}
              >
                {({ input, meta }) => (
                  <div className={styles.field}>
                    <div className={styles.block}>
                      <label htmlFor={input.name} className={activeLabel(meta)}>
                        {console.log(input.name, meta.active)}
                        {label}
                      </label>
                      {cloneElement(child, {
                        ...input,
                        className: `${styles.input} ${meta.error && meta.touched && styles.error}`,
                        id: input.name,
                      })}
                      {meta.error && meta.touched && <span className={styles.errorText} dangerouslySetInnerHTML={{ __html: meta.error }} />}
                    </div>
                  </div>
                )}
              </Field>
            )
          })}
        </div>
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
  className: PropTypes.string,
  rules: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
}

Form.defaultProps = {
  className: '',
  rules: {},
}

export default Form

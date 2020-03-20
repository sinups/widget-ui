/**
 * Copyright 2020 wdgt <dev@justiva.ru>
 * @Zaritsky
 */

import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import { Form as FormWrapper, Field } from 'react-final-form'
import styles from './style.scss'

const Form = ({ children, className, rules, onSubmit }) => (
  <FormWrapper
    onSubmit={onSubmit}
    render={({ handleSubmit, form, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit} className={`${styles.form} ${className}`}>
        {children.map((child, index) => {
          const { validation, name, label } = child.props

          const composeValidators = (...validators) => value =>
            // eslint-disable-next-line implicit-arrow-linebreak
            validators.reduce(
              (error, validator) => error || validator(value),
              undefined
            )

          const mapRules = args => {
            const detectedRules = []
            args.map(iterator => detectedRules.push(rules[iterator]))

            return composeValidators(...detectedRules)
          }

          return (
            <Field
              name={name || index}
              key={name || index}
              validate={
                typeof validation === 'object'
                  ? mapRules(validation)
                  : rules[validation] || null
              }
            >
              {({ input, meta }) => (
                <div className={styles.field}>
                  <label htmlFor={input.name}>{label}</label>
                  {cloneElement(child, input)}
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
          )
        })}
        <input type="submit" />
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

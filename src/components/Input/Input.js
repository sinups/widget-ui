/**
 * Copyright 2020 wdgt <dev@justiva.ru>
 * @Zaritsky
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import InputMask from 'react-input-mask'
import styles from './styles.scss'

function Input({
  className, label, type, id, error, touched, active, mask, maskChar, ...props
}) {
  const classes = classNames(styles.input, className)

  const activeLabel = meta => {
    if (meta.active) return styles.activeLabel
    if (meta.touched && meta.error) return styles.activeLabel
    if (meta.touched && !meta.empty) return styles.activeLabel
  }

  return (
    <div className={classes}>
      <div className={styles.field}>
        {label && (
          <label
            htmlFor={id}
            className={activeLabel({
              active,
              touched,
              error,
            })}
          >
            {label}
          </label>
        )}
        {mask && (
          <InputMask maskChar={maskChar} mask={mask} className={`${styles.input} ${error && touched && styles.error}`} id={id} name={id} {...props} />
        )}
        {!mask && <input className={`${styles.input} ${error && touched && styles.error}`} type={type} id={id} name={id} {...props} />}

        {error && touched && <span className={styles.errorText} dangerouslySetInnerHTML={{ __html: error }} />}
        {!error && touched && <SuccessIcon />}
      </div>
    </div>
  )
}

const SuccessIcon = () => (
  <div className={styles.form_success_ico}>
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="form_success_ico">
        <path d="M1 5L5 9L13 1" stroke="#67CC43" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  </div>
)

Input.propTypes = {
  /** Дополнительный класс */
  className: PropTypes.string,
  /**  Лейбел инпута */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /** Тип инпута */
  type: PropTypes.string,
  /** Id инпута (он же name) */
  id: PropTypes.string.isRequired,
  /** Маска инпута, по-умолчанию выключена */
  mask: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /** Сообщения ошибки (HTML) */
  error: PropTypes.bool,
  /** На поле нажимали */
  touched: PropTypes.bool,
  /** Поле активно */
  active: PropTypes.bool,
  /** Вставка символа вместо пустого значения маски */
  maskChar: PropTypes.string,
}

Input.defaultProps = {
  className: '',
  label: false,
  type: 'text',
  mask: false,
  error: false,
  touched: false,
  active: false,
  maskChar: '_',
}

export default Input

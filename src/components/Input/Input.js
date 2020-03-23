/**
 * Copyright 2020 wdgt <dev@justiva.ru>
 * @Zaritsky
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './styles.scss'
import Button from '../Button'

function Input({ className, label, type, id, ...props }) {
  const classes = classNames(styles.input, className)

  return (
    <div className={classes}>
      <div className={styles.block}>
        <div className={styles.field}>
          {label && <label htmlFor={id}>{label}</label>}
          <input className={styles.input} type={type} id={id} name={id} {...props} />
        </div>
      </div>
    </div>
  )
}

Input.propTypes = {
  /** Дополнительный класс */
  className: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  mask: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
}

Input.defaultProps = {
  className: '',
  label: false,
  type: 'text',
  mask: false,
}

export default Input

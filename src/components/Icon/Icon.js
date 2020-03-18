/**
 * Copyright 2020 wdgt <dev@justiva.ru>
 * @Zaritsky
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ReactHtmlParser from 'react-html-parser'
import styles from './styles.scss'

const Icon = ({ className, size }) => {
  const classes = classNames(styles.icon, className)

  const detectSize = () => {
    if (typeof size === 'number') return size
    if (size === 'small') return 18
    if (size === 'medium') return 24
    if (size === 'large') return 42

    return 24
  }

  return <div classNames={classes}>test</div>
}

Icon.propTypes = {
  /** Дополнительный класс */
  className: PropTypes.string,
  /** Размер указывается в цифрах (px), либо в одном из трех стандартных значений `small, medium, large` */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Icon.defaultProps = {
  className: '',
  size: 'medium',
}

export default Icon

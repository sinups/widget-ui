/**
 * Copyright 2020 wdgt <dev@justiva.ru>
 * @Zaritsky
 */

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './styles.scss'
import IconPack from './Icons'

const Icon = ({
  className, size, name, color,
}) => {
  const classes = classnames(styles.icon, className)

  const detectSize = () => {
    if (typeof size === 'number') return size
    if (size === 'small') return 18
    if (size === 'medium') return 24
    if (size === 'large') return 42

    return 24
  }

  return (
    <div className={classes}>
      <IconPack size={detectSize()} fill={color} name={name} />
    </div>
  )
}

Icon.propTypes = {
  /** Дополнительный класс */
  className: PropTypes.string,
  /** Размер указывается в цифрах (px), либо в одном из трех стандартных значений `small, medium, large` */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Название иконки */
  name: PropTypes.string.isRequired,
  /** Цвет иконки (fill) */
  color: PropTypes.string,
}

Icon.defaultProps = {
  className: '',
  size: 'medium',
  color: '#a09fab',
}

export default Icon

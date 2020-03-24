/**
 * Copyright 2020 wdgt <dev@justiva.ru>
 * @Zaritsky
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './styles.scss'

const MessageInput = props => {
  const { className } = props
  const classes = classNames(styles.container, className)

  return <div className={classes}>test</div>
}

MessageInput.propTypes = {
  /** Дополнительный класс */
  className: PropTypes.string,
}

MessageInput.defaultProps = {
  className: '',
}

export default MessageInput

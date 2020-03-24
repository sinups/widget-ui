/* eslint-disable jsx-a11y/click-events-have-key-events */
/**
 * Copyright 2020 wdgt <dev@justiva.ru>
 * @Zaritsky
 */

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import TextareaAutosize from 'react-textarea-autosize'
import Icon from '../Icon'
import styles from './styles.scss'

const MessageInput = props => {
  const { className, inputRows, charForFullWidth, defaultValue, placeholder, requiredChar, onSubmit, config } = props
  const classes = classNames(styles.message, className)

  const [value, setValue] = useState(defaultValue)
  const [error, setError] = useState(false)
  const [percent, setPercent] = useState(0)
  const [barInfo, setBarInfo] = useState(config[0] || null)

  const percentParser = () => {
    let counter = parseInt(((value.length / charForFullWidth) * 100).toFixed())
    if (counter >= 100) counter = 100

    setPercent(counter)
  }

  const parseBarInfo = () => {
    if (config) {
      const keys = []
      // eslint-disable-next-line no-restricted-syntax
      for (const key in config) {
        // eslint-disable-next-line no-prototype-builtins
        if (config.hasOwnProperty(key)) {
          keys.push(key)
        }
      }
      const len = value.length
      keys.map(element => len >= element && setBarInfo(config[element]))
    }
  }

  useEffect(() => {
    if (value) {
      setError(false)
      percentParser()
      parseBarInfo()
    }
    if (!value.length) setPercent(0)
  }, [value])

  const handleSubmit = () => {
    if (value.length) {
      if (requiredChar !== null) {
        if (value.length < requiredChar) return setError(true)

        return onSubmit(value)
      }

      return onSubmit(value)
    }
    setError(true)
  }

  return (
    <div className={classes}>
      <div className={styles.field}>
        <TextareaAutosize
          value={value}
          onChange={e => setValue(e.target.value)}
          minRows={inputRows[0]}
          maxRows={inputRows[1]}
          placeholder={placeholder}
        />
        <div onClick={() => handleSubmit()}>

         <div className={styles.send_btn_box}>
           <Icon className={styles.icon} name="right-arrow" size={14} color="#fff" />
         </div>
        </div>
      </div>
      {value.length > 0 && config && <StatusBar text={barInfo.msg} error={error} percent={percent} barColor={barInfo.color} />}
    </div>
  )
}

const StatusBar = ({ text, percent, error, barColor }) => (
  <div className={styles.statusBar}>
    <span style={error ? { color: '#ff000087' } : null}>{text}</span>
    <div className={styles.bar}>
      <div className={styles.line} style={{ width: `${percent}%`, backgroundColor: barColor }} />
    </div>
  </div>
)

StatusBar.propTypes = {
  text: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
  error: PropTypes.bool.isRequired,
  barColor: PropTypes.string.isRequired,
}

MessageInput.propTypes = {
  /** Дополнительный класс */
  className: PropTypes.string,
  /** Столбцы textarea от минимального до максимального значения */
  inputRows: PropTypes.arrayOf(PropTypes.number),
  /** Кол-во символов для 100% значения полоски */
  charForFullWidth: PropTypes.number,
  /** Стандартное значения инпута */
  defaultValue: PropTypes.string,
  /** Placeholder */
  placeholder: PropTypes.string,
  /** Минимальное кол-во символов */
  requiredChar: PropTypes.number,
  /** Функция при отправки */
  onSubmit: PropTypes.func,
  /** Конфигурации прогресс бара (смотреть в примере) */
  config: PropTypes.oneOfType(PropTypes.object, PropTypes.bool),
}

MessageInput.defaultProps = {
  className: '',
  inputRows: [1, 5],
  charForFullWidth: 10,
  defaultValue: '',
  placeholder: 'Введите ваш вопрос',
  requiredChar: null,
  onSubmit: e => {
    console.log(e)
  },
  config: false,
}

export default MessageInput

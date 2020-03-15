/**
 * Copyright 2020 wdgt <dev@justiva.ru>
 * @Zaritsky
 */

import React from 'react'
import PropTypes from 'prop-types'
import Breadcrumbs from '../Breadcrumbs'
import styles from './style.scss'

const Message = ({
  className,
  backgroundColor,
  children,
  borderRadius,
  color,
  right,
  left,
  center,
  breadcrumbs,
}) => {
  function position() {
    if (center) return 'center'
    if (right) return 'flex-end'
    if (left) return 'flex-start'

    return 'flex-start'
  }

  function renderBreadcrumbs() {
    if (breadcrumbs.length) {
      return (
        <Breadcrumbs
          content={breadcrumbs[0]}
          subContent={breadcrumbs.length > 1 && breadcrumbs[1]}
        />
      )
    }

    if (breadcrumbs) return <Breadcrumbs />
  }

  const inlineStyles = {
    parent: { justifyContent: position() },
    children: {
      backgroundColor,
      color,
      borderRadius,
    },
  }

  return (
    <div
      className={`${styles.message} ${className}`}
      style={inlineStyles.parent}
    >
      <div className={`${className} ${styles.content}`} style={inlineStyles.children}>
        {renderBreadcrumbs()}
        {children}
      </div>
    </div>
  )
}

Message.propTypes = {
  /** Дополнительный класс */
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  backgroundColor: PropTypes.string,
  /** Закругление краев окна сообщения (в px) */
  borderRadius: PropTypes.number,
  /** Цвет текста */
  color: PropTypes.string,
  /** Расположить сообщение справа */
  right: PropTypes.bool,
  /** Расположить сообщение слева */
  left: PropTypes.bool,
  /** Расположить сообщение по центру */
  center: PropTypes.bool,
  /** По умолчанию не выводит "Хлебные крошки", если передать параметр пустым `breadcrumbs`,
   *  то выводит стандартный текст "хлебных крошек".
   *  массив с одним элементом `breadcrumbs={['Виктория']}` выводит только главный контент.
   *  массив с двумя элементами `breadcrumbs={['Виктория', 'Юрист Онлайн']}` выводит главный контент и второстепенный контент. */
  breadcrumbs: PropTypes.array,
}

Message.defaultProps = {
  className: '',
  backgroundColor: '#eee',
  borderRadius: 8,
  color: 'black',
  right: false,
  left: false,
  center: false,
  breadcrumbs: false,
}

export default Message

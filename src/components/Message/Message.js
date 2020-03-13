/**
 * Copyright 2020 wdgt <dev@justiva.ru>
 * @Zaritsky
 */

import React from 'react'
import PropTypes from 'prop-types'
import MessageStyles from './MessageStyles'
import Breadcrumbs from '../Breadcrumbs'

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

  return (
    <MessageStyles
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      color={color}
      position={position()}
    >
      <div className={`${className} content`}>
        {renderBreadcrumbs()}
        {children}
      </div>
    </MessageStyles>
  )
}

Message.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  backgroundColor: PropTypes.string,
  /** Закругление краев окна сообщения */
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

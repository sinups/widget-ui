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

  return (
    <MessageStyles
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      color={color}
      position={position()}
    >
      <div className={`${className} content`}>
        {breadcrumbs && breadcrumbs.length < 2 ? (
          <Breadcrumbs content={breadcrumbs[0]} />
        ) : (
          <Breadcrumbs
            content={breadcrumbs[0]}
            subContent={breadcrumbs.length > 1 && breadcrumbs[1]}
          />
        )}
        {children}
      </div>
    </MessageStyles>
  )
}

Message.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.number,
  color: PropTypes.string,
  right: PropTypes.bool,
  left: PropTypes.bool,
  center: PropTypes.bool,
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
  breadcrumbs: [],
}

export default Message

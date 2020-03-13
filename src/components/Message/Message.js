/**
 * Copyright 2020 wdgt <dev@justiva.ru>
 * @Zaritsky
 */

import React from 'react'
import PropTypes from 'prop-types'
import MessageStyles from './MessageStyles'

const Message = ({
  className,
  backgroundColor,
  children,
  borderRadius,
  color,
  supportName,
  supportInfo,
}) => {
  return (
    <MessageStyles
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      color={color}
    >
      <div className={`${className} content`}>
        {supportName && (
          <div className="bread__crumbs">
            <div className="support__name">{supportName}</div>
            {supportInfo && supportName && <div className="dot"> </div>}
            <div className="support__info">{supportInfo}</div>
          </div>
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
  supportName: PropTypes.string,
  supportInfo: PropTypes.string,
}

Message.defaultProps = {
  className: 'test',
  backgroundColor: '#eee',
  borderRadius: 8,
  color: 'black',
  supportName: 'Victoria',
  supportInfo: 'Jurist Online',
}

export default Message

import React from 'react'
import PropTypes from 'prop-types'

/** Launcher */
const Launcher = ({ fill, size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 30 30"
    preserveAspectRatio="xMidYMid meet"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 14C2 7.37195 7.37195 2 14 2C20.628 2 26 7.37195 26 14C26 20.628 20.628 26 14 26H2V14ZM14 0C6.26738 0 0 6.26738 0 14V28H14C21.7326 28 28 21.7326 28 14C28 6.26738 21.7326 0 14 0ZM8 14C8 14.553 8.448 15 9 15C9.552 15 10 14.553 10 14C10 13.447 9.552 13 9 13C8.448 13 8 13.447 8 14ZM14 15C13.448 15 13 14.553 13 14C13 13.447 13.448 13 14 13C14.552 13 15 13.447 15 14C15 14.553 14.552 15 14 15ZM18 14C18 14.553 18.448 15 19 15C19.552 15 20 14.553 20 14C20 13.447 19.552 13 19 13C18.448 13 18 13.447 18 14Z"
      fill={fill}
    />
  </svg>
)

Launcher.propTypes = {
  fill: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
}

/** Close */
const Close = ({ fill, size }) => (
  <svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 16 16"
  >
    <rect x="15.0728" y="2.34229" width="18" height="2" rx="1" transform="rotate(135 15.0728 2.34229)" fill={fill} />
    <rect
      x="13.6592"
      y="15.0698"
      width="18"
      height="2"
      rx="0.999999"
      transform="rotate(-135 13.6592 15.0698)"
      fill={fill}
    />
  </svg>

)

Close.propTypes = {
  fill: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
}

/** ChatIcon */
const ChatIcon = ({ fill, size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 31 31"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10.7059 21.1394C4.79294 21.1394 0 16.4075 0 10.5697C0 4.73198 4.79294 0 10.7059 0H17.2941C23.2071 0 28 4.73198 28 10.5697C28 16.4075 23.9129 21.1394 18 21.1394L10.7059 29V21.1394Z"
    />
  </svg>

)

ChatIcon.propTypes = {
  fill: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
}

/** Arrow right */
const RightArrow = ({ fill, size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 13 13"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 13L12.5 6.5L0 0L4 6.5L0 13Z" fill={fill} />
  </svg>
)

RightArrow.propTypes = {
  fill: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
}

/** Emoji */
const Emoji = ({ fill, size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
  >
    <g fillRule="evenodd">
      <path d="M16.198 19.44c-3.166 0-5.536-1.225-6.145-1.37-.897-.21-.943.315-.943.665 0 3.457 3.113 5.92 6.89 5.92 3.777 0 6.89-2.463 6.89-5.92 0-.35-.046-.875-.943-.664-.608.147-2.584 1.37-5.75 1.37zm4.068-9.262c1.123 0 2.034 1.205 2.034 2.69 0 1.487-.91 2.692-2.034 2.692-1.124 0-2.035-1.205-2.035-2.69 0-1.487.914-2.692 2.038-2.692m-8.533.004c1.124 0 2.034 1.204 2.034 2.69 0 1.487-.91 2.69-2.035 2.69-1.123 0-2.034-1.203-2.034-2.69 0-1.486.91-2.69 2.035-2.69" />
      <path d="M16 28.133c6.7 0 12.133-5.432 12.133-12.133C28.133 9.3 22.7 3.867 16 3.867 9.3 3.867 3.867 9.3 3.867 16 3.867 22.7 9.3 28.133 16 28.133zM16 30C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z" />
    </g>
  </svg>

)

Emoji.propTypes = {
  fill: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
}

const Icon = ({ name, fill, size }) => {
  switch (name) {
    case 'launcher':
      return <Launcher fill={fill} size={size} />
    case 'close':
      return <Close fill={fill} size={size} />
    case 'chat-icon':
      return <ChatIcon fill={fill} size={size} />
    case 'right-arrow':
      return <RightArrow fill={fill} size={size} />
    case 'emoji':
      return <Emoji fill={fill} size={size} />
    default:
      break
  }
}

Icon.propTypes = {
  name: PropTypes.string,
  fill: PropTypes.string,
}

Icon.defaultProps = {
  name: '',
  fill: '#000',
  size: 24,
}

export default Icon

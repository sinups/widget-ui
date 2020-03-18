import React from 'react'
import PropTypes from 'prop-types'

const Wrapper = ({ children, size }) => (
  <svg
    width={size}
    height={size}
    viewBox={`-25 -25 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
)

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number.isRequired,
}

const Launcher = ({ fill, size }) => (
  <Wrapper size={size}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 14C2 7.37195 7.37195 2 14 2C20.628 2 26 7.37195 26 14C26 20.628 20.628 26 14 26H2V14ZM14 0C6.26738 0 0 6.26738 0 14V28H14C21.7326 28 28 21.7326 28 14C28 6.26738 21.7326 0 14 0ZM8 14C8 14.553 8.448 15 9 15C9.552 15 10 14.553 10 14C10 13.447 9.552 13 9 13C8.448 13 8 13.447 8 14ZM14 15C13.448 15 13 14.553 13 14C13 13.447 13.448 13 14 13C14.552 13 15 13.447 15 14C15 14.553 14.552 15 14 15ZM18 14C18 14.553 18.448 15 19 15C19.552 15 20 14.553 20 14C20 13.447 19.552 13 19 13C18.448 13 18 13.447 18 14Z"
      fill={fill}
    />
  </Wrapper>
)

Launcher.propTypes = {
  fill: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
}

const Icon = ({ name, fill, size }) => {
  switch (name) {
    case 'launcher':
      return <Launcher fill={fill} size={size} />
      break

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

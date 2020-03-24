import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './style.scss'
import Launcher from '../Launcher'

/**
 * @return {null}
 */
function Badge({
  children, className: extraClassName, secondary, show, ...props
}) {
  const className = cx(styles.badge, {
    [styles['badge--secondary']]: secondary,
    ...(extraClassName ? { [extraClassName]: true } : {}),
  })
  if (show === true) {
    return (
      <span className={className} {...props}>
        {children}
      </span>
    )
  }

  return null
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool,
  secondary: PropTypes.bool,
}

Badge.defaultProps = {
  show: true,
}

export default Badge

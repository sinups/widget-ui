/**
 * Copyright 2020 wdgt <dev@justiva.ru>
 * @Sinups
 */

import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './Checkbox.scss'

const Checkbox = ({
  as: Label,
  children,
  className,
  ...props
}) => {
  const classes = classNames(styles.container, props.className);

  return (
    <Label className={classes}>
      <input type='checkbox' {...props} className={'checkbox'}/>
      {' '}
      {children}
    </Label>
  )
}
Checkbox.displayName = 'Checkbox'

Checkbox.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node
}

Checkbox.defaultProps = {
  as: 'label'
}
export default Checkbox

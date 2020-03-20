import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import getMergedClassNames from '../../utils/getMergedClassNames'
import styles from './styles.scss'
import Icon from '../Icon'

const cx = classNames.bind(styles)

const baseClass = 'launcher'

const acceptedSizes = ['small', 'regular', 'large']
const Launcher = ({
  size = 'large', open, ...restProps
}) => {
  const mergedClassNames = getMergedClassNames(
    cx({
      [baseClass]: true,
      [`${baseClass}--${size}`]: acceptedSizes.some(s => s === size),
    }),
  )

  return (
    <div {...restProps} className={mergedClassNames}>

      {open === true ? (
        <div className={styles[`${baseClass}__close_icon`]}>
          <Icon name="close" color="#fff" size={28} />
        </div>
      ):
        <div className={styles[`${baseClass}__chat_icon`]}>
          <Icon name="chat-icon" color="#fff" size={28} />
        </div>
      }
    </div>
  )
}

Launcher.propTypes = {
  size: PropTypes.oneOf(acceptedSizes),
  /** Управление open состоянием компонента */
  open: boolean,
}

Launcher.defaultProps = {
  open: 'false',
}

export default Launcher

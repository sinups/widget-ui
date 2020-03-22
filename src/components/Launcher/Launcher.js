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
  size = 'large', open, pulsation, animation3D, iconSize, iconColor, ...restProps
}) => {
  const detectSize = () => {
    if (typeof iconSize === 'number') return iconSize
    if (iconSize === 'small') return 18
    if (iconSize === 'medium') return 28
    if (iconSize === 'large') return 42

    return 24
  }

  function renderPulsation() {
    const style = {
      width: '100px',
      height: '100px',
    }

    return <div className={styles.pulsation} style={style} />
  }

  function renderIcon() {
    const iconSize = detectSize()
    const style = {
      width: iconSize,
      height: iconSize,
    }
    if (open === false && animation3D === false) {
      return (

        <Icon
          name={open ? 'close' : 'chat-icon'}
          className={styles.icon}
          size={iconSize}
          color={iconColor}
        />
      )
    }

    // widget not open and 3D is on
    if (!open && animation3D === true) {
      return (
        <div className={styles.flip_box} style={style}>
          <div className={styles.flip_box_inner}>
            <div className={styles.flip_box_front}>
              <Icon name="chat-icon" className={styles.icon} color={iconColor} size={iconSize} />
              {/* <img  className={styles.flip_box_front_img} style={style} src="https://picsum.photos/200/200/?${random(1, 20)}" alt=""/> */}
            </div>
            <div className={styles.flip_box_back}>
              <Icon name="chat-icon" className={styles.icon} color={iconColor} size={iconSize} />
            </div>
          </div>
        </div>
      )
    }
    // widget openq
    return <Icon name="close" className={styles.icon} color="#fff" size={iconSize} />
  }
  const mergedClassNames = getMergedClassNames(
    cx({
      [baseClass]: true,
      [`${baseClass}--${size}`]: acceptedSizes.some(s => s === size),
    }),
  )

  return (
    <div {...restProps} className={mergedClassNames}>

      <span className={styles.fix}>{renderIcon()}</span>
      {pulsation ? renderPulsation() : null}
    </div>
  )
}

Launcher.propTypes = {
  size: PropTypes.oneOf(acceptedSizes),
  /** Управление open состоянием компонента */
  open: boolean,
  pulsation: boolean,
  animation3D: boolean,
  iconSize: PropTypes.string,
  iconColor: PropTypes.string,
}

Launcher.defaultProps = {
  open: false,
  animation3D: false,
  pulsation: false,
  size: 'regular',
  iconColor: '#fff',
  iconSize: 'medium',
}

export default Launcher

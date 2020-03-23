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
  size = 'large', open, theme, pulsation, animation3D, iconSize, iconColor, ...restProps
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
      background: theme,
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
          size={open ? 19 : iconSize}
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
    // widget open
    return <Icon name="close" className={styles.icon} color="#fff" size={19} />
  }
  const mergedClassNames = getMergedClassNames(
    cx({
      [baseClass]: true,
      [`${baseClass}--${size}`]: acceptedSizes.some(s => s === size),
      [styles.open]: open,
      [styles.closed]: !open,
      [styles.animation3d]: !open && animation3D,
    }),
  )

  // const buttonClassName = classNames(
  //   styles.container,
  //   styles[String(size)],
  //   {
  //     [styles.open]: open,
  //     [styles.animation3d]: !open && animation3D,
  //     [styles[theme]]: flat,
  //   },
  //   className,
  // );
  const launcherBg = {
    background: theme,
  }

  return (
    <div {...restProps} className={mergedClassNames} style={launcherBg}>

      <span className={styles.fix}>{renderIcon()}</span>
      {pulsation ? renderPulsation() : null}
    </div>
  )
}

Launcher.propTypes = {
  /** Размер компонента. */
  size: PropTypes.oneOf(acceptedSizes),
  /** Управление open состоянием компонента */
  open: PropTypes.bool,
  /** Анимация в Лаунчере */
  pulsation: PropTypes.bool,
  /** Анимация 3D */
  animation3D: PropTypes.bool,
  /** Размер Иконки. */
  iconSize: PropTypes.string,
  /** Цвет Иконки. */
  iconColor: PropTypes.string,
  /** Цвет лаунчра. */
  theme: PropTypes.string,
}

Launcher.defaultProps = {
  open: false,
  animation3D: false,
  pulsation: false,
  size: 'regular',
  iconColor: '#fff',
  iconSize: 'medium',
  theme: '#2A65FF',

}

export default Launcher

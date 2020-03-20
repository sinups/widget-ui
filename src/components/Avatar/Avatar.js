import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import getMergedClassNames from '../../utils/getMergedClassNames'
import styles from './styles.scss'

const cx = classNames.bind(styles)

const baseClass = 'avatar'

const acceptedSizes = ['compact', 'regular', 'large', 'x-large', 'display']
const acceptedStatusIndicators = ['online', 'away', 'offline']
const avatarForm = ['square', 'circle']

const Avatar = ({
  form = 'circle', img, size = 'regular', statusIndicator, ...restProps
}) => {
  const mergedClassNames = getMergedClassNames(
    cx({
      [baseClass]: true,
      [`${baseClass}--${size}`]: acceptedSizes.some(s => s === size),
      [`${baseClass}--${form}`]: avatarForm.some(s => s === form),
    }),
  )

  return (
    <div {...restProps} className={mergedClassNames}>
      <img className={styles[`${baseClass}__image`]} src={img} alt="avatar" />
      {statusIndicator && (
        <div
          className={getMergedClassNames(
            cx({
              [`${baseClass}__status-indicator`]: true,
              [`${baseClass}__status-indicator--${statusIndicator}`]: acceptedStatusIndicators.some(
                s => s === statusIndicator,
              ),
            }),
          )}
        />
      )}
    </div>
  )
}

Avatar.propTypes = {
  img: PropTypes.string.isRequired,
  size: PropTypes.oneOf(acceptedSizes),
  statusIndicator: PropTypes.oneOf(acceptedStatusIndicators),
  form: PropTypes.oneOf(avatarForm),
}

Avatar.defaultProps = {
  img: 'https://i.ibb.co/pf122MC/Screenshot-at-Feb-17-16-34-55.png',
}

export default Avatar

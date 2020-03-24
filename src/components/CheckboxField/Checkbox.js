import React from 'react'
import Icon from '../Icon'
import styles from './style.scss'
import getMergedClassNames from '../../utils/getMergedClassNames'

const baseClass = 'checkbox'

const Checkbox = props => {
  const { className, ...restProps } = props
  const mergedClassNames = getMergedClassNames(
    styles[`${baseClass}__square`],
    className,
  )

  return (
    <div>
      <input
        className={styles[`${baseClass}__input`]}
        {...restProps}
        type="checkbox"
      />
      <div className={mergedClassNames}>
        <Icon className={styles[`${baseClass}__checkmark`]} name="check" color="#fff" size={16} />
      </div>
    </div>
  )
}

export default Checkbox

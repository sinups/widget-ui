/**
 * Copyright 2020 wdgt <dev@justiva.ru>
 * @Sinups
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './styles.scss'
import Avatar from '../Avatar'

function Notification(props) {
  const classes = classNames(styles.container, props.className)

  return (
    <div className={classes}>
      <div className={styles.notification}>
        <div className={styles.avatar}>
          <Avatar
            img="https://i.ibb.co/DLTcH8x/Bitmap-1.jpg"
            size="regular"
            statusIndicator="online"
          />
        </div>
        <div className={styles.info}>
          {/*<Breadcrumbs />*/}
         <p className={styles.sub_title}>{props.children}</p>
        </div>
      </div>
    </div>
  )
}

Notification.propTypes = {
  /** Дополнительный класс */
  className: PropTypes.string,
  /** Дочерние элементы Notification */
  children: PropTypes.node.isRequired,
  /** Клик на Элемент */
  onClick: PropTypes.func,
}

Notification.defaultProps = {
  onClick: () => {},
}

export default Notification

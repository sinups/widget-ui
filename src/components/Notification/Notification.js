/**
 * Copyright 2020 wdgt <dev@justiva.ru>
 * @Sinups
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './styles.scss'
import Avatar from '../Avatar'
import Breadcrumbs from '../Breadcrumbs'

function Notification(props) {
  const classes = classNames(styles.container, props.className)

  return (
    <div className={classes}>
      <div className={styles.notification} style={{ background: `${props.bgNotification}` }}>
        <div className={styles.avatar}>
          <Avatar
            img={props.avatarUrl}
            size="regular"
            statusIndicator="online"
          />
        </div>
        <div className={styles.info}>
          <Breadcrumbs content={props.consultantName} subContent={props.consultantStatus} inverted={props.invertColor} />
          <p className={styles.sub_title} style={{ color: `${props.textColor}` }}>{props.children}</p>
        </div>
      </div>
    </div>
  )
}

Notification.propTypes = {
  /** Дополнительный класс */
  className: PropTypes.string,
  /** Цвет текста */
  textColor: PropTypes.string,
  /** Переключатель Breadcrumbs темный/Светлый */
  invertColor: PropTypes.string,
  /** Url аватарки */
  avatarUrl: PropTypes.string,
  /** Background оповещение */
  bgNotification: PropTypes.string,
  /** Дочерние элементы Notification */
  children: PropTypes.node.isRequired,
  /** Имя консультанта в хлебных крошках */
  consultantName: PropTypes.string,
  /** Статус консультанта в хлебных крошках */
  consultantStatus: PropTypes.string,
  /** Клик на Элемент */
  onClick: PropTypes.func,
}

Notification.defaultProps = {
  onClick: () => {},
}

export default Notification

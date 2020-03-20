/**
 * Copyright 2020 wdgt <dev@justiva.ru>
 * @Sinups
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './styles.scss'
import Avatar from '../Avatar'

function Header(props) {
  const classes = classNames(styles.container, props.className)

  return (
    <div className={classes}>
      <div className={styles.header} style={{ background: `${props.bgHeader}` }}>
        <div className={styles.avatar}>
          <Avatar
            img={props.avatarUrl}
            size="regular"
            statusIndicator="online"
          />
        </div>
        <div className={styles.info}>
          <div style={{ color: `${props.textColor}` }}>{props.consultantName}</div>
          <div className={styles.sub_title} style={{ color: `${props.textColor}` }}>{props.children}</div>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  /** Дополнительный класс */
  className: PropTypes.string,
  /** Цвет текста */
  textColor: PropTypes.string,
  /** Url аватарки */
  avatarUrl: PropTypes.string,
  /** Background Header */
  bgHeader: PropTypes.string,
  /** Дочерние элементы Notification */
  children: PropTypes.node.isRequired,
  /** Имя консультанта в Header */
  consultantName: PropTypes.string,
  /** Клик на Элемент */
  onClick: PropTypes.func,
}

Header.defaultProps = {
  onClick: () => {},
}

export default Header

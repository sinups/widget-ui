/**
 * Copyright 2020 wdgt <dev@justiva.ru>
 * @Sinups
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './styles.scss'
import { privacyCondition } from './window.js'

function Privacy(props) {
  const classes = classNames(styles.privacy_policy, props.className)

  return (
    <div className={classes}>
      {props.checkbox ?
        <label className={styles.container}>
          <input
            type="checkbox"
            defaultChecked
            disabled
          />
          <span className={styles.checkmark} />
        </label>
        : null
      }

      <div className={styles.privacy_policy_text}>
        {props.children}
        <span onClick={e => (privacyCondition(e))}>{props.privacyLinkTitle}</span>
      </div>
    </div>
  )
}

Privacy.propTypes = {
  /** Дополнительный класс */
  className: PropTypes.string,
  /** Название ссылки на открытии окна */
  privacyLinkTitle: PropTypes.string,
  /** Поставить галочку в начало */
  checkbox: PropTypes.bool,
  /** Дочерние элементы Privacy */
  children: PropTypes.node.isRequired,
  /** Клик на Элемент */
  onClick: PropTypes.func,
}

Privacy.defaultProps = {
  privacyLinkTitle: 'обработку персональных данных',
  checkbox: false,
}

export default Privacy

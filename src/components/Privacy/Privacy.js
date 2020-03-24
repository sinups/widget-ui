/**
 * Copyright 2020 wdgt <dev@justiva.ru>
 * @Sinups
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './styles.scss'
import { privacyCondition } from './window.js'
import CheckboxField from '../CheckboxField'

function Privacy(props) {
  const classes = classNames(styles.privacy_policy, props.className)
  const [checked, setchecked] = useState(false)

  return (
    <div className={classes}>
      {props.checkbox
        ? (
          <CheckboxField
            checked={true}
            // onClick={() => setState({ checked: !state.checked })}
            id="checkbox-privacy"
          />

        )
        : null}

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

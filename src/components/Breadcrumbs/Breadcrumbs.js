/**
 * Copyright 2020 wdgt <dev@justiva.ru>
 * @Zaritsky
 */

import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.scss'

const Breadcrumbs = ({ content, subContent, className }) => (
  <div className={`${styles.breadcrumb} ${className}`}>
    <div>{content}</div>
    {content && subContent && <div className={styles.dot}> </div>}
    {subContent && <div className={styles.subContent}>{subContent}</div>}
  </div>
)

Breadcrumbs.propTypes = {
  /** Главный контент */
  content: PropTypes.string,
  /** Дополнительный контент */
  subContent: PropTypes.string,
  /** Дополнительный класс */
  className: PropTypes.string,
}

Breadcrumbs.defaultProps = {
  className: '',
  content: 'Виктория',
  subContent: 'Юрист Онлайн',
}

export default Breadcrumbs

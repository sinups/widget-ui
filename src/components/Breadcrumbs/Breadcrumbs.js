/**
 * Copyright 2020 wdgt <dev@justiva.ru>
 * @Zaritsky
 */

import React from 'react'
import PropTypes from 'prop-types'
//style.scss
import styles from './style.module.scss'

const Breadcrumbs = ({ content, subContent, className }) => (
  <div className={`${styles.breadcrumbStyles} ${className}`}>
    <div>{content}</div>
    {content && subContent && <div className={styles.dot}> </div>}
    {subContent && <div className={styles.subContentStyle}>{subContent}</div>}
  </div>
)

Breadcrumbs.propTypes = {
  /** Главный контент */
  content: PropTypes.string,
  /** Дополнительный контент */
  subContent: PropTypes.string,
  className: PropTypes.string,
}

Breadcrumbs.defaultProps = {
  className: '',
  content: 'Виктория',
  subContent: 'Юрист Онлайн',
}

export default Breadcrumbs

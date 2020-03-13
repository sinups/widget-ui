/**
 * Copyright 2020 wdgt <dev@justiva.ru>
 * @Zaritsky
 */

import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'

const { breadcrumbStyles, dot, subContentStyle } = styles

const Breadcrumbs = ({ content, subContent, className }) => (
  <div className={`${breadcrumbStyles} ${className}`}>
    <div>{content}</div>
    {content && subContent && <div className={dot}> </div>}
    {subContent && <div className={subContentStyle}>{subContent}</div>}
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

/**
 * Copyright 2020 wdgt <dev@justiva.ru>
 * @Zaritsky
 */

import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.scss'

const Breadcrumbs = ({
  content,
  subContent,
  className,
  inverted,
}) => {
  const color = inverted ? '#fff' : '#2f2e39'

  return (
    <div className={`${styles.breadcrumb} ${className}`} style={{ color }}>
      <div>{content}</div>
      {content && subContent && (
        <div className={styles.dot} style={{ backgroundColor: color }}>
          {' '}
        </div>
      )}
      {subContent && <div className={styles.subContent}>{subContent}</div>}
    </div>
  )
}

Breadcrumbs.propTypes = {
  /** Главный контент */
  content: PropTypes.string,
  /** Дополнительный контент */
  subContent: PropTypes.string,
  /** Дополнительный класс */
  className: PropTypes.string,
  /** Активно - меняет цвет текста на светлый */
  inverted: PropTypes.bool,
}

Breadcrumbs.defaultProps = {
  className: '',
  content: 'Виктория',
  subContent: 'Юрист Онлайн',
  inverted: false,
}

export default Breadcrumbs

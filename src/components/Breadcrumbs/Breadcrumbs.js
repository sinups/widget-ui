/**
 * Copyright 2020 wdgt <dev@justiva.ru>
 * @Zaritsky
 */

import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.scss'

const Breadcrumbs = ({
  content, className, inverted, textColor,
}) => {
  let color = inverted ? '#fff' : '#2f2e39'
  if (textColor !== '') color = textColor

  return (
    <div className={`${styles.breadcrumb} ${className}`} style={{ color }}>
      <div>{content[0]}</div>
      {content.length >= 2 && (
        <>
          <div className={styles.dot} style={{ backgroundColor: color }}>
            {' '}
          </div>
          <div className={styles.subContent}>{content[1]}</div>
        </>
      )}
    </div>
  )
}

Breadcrumbs.propTypes = {
  /** По умолчанию не выводит "Хлебные крошки", если передать параметр пустым `breadcrumbs`,
   *  то выводит стандартный текст "хлебных крошек".
   *  массив с одним элементом `breadcrumbs={['Виктория']}` выводит только главный контент.
   *  массив с двумя элементами `breadcrumbs={['Виктория', 'Юрист Онлайн']}` выводит главный контент и второстепенный контент. */
  content: PropTypes.array,
  /** Дополнительный класс */
  className: PropTypes.string,
  /** Активно - меняет цвет текста на светлый */
  inverted: PropTypes.bool,
  /** Цвет текста */
  textColor: PropTypes.string,
}

Breadcrumbs.defaultProps = {
  className: '',
  content: ['Виктория', 'Юрист Онлайн'],
  inverted: false,
  textColor: '',
}

export default Breadcrumbs

/**
 * Copyright 2020 wdgt <dev@justiva.ru>
 * @Zaritsky
 */

import React from 'react'
import PropTypes from 'prop-types'
import BreadcrumbsStyles from './BreadcrumbsStyles'

const Breadcrumbs = ({ content, subContent }) => (
  <BreadcrumbsStyles>
    <div className="support__name">{content}</div>
    {content && subContent && <div className="dot"> </div>}
    <div className="support__info">{subContent}</div>
  </BreadcrumbsStyles>
)

Breadcrumbs.propTypes = {
  /** Имя отправителя сообщения */
  content: PropTypes.string,
  /** Статус отправителя */
  subContent: PropTypes.string,
}

Breadcrumbs.defaultProps = {
  content: 'Виктория',
  subContent: 'Юрист Онлайн',
}

export default Breadcrumbs

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
    {subContent && <div className="support__info">{subContent}</div>}
  </BreadcrumbsStyles>
)

Breadcrumbs.propTypes = {
  /** Главный контент */
  content: PropTypes.string,
  /** Дополнительный контент */
  subContent: PropTypes.string,
}

Breadcrumbs.defaultProps = {
  content: 'Виктория',
  subContent: 'Юрист Онлайн',
}

export default Breadcrumbs

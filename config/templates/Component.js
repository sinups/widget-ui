/**
 * Copyright <%= new Date().getFullYear() -%> wdgt <dev@justiva.ru>
 * @<%= devname %>
 */

<% if (functional) { -%>
import React from 'react';
import PropTypes from 'prop-types';
<% } else { -%>
import React, { PureComponent} from 'react';
<% } -%>
<% if (styles) { -%>
import classNames from 'classnames';
import styles from './styles.scss';

<% } -%>
<% if (functional) { -%>
function <%= name %>(props) {
<% if (styles) { -%>
  const classes = classNames(styles.container, props.className);

  return (
    <div classNames={classes}>
      {props.children}
    </div>
  );
<% } else { -%>
  return (
    <div>
      {props.children}
    </div>
  );
<% } -%>
}

<%= name %>.propTypes = {
  <% if (styles) { -%>
  /** Дополнительный класс */
  className: PropTypes.string,
  <%} -%>
  /** Дочерние элементы <%= name %> */
  children: PropTypes.node.isRequired,
  /** Клик на Элемент */
  onClick: PropTypes.func,
}

<%= name %>.defaultProps = {
  onClick: () => {},
}

export default <%= name %>
<% } else { -%>
export class <%= name %> extends PureComponent<<%= name %>Props> {
  render() {
<% if (styles) { -%>
    const classes = classNames(styles.container, this.props.className);

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
<% } else { -%>
    return (
      <div>
        {this.props.children}
      </div>
    );
<% } -%>
  }
}
export default <%= name %>
<% } -%>

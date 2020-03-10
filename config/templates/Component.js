/**
 * Copyright <%= new Date().getFullYear() -%> wdgt <dev@justiva.ru>
 * @<%= devname %>
 */

<% if (functional) { -%>
import React from 'react'
<% } else { -%>
import React, { PureComponent} from 'react';
<% } -%>
<% if (styles) { -%>
import classNames from 'classnames';

import styles from './<%= name %>.scss';
<% } -%>

export type <%= name %>Props = {
<% if (styles) { -%>
  className?: string,
<% } -%>
  children?: Node
};

<% if (functional) { -%>
export function <%= name %>(props: <%= name %>Props) {
<% if (styles) { -%>
  const classes = classNames(styles.container, props.className);

  return (
    <div className={classes}>
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

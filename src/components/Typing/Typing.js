/**
 * Copyright 2020 wdgt <dev@justiva.ru>
 * @Sinups
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import styles from './styles.scss'

function Typing(props) {
  const classes = classNames(styles.container, props.className)

  return (
    <div className={classes}>
      <TransitionGroup>
        <CSSTransition
          className={{
            enter: styles.enter,
            enterActive: styles.enterActive,
            exit: styles.leave,
            exitActive: styles.leaveActive,
          }}
          timeout={{ enter: 100, exit: 100 }}
        >
          <div className={styles.typing}>

            <div className={`${styles.indicator} `}>
              <div className={`${styles.dotted} ${styles.normal}`}>
                <div className={styles.dot} />
                <div className={styles.dot} />
                <div className={styles.dot} />
              </div>
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

Typing.propTypes = {
  /** Дополнительный класс */
  className: PropTypes.string,
  /** Дочерние элементы Typing */
  children: PropTypes.node.isRequired,
  /** Клик на Элемент */
  onClick: PropTypes.func,
}

Typing.defaultProps = {
  onClick: () => {},
}

export default Typing

import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// import Switcher from '../../../src/lib/components/Switcher';
import styles from './Wrapper.scss';
import createSequence from '../createSequence';

const seq = createSequence();

class Wrapper extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      isTransparent: false
    };

    this.id = 'background_toggler_' + seq.next();
  }

  handleBackgroundToggle = (isTransparent) => this.setState({ isTransparent });


  renderBackgroundToggle() {
    const { isTransparent } = this.state;

    // return (
    //   <Switcher
    //   id={this.id}
    //   name="toggle"
    //   className={styles.toggle}
    //   value={isTransparent}
    //   onChange={this.handleBackgroundToggle}
    //   label="Прозрачность"
    //   />
    
    // );
  }

  render() {
    const wrapperClassName = classNames(styles.wrapper, this.state.isTransparent ? styles.transparent : styles.white);

    return (
     
        <Fragment>
          <div className={styles.container}>
            <header className={styles.header}>
              {this.renderBackgroundToggle()}
              <div className={styles.spacer} />
             Sinups
            </header>
            <div className={wrapperClassName}>
              {this.props.children}
            </div>
          </div>
        </Fragment>
     
    );
  }
}

export default Wrapper;

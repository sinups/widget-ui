import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Switch from '../../../../src/components/Switch'
import styles from './Wrapper.scss';
import createSequence from '../../utilits/createSequence';

const seq = createSequence();

class Wrapper extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      isTransparent: true
    };
    this.id = 'background_toggler_' + seq.next();
  }

  handleBackgroundToggle = () => {
    this.setState(state => ({
      isTransparent: !state.isTransparent
    }));
  }

  renderBackgroundToggle() {
    const { isTransparent } = this.state;

    return (
      <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <Switch
          id={this.id}
          size="medium"
          className={styles.toggle}
          on={isTransparent}
          onClick={this.handleBackgroundToggle}
          value={isTransparent}
          label="Прозрачность"
        />
        <span style={{
          marginLeft: '10px',
          alignItems: 'center'
        }}> Прозрачность </span>
      </div>
    );
  }

  render() {
    const wrapperClassName = classNames(styles.wrapper, this.state.isTransparent ? styles.transparent : styles.white);
    // console.log('children', getPathLine())
    return (

        <Fragment>
          <div className={styles.container}>
            <header className={styles.header}>
              {this.renderBackgroundToggle()}
              <div className={styles.spacer} />
              <a target='_blank' href={`https://www.npmjs.com/package/wgt-ui`}>
                <img src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.3.0/svg/package.svg" alt="npm icon" />
              </a>
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

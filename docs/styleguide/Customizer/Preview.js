import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';
import DefaultPreview from 'react-styleguidist/lib/client/rsg-components/Preview/Preview';

const THEMES = ['light', 'transparent',];
const BACKGROUND_COLOR = {
  light: '#fff',
  transparent: 'linear-gradient(45deg, #efefef 25%, transparent 25%, transparent 75%, #efefef 75%, #efefef),linear-gradient(45deg, #efefef 25%, transparent 25%, transparent 75%, #efefef 75%, #efefef)'
};
const BORDER_COLOR = {
  light: '#ddd',
  transparent: 'transparent'
};
const COLOR = {
  light: '#fff',
  transparent:'#fff'
};

const styles = ({ fontFamily }) => ({
  previewBg: {
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 20,
    borderRadius:'3px',
    backgroundColor: '#fff',
    backgroundPosition: '0 0, 10px 10px',
    backgroundSize: '20px 20px'
  },
  themeButtonWrapper: {
    position: 'relative'
  },
  themeButton: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    background: '#3e89fa',
    borderRadius:'3px',
    padding: '5px 7px',
    fontSize: 13,
    fontFamily: fontFamily.base,
    border: 'none',
    boxShadow: 'none',
    cursor: 'pointer',
    ':focus': {
      outline: 'none !important'
    },
    ':hover': {
      backgroundColor: 'red'
    },

    ':focus': {
      backgroundColor: 'green'
    },
  }
});

export class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: THEMES[0]
    };
  }

  toggleTheme() {
    this.setState({
      theme: this.state.theme === THEMES[0] ? THEMES[1] : THEMES[0]
    });
  }

  render() {
    const { code, classes, children } = this.props;
    const { theme } = this.state;
    const themedCode = code.replace(/theme='light'/g, `theme='${theme}'`);

    return (
      <div>
        <div className={classes.themeButtonWrapper}>
          <button
            className={classes.themeButton}
            onClick={this.toggleTheme.bind(this)}
            style={{ color: COLOR[theme] }}>
            { theme.toUpperCase() }
          </button>
        </div>
        <div
          className={classes.previewBg}
          style={theme === 'transparent' ? {
            backgroundImage: BACKGROUND_COLOR[theme],
            borderColor: BORDER_COLOR[theme]
          } : {
            background: BACKGROUND_COLOR[theme],
            borderColor: BORDER_COLOR[theme]
          }}>
          <DefaultPreview {...this.props} code={themedCode}>
            {children}
          </DefaultPreview>
        </div>
      </div>
    )
  }
}

Preview.propTypes = {
  classes: PropTypes.object.isRequired,
  code: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Styled(styles)(Preview);

import React from 'react';
import PropTypes from 'prop-types';
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showError: false };
  }

  componentDidCatch() {
    this.setState({ showError: true });
  }

  render() {
    if (this.state.showError) {
      return <h1>Jeepers! Something went wrong. Please refresh the browser and try again.</h1>;
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = { children: PropTypes.any };

export default ErrorBoundary;

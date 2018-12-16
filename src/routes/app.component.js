import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { IntlProvider } from 'react-intl';
import { translationMessages } from '../i18n';
import { GlobalStyle } from '../theme/global';


export class App extends PureComponent {
  static propTypes = {
    language: PropTypes.string,
    children: PropTypes.node,
    location: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Fragment>
        <Helmet
          titleTemplate="%s - Guess That Song"
          defaultTitle="Guess That Song"
        />

        <IntlProvider
          locale={this.props.language}
          messages={translationMessages[this.props.language]}
          location={this.props.location}
        >
          <Fragment>
            <GlobalStyle />
            {React.Children.only(this.props.children)}
          </Fragment>
        </IntlProvider>
      </Fragment>
    );
  }
}

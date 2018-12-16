import React from 'react';
import { shallow } from 'enzyme';

import { App } from '../app.component';


describe('App: Component', () => {
  const children = <div className="app__children">Children</div>;
  const defaultProps = {
    language: 'en',
    location: {},
    getMovieStatus: () => {},
  };

  const component = (props) => (
    <App {...defaultProps} {...props}>
      {children}
    </App>
  );

  it('should render App when language is set', () => {
    const wrapper = shallow(component({ language: 'en' }));
    global.expect(wrapper).toMatchSnapshot();
  });
});

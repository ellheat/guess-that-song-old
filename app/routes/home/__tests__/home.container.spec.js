import { expect } from 'chai';
import { spy } from 'sinon';

import { mapDispatchToProps } from '../home.container';
import { UsersActions } from '../../../modules/users/users.redux';


describe('Home: Container', () => {
  describe('mapDispatchToProps', () => {
    it('should call UsersActions.connectUser', () => {
      const dispatch = spy();

      mapDispatchToProps(dispatch).connectUser();

      expect(dispatch).to.have.been.calledWith(UsersActions.connectUser());
    });
  });
});

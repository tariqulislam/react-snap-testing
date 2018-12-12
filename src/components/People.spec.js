import React from 'react'
import renderer from 'react-test-renderer'
import People from './People'

describe(`Test People Information in row`, () => {
  it('renders the row without people inforamtion', () => {
      const tree = renderer.create(<People />).toJSON();
      expect(tree).toMatchSnapshot();
  });

  it('renders the row with people information', () => {
      const people = { id: 1, username: 'tariqulislam', email: 'tariqul.islam.rony@gmail.com', phone: 'phone'};
      const tree = renderer.create(<People item={people}  />).toJSON();
      expect(tree).toMatchSnapshot();
  })
});
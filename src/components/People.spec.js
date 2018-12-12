import React from 'react'
import renderer from 'react-test-renderer'
import People from './People'

describe(`Test People Information in row`, () => {
  it('renders the row without people inforamtion', () => {
      const tree = renderer.create(<People />).toJSON();
      expect(tree).toMatchSnapshot();
  });
});
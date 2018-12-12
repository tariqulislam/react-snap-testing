import React from 'react'
import renderer from 'react-test-renderer'
import People from './People'

// it('renderers correctly when there is no items', () => {
//     const tree = renderer.create(<Items />).toJSON();
//     expect(tree).toMatchSnapshot();
// })

// it('renders correctly when there is a item in Item', () => {
//     const items = ["tree", "man", "woman"];
//     const tree = renderer.create(<Items items={items} />).toJSON()
//     expect(tree).toMatchSnapshot()
// })
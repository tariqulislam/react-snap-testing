import React from 'react'
import renderer from 'react-test-renderer'

import Items from './Items'

Items('renderers correctly when there is no items', () => {
    const tree = renderer.create(<Items />).toJSON();
    expect(tree).toMatchSpanshot();
})
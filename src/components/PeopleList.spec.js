import React from 'react'
import renderer from 'react-test-renderer'
import PeopleList from './PeopleList'
import lstPeoples from '../DataSource.json'

describe('It Should be testing People List Component', () => {
    it('Should test Undefined People list in peoplelist', () => {
         const tree = renderer.create(<PeopleList />).toJSON();
         expect(tree).toMatchSnapshot();
    });

    it('Should test empty Peple List in Component', () => {
        const tree = renderer.create(<PeopleList lstPeoples={[]}/>).toJSON();
        expect(tree).toMatchSnapshot()
    });

    it('Should create the table list of People in Component', () => {
        const tree = renderer.create(<PeopleList lstPeoples={lstPeoples} />).toJSON();
        expect(tree).toMatchSnapshot()
    });
});
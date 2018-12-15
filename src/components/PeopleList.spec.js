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

    it('Should render the 1 rows In people List', () => {
        let peopleList = [{
            id: 1,
            username: "Bret",
            email: "Sincere@april.biz",
            phone: "1-770-736-8031 x56442"
        },
        {
            id: 2,
            username: "Lean",
            email: "lean@april.biz",
            phone: "1-770-736-8033 x56442"
        }
        ];

          const tree = renderer.create(<PeopleList lstPeoples={peopleList} />).toJSON();
          expect(tree).toMatchSnapshot()
    });
});
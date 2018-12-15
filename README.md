# Snapshot Testing With React JS And Jest Using TDD

As Developer, We are facing different types of bugs and errors, during development time. Some Bugs make developer life hell. So using testing framework or testing tool and TDD(Test Driven Development) are helpful for developer to create less and non critical bugs during developement.

# Installation and Configuration

1. clone or download the `https://github.com/tariqulislam/react-snap-testing.git` repository
2. run command to `terminal` or `cmd` `npm install` or `yarn install`
3. Then run command `npm test`

## For Update the snapshot of test using

1. Run command `npm test -u`

## Create React Test Component 
1. Create React JS Component with name `<filename>.jsx`
```javascript
import React from 'react'
import PropTypes from 'prop-types'

function People (props) {
    const {item} = props
    return (
       <tr>
           <td>{item.id}</td>
           <td>{item.username}</td>
           <td>{item.email}</td>
           <td>{item.phone}</td>
       </tr>
    )
}

People.propTypes = {
    item: PropTypes.object,
}

export default People;
```

## Write the Test Case

1. You can write your own test case.
 1.1 Create the File in `src/components` folder with `<filename>.spec.js` or `<filename>.test.js`.
 1.2 Import the React Component which You are using for test in `<filename>.spec.js` file.
 1.3 Write the Test case using describe() and it() test scope function.
 
## Example of create test case 
```javascript
import React from 'react'
import renderer from 'react-test-renderer'
import People from './People'

describe(`Test People Information in row`, () => {
  it('renders the row without people inforamtion', () => {
      const tree = renderer.create(<People />).toJSON();
      expect(tree).toMatchSnapshot();
  });
});

```

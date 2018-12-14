import React, {Component} from 'react'
import PropTypes from 'prop-types'


class PeopleList extends Component {
  render() {
    const {lstPeoples} = this.props

    if(!lstPeoples) {
      return <span> Invalide Data Format for People List</span>
    }

    if(!lstPeoples.length) {
      return <span> Empty List View </span>
    }

    return (
        <div>
          {/* Create the table header which is Similar to JSON object
            in /src/DataSource.json file
          */}
            <table>
              <thead>
                 <tr>
                  <th>Id</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
              {
                lstPeoples && lstPeoples.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                      </tr>
                    )
                })
              }
              </tbody>
            </table>
        </div>
    )
  }
}

PeopleList.propTypes = {
  lstPeoples: PropTypes.array
}

export default PeopleList
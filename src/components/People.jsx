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
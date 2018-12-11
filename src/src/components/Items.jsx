import React from 'react'
import PropTypes from 'prop-types'

function Items (props) {
    const {items = []} = props;

    if (!items.length) {
      return <span> No Items In List </span>;
    }

    if(items.length === 1) {
        return <span>{items[0]}</span>;
    }

    return (
        <ul>
          {items.map(item => <li key={item}>{item}</li>)}
        </ul>
    )
}

Items.propTypes = {
    items: PropTypes.array,
}

export default Items;
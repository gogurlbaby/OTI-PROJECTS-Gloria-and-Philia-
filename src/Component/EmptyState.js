import React from 'react'
import { Empty } from 'antd';


function EmptyState(props) {
    return (
<div>
   <Empty

    image={props.image}

    description={props.description}

    style={props.style}
    >
  </Empty> 
 </div>
    )
}

export default EmptyState

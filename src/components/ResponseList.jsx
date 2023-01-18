import React from 'react';
import ListItem from './ListItem.jsx';

const ResponseList = ({responseData}) => {
  return (
    responseData.map((data, index)=>{
        return (
            <ListItem data={ data } key={ index }/>
        );
    })
  )
}

export default ResponseList
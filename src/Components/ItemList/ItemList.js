import React from 'react'
import Item from '../Item/Item'

const ItemList = ({item}) => {  
    return (
        <div>
            {
                item.map(item=>
                    <div className='col-md-6' key={item.id}> 
                        <Item item={item}/>
                    </div>                   
                    )
                }
        </div>
    )
}

export default ItemList;
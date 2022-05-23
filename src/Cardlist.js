import React from 'react';
import Card from './Card';

const Cardlist = ({robots}) => {
    const cardCounter = robots.map((user,i)=> {
        return <Card key={i} id={robots[i].id } name={robots[i].name} email={robots[i].email } />
    })
    return (
        <div>
            {cardCounter}
        </div>
    )

}

export default Cardlist
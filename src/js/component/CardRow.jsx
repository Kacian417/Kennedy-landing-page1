import React from 'react';

import Card from './Card';

const CardRow = () => {
    return (
        <>

            <div className="d-flex row col-10 row-cols-md-5 mx-auto gap-1">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
}

export default CardRow;
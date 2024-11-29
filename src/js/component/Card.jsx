import React from 'react';

const Card = () => {

    return (
        <>
            <div className="card mx-auto px-0" style={{"width": "15rem;"}}>
                <img src="https://picsum.photos/100" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-center">Card title</h5>
                    <p className="card-text text-center">Lee Shiver me timbers Nelsons folly long boat scourge of the seven seas quarterdeck loaded to the gunwalls.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
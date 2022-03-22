import React from 'react';
import { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom'; 

const People = () => {
    const [people, setPeople] = useState([])

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
        .then(res => res.json())
        .then(res => setPeople(res))
        .catch(err => alert(err.message)); 

    }, []); 

    return (
        <div className="col-md-6">
        <ul className="list-group mb-4">
            {people.map(peep => (
                 <li key={`film-${peep?.id}`} 
                 className="list-group-item d-flex justify-content-between align-items-center">
                    <span> {peep?.name}</span>
                    <Link to={`/people/${peep.id}`} className="btn btn-outline-secondary" >
                         More Details
                    </Link>
                    {console.log(peep.id)} 
                 </li>
            ))}
           
        </ul>
    </div>
    )
}

export default People; 
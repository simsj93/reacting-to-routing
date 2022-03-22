import React from 'react';
import { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom'; 

const Films = () => {
    const [films, setFilms] = useState([])

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(res => setFilms(res))
        .catch(err => alert(err.message)); 

    }, []); 

    return (
        <div className="col-md-6">
        <ul className="list-group mb-4">
            {films.map(film => (
                 <li key={`film-${film?.id}`} 
                 className="list-group-item d-flex justify-content-between align-items-center">
                    <span> {film?.title}</span>
                    <Link to={`/films/${film.id}`} className="btn btn-outline-secondary" >
                         More Details
                    </Link>
                 </li>
            ))}
           
        </ul>
    </div>
    )
}

export default Films; 
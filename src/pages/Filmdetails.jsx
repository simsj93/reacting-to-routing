import React from 'react';
import { useState, useEffect} from 'react'; 
import { useParams, Link } from 'react-router-dom'

const Filmdetails = () => {
    const { filmid } =  useParams(); 
    const [details, setDetails] = useState(null); 

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
        .then(res => res.json())
        .then(res => setDetails(res))
        .catch(err => alert(err.message)); 

    }, []); 

    return (
        <div className="col-md-6">
                    <div className="card shadow rounded">
                        <div className="card-body">
                            <h4 className="card-title">{details?.title}</h4>
                            <p>{details?.release_date}</p>
                            <p className='small'>{details?.description}</p>
                            <Link to={'/films'} className='btn btn-outline-secondary'>
                         Return to Film List
                         </Link>
                        </div>
                    </div>
                </div>
    )
}

export default Filmdetails; 
import React from 'react';
import { useState, useEffect} from 'react'; 
import { useParams, Link } from 'react-router-dom'

const Filmdetails = () => {
    const { peopleid } =  useParams(); 
    const [details, setDetails] = useState(null); 

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${peopleid}`)
        .then(res => res.json())
        .then(res => setDetails(res))
        .catch(err => alert(err.message)); 

    }, []); 

    return (
        <div className="col-md-6">
                    <div className="card shadow rounded">
                        <div className="card-body">
                            <h4 className="card-title">{details?.name}</h4>
                            <p>{details?.gender} | {details?.age}</p>
                            <p className="small">Eye Color: {details?.eye_color}</p>
                            <p className="small">Hair Color: {details?.hair_color}</p>
                            <Link to={'/people'} className='btn btn-outline-secondary'>
                         Return to People List
                         </Link>
                        </div>
                    </div>
                </div>
    )
}

export default Filmdetails; 
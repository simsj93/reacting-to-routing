import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import Home from './pages/Home';
import Films from './pages/Films'; 
import Filmdetails from './pages/Filmdetails'; 
import People from './pages/People'; 
import Peopledetails from './pages/Peopledetails'; 
import './styles.css'; 


const App = () => {
    return (
        <BrowserRouter>
            <main className="container mt-5">
                <section className="row justify-content-center">
                    <Link className="btn btn-outline-secondary m-2" to='/'>Disapproving Miyazaki</Link>
                    <Link className="btn btn-outline-secondary m-2" to='/films'>View Films</Link>
                    <Link className="btn btn-outline-secondary m-2 mb-4" to='/people'>View People</Link>
                </section>
                <section className="row justify-content-center">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path='/films' element={<Films />}/>
                            <Route path="/films/:filmid" element={<Filmdetails />} />
                            <Route path="/people" element={<People />} />
                            <Route path="/people/:peopleid" element={<Peopledetails />} /> 
                            <Route path="*" element={<h1>404 Not Found</h1>} />
                        </Routes>
                    
                </section>
            </main>
        </BrowserRouter>
    );
}

export default App; 

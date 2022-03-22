import React from 'react';
import Miyazaki from '../animemistake.jpeg'; 

const Home = () => {
    return (
        <>
        <section className="row"> 
        <h5>Hayao Miyazaki (宮崎 駿, Miyazaki Hayao, [mijaꜜzaki hajao]; born January 5, 1941) is a Japanese animator, director, producer, screenwriter, author, and manga artist. A co-founder of Studio Ghibli, he has attained international acclaim as a masterful storyteller and creator of Japanese animated feature films, and is widely regarded as one of the most accomplished filmmakers in the history of animation.</h5>
        <p className="text-center small">- Wikipedia</p>
        <div className="mb-4 col-lg text-center">
        <img className="rounded" src={Miyazaki} alt="He said it, not me." /> 
        </div>
       
         </section>
        </>
    )
}

export default Home; 
import React, { Component,useContext } from 'react';
import { UserContext } from '../contexts/context';


// class Home extends Component {
//     state = {  }
//     render() { 
//         return ( <h2>Home</h2> );
//     }
// }
 
// export default Home;


const Home = () => {
    const { value, setValue } = useContext(UserContext);
    return (
        <>
            <h1>Home Page,{value}</h1>
            <button className="btn btn-primary" onClick={()=>{ setValue("Hey From Home")}}>Change Value</button>
        </>
    );
}

export default Home;
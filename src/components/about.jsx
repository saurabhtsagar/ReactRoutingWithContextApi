import React, { Component, useContext } from 'react';
import { UserContext } from '../contexts/context';

// class About extends Component {
//     state = {};
//     static user = useContext(UserContext);
//     render() {      
//         return (<h1>About Page</h1>);
//     }

// }

// export default About;

const About = () => {
    const { value, setValue } = useContext(UserContext);
    return (
        <>
            <h1>About Page,{value}</h1>
            <button className="btn btn-primary" onClick={() => { setValue("Hey From About") }}>Change Value</button>
        </>
    );
}

export default About;
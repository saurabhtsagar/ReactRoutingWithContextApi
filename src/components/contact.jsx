// import React, { useState } from 'react';

// const Contact = () => {
//     const [value, setValue] = useState('');

//     const onChange = (event) => {
//         setValue(event.target.value);
//     };

//     return (
//         <>
//             <div>Input value: {value}</div>
//             <input value={value} onChange={onChange} />
//         </>
//     );
// }

// export default Contact;

import React, { useState } from "react";
const Contact = () => {
    const [name, setName] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${name}`)
    }

    const handleChange = (evt) => {return setName(evt.target.value)}

    return (
        <>
            <p className="text-primary">{name}</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Frirst Name:
                    <input
                        type="text"
                        value={name}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    );
}

export default Contact;


import React from 'react';

const Heading = (props) => {
    return <h1 className="text-center">{props.title}</h1>;
}

export default Heading;

// Daha kısa hali
// export default (props) => <h1 className="text-center">{props.title}</h1>;
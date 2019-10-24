import React from 'react';

class Heading extends React.Component {
    render() {
        return <h1 className="text-center">{this.props.title}</h1>;
    }
}

// const Heading = (props) => {
//     return <h1 className="text-center">{props.title}</h1>;

// }

export default Heading;

// export default p => <h1 className="text-center">{props.title}</h1>;
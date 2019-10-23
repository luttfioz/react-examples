import React from 'react';

const styles = {
    center: {
        textAlign: 'center',
        marginTop: 40
    }
}

const Heading = (props) => {
    return (<div style={styles.center}>
        <i className="material-icons">error</i>
        <h1>{props.message}</h1>
    </div>);
}

export default Heading;
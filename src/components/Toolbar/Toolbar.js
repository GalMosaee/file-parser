import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const toobar = (props) => {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/read-file">File Parser</Navbar.Brand>
        </Navbar>
    );
}

export default toobar;
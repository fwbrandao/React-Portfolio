import React from 'react';

// core components
import NavBar from '../components/NavBar/index';

class Index extends React.Component {

    componentDidMount() {
        document.body.classList.toggle("index-page");
    }
    componentWillUnmount() {
        document.body.classList.toggle("index-page");
    }

    render() {
        return (
            // <NavBar />
         );
    }
}

export default Index;
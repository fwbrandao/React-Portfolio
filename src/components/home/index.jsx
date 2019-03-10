import React from 'react';
import ComponentNavBar from '../NavBar';

class Home extends React.Component {
    componentDidMount() {
        document.body.classList.toggle("index-page");
    }
    componentWillUnmount() {
        document.body.classList.toggle("index-page");
    }

    render() {
        return (
            <div>
                <div>
                    <ComponentNavBar />
                </div>
            </div>
        );
    }
}

export default Home;
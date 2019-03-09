import React from 'react';
import { Link } from 'react-router-dom';
import Javascript30 from '../javascriptThirty';
import NavBar from '../NavBar';

class Home extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <div>
                    <Link to='/'>Fernando Brandao</Link>
                </div>
                <div>

                    {/* <NavBar /> */}
                </div>
                <div>
                    <Javascript30 />
                </div>
            </div>
        );
    }
}

export default Home;
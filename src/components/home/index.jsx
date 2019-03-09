import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Javascript30 from '../javascriptThirty';

class Home extends Component {
    state = {}
    render() {
        return (
            <div>
                <div>
                    <Link to='/home'>Fernando Brandao</Link>
                </div>
                <div>
                    <Javascript30 />
                </div>
            </div>
        );
    }
}

export default Home;
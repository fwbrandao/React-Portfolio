import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Javascript30 extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>Javascript30 - by Wesbos</h1>
                <div>
                    <ul>
                        <li>
                            <Link to='/drum' >Drum Kit</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Javascript30;
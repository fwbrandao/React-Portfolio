import React from 'react';
import { Link } from 'react-router-dom';

class Javascript30 extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <h1>Javascript30 - by Wesbos</h1>
                <div>
                    <ul>
                        <li>
                            <Link to='/drum' >Drum Kit </Link>
                        </li>
                        <li>
                            <Link to='/jsclock' >JS Clock</Link>
                        </li>
                        <li>
                            <Link to='/canvas' >Canvas</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Javascript30;
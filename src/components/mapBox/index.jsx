import React from 'react';
import { Link } from 'react-router-dom';

class MapBox extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <h1>MapBox</h1>
                <div>
                    <ul>
                        <li>
                            <Link to='/heatmap' >Heatmap</Link>
                        </li>
                        <li>
                            <Link to='/' >2</Link>
                        </li>
                        <li>
                            <Link to='/' >3</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MapBox;
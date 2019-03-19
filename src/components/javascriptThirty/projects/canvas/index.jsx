import React, { Component } from 'react';
import './canvas.css';

class Canvas extends Component {
    static contextTypes = {
        router: () => true, // replace with PropTypes.object if you use them
    }

    state = {}
    render() {
        return (
            <div className="mainCanvas">
                <div className='goBack'>
                    <buton className='btn btn-success' onClick={this.context.router.history.goBack}>Go Back</buton>
                </div>
                <canvas id="draw" width="800" height="800"></canvas>
            </div>
        );
    }
}

export default Canvas;
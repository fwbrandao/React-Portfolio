import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './canvas.css';

class Canvas extends Component {
    static contextTypes = {
        router: () => true, // replace with PropTypes.object if you use them
    }

    constructor(props) {
        super(props);
        this.canvasDiv = React.createRef();
    }

    componentDidMount() {
        // this.canvasDiv.current.addEventListener('mousemove', draw);
        // this.canvasDiv.current.addEventListener('mouseup', () => isDrawing = false);
        // this.canvasDiv.current.addEventListener('mouseout', () => isDrawing = false);
        // this.canvasDiv.current.addEventListener('mousedown', (e) => {
        //     isDrawing = true;
        //     [lastX, lastY] = [e.offsetX, e.offsetY];
        // });
        this.canvasDiv.current.focus();
    }

    componentWillUnmount() {
        // this.canvasDiv.current.addEventListener('mousemove', draw);
        // this.canvasDiv.current.addEventListener('mouseup', () => isDrawing = false);
        // this.canvasDiv.current.addEventListener('mouseout', () => isDrawing = false);
        // this.canvasDiv.current.addEventListener('mousedown', (e) => {
        //     isDrawing = true;
        //     [lastX, lastY] = [e.offsetX, e.offsetY];
        // });
    }

    state = {}

    getSelector() {
        const node = ReactDOM.findDOMNode(this);
        if (node instanceof HTMLElement) {
            const canvas = node.querySelector('#draw');
            const ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    }

//     ctx.strokeStyle = '#BADA55';
//     ctx.lineJoin = 'round';
//     ctx.lineCap = 'round';
//     ctx.lineWidth = 100;
//     // ctx.globalCompositeOperation = 'multiply';

//     let isDrawing = false;
// let lastX = 0;
// let lastY = 0;
// let hue = 0;
// let direction = true;

// function draw(e) {
//     if (!isDrawing) return; // stop the fn from running when they are not moused down
//     console.log(e);
//     ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
//     ctx.beginPath();
//     // start from
//     ctx.moveTo(lastX, lastY);
//     // go to
//     ctx.lineTo(e.offsetX, e.offsetY);
//     ctx.stroke();
//     [lastX, lastY] = [e.offsetX, e.offsetY];

//     hue++;
//     if (hue >= 360) {
//         hue = 0;
//     }
//     if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
//         direction = !direction;
//     }

//     if (direction) {
//         ctx.lineWidth++;
//     } else {
//         ctx.lineWidth--;
//     }

// }


render() {
    return (
        <div className="mainCanvas" ref={this.canvasDiv}>
            <div className='goBack'>
                <buton className='btn btn-success' onClick={this.context.router.history.goBack}>Go Back</buton>
            </div>
            <canvas id="draw" width="800" height="800"></canvas>
        </div>
    );
}
}

export default Canvas;
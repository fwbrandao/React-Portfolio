import React, { Component } from 'react';

import './flexPanel.css';

class FlexPanel extends Component {
    toggleOpen1() {
        const panel1 = document.querySelector('.panel1');
        panel1.classList.toggle('open');
    };

    toggleOpen2() {
        const panel2 = document.querySelector('.panel2');
        panel2.classList.toggle('open');
    };

    toggleOpen3() {
        const panel3 = document.querySelector('.panel3');
        panel3.classList.toggle('open');
    };

    toggleOpen4() {
        const panel4 = document.querySelector('.panel4');
        panel4.classList.toggle('open');
    };

    toggleOpen5() {
        const panel5 = document.querySelector('.panel5');
        panel5.classList.toggle('open');
    };

    toggleActive(e) {
        console.log(e.propertyName);
        if (e.propertyName.includes('flex')) {
            this.classList.toggle('open-active');
        }
    }


    // panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

    render() {

        return (
            <div className="mainPanel">
                {/* <div className='goBack'>
                        <button className='btn btn-success'>Go Back</button>
                    </div> */}
                <div className="panels">
                    <div className="panel panel1" onClick={this.toggleOpen1}>
                        <p>Let's</p>
                        <p>Code</p>
                        <p>Guys</p>
                    </div>
                    <div className="panel panel2" onClick={this.toggleOpen2}>
                        <p>It</p>
                        <p>Is</p>
                        <p>Amazing</p>
                    </div>
                    <div className="panel panel3" onClick={this.toggleOpen3}>
                        <p>Will Be</p>
                        <p>Great</p>
                        <p>Fun</p>
                    </div>
                    <div className="panel panel4" onClick={this.toggleOpen4}>
                        <p>Now</p>
                        <p>And</p>
                        <p>Ever</p>
                    </div>
                    <div className="panel panel5" onClick={this.toggleOpen5}>
                        <p>Have a</p>
                        <p>Fun</p>
                        <p>Day</p>
                    </div>
                </div>
            </div>
        )
    };
}

export default FlexPanel;

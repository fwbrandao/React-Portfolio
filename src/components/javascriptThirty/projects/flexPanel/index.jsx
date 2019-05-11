import React from 'react';

import './flexPanel.css';

const FlexPanel = () => {
    const panels = document.querySelectorAll('.panel');

    function toggleOpen() {
        this.classList.toggle('open');
    };

    function toggleActive(e) {
        console.log(e.propertyName);
        if (e.propertyName.includes('flex')) {
            this.classList.toggle('open-active');
        }

    }

    panels.forEach(panel => panel.addEventListener('click', toggleOpen));

    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

    return (
        <div className="mainPanel">
            <div className="panels">
                <div className="panel panel1">
                    <p>Let's</p>
                    <p>Code</p>
                    <p>Guys</p>
                </div>
                <div className="panel panel2">
                    <p>It</p>
                    <p>Is</p>
                    <p>Amazing</p>
                </div>
                <div className="panel panel3">
                    <p>Will Be</p>
                    <p>Great</p>
                    <p>Fun</p>
                </div>
                <div className="panel panel4">
                    <p>Now</p>
                    <p>And</p>
                    <p>Ever</p>
                </div>
                <div className="panel panel5">
                    <p>Have a</p>
                    <p>Fun</p>
                    <p>Day</p>
                </div>
            </div>
        </div>
    )

}

export default FlexPanel

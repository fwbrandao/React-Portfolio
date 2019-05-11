import React, { Component } from 'react';
import boom from './sounds/boom.wav';
import clap from './sounds/clap.wav';
import hihat from './sounds/hihat.wav';
import kick from './sounds/kick.wav';
import openhat from './sounds/openhat.wav';
import ride from './sounds/ride.wav';
import snare from './sounds/snare.wav';
import tink from './sounds/tink.wav';
import tom from './sounds/tom.wav';

import './drumKit.css';

class DrumKit extends Component {
    static contextTypes = {
        router: () => true, // replace with PropTypes.object if you use them
    }

    constructor(props) {
        super(props);
        this.soundDiv = React.createRef();
    }

    componentDidMount() {
        this.soundDiv.current.addEventListener('keydown', this.handleKey);
        this.soundDiv.current.focus();
    }

    componentWillUnmount() {
        this.soundDiv.current.removeEventListener('keydown', this.handleKey);
    }

    handleKey = e => {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

        if (!audio) return; // stop func from running is no audio selector
        audio.currentTime = 0; // rewind to start
        audio.play();

        key.classList.add('playing');

        const keys = document.querySelectorAll('.key');
        keys.forEach(key => key.addEventListener('transitionend', this.removeTransition));
    }

    removeTransition(e) {
        if (e.propertyName !== 'transform') return; // skit if not transform
        this.classList.remove('playing');
    }

    render() {
        return (
            <div className="mainDrum" tabIndex="0" onKeyDown={this.handleKey}>
                <div className="keys" tabIndex="1" ref={this.soundDiv}>
                <div className='goBack'>
                    <button className='btn btn-success' onClick={this.context.router.history.goBack}>Go Back</button>
                </div>
                    <div data-key="65" className="key">
                        <kbd>A</kbd>
                        <span className="sound">clap</span>
                    </div>
                    <div data-key="83" className="key">
                        <kbd>S</kbd>
                        <span className="sound">hihat</span>
                    </div>
                    <div data-key="68" className="key">
                        <kbd>D</kbd>
                        <span className="sound">kick</span>
                    </div>
                    <div data-key="70" className="key">
                        <kbd>F</kbd>
                        <span className="sound">openhat</span>
                    </div>
                    <div data-key="71" className="key">
                        <kbd>G</kbd>
                        <span className="sound">boom</span>
                    </div>
                    <div data-key="72" className="key">
                        <kbd>H</kbd>
                        <span className="sound">ride</span>
                    </div>
                    <div data-key="74" className="key">
                        <kbd>J</kbd>
                        <span className="sound">snare</span>
                    </div>
                    <div data-key="75" className="key">
                        <kbd>K</kbd>
                        <span className="sound">tom</span>
                    </div>
                    <div data-key="76" className="key">
                        <kbd>L</kbd>
                        <span className="sound">tink</span>
                    </div>
                </div>

                <audio data-key="65" src={clap}></audio>
                <audio data-key="83" src={hihat}></audio>
                <audio data-key="68" src={kick}></audio>
                <audio data-key="70" src={openhat}></audio>
                <audio data-key="71" src={boom}></audio>
                <audio data-key="72" src={ride}></audio>
                <audio data-key="74" src={snare}></audio>
                <audio data-key="75" src={tom}></audio>
                <audio data-key="76" src={tink}></audio>

            </div>
        );
    }
}

export default DrumKit;
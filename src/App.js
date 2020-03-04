import React, { Component } from 'react';
import Typist from 'react-typist';
import './styles/App.css';
import Configs from './config/config.json';
import ParticlesBg from 'particles-bg'
import Penguin from './images/penguin.webp'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundType: Configs.backgroundType || 'plain',
      appClass: Configs.plainBackgroundMode || 'daylight',
      devDesc:
        Configs.devDesc || 'info skill',
      backgroundMode: 'default',
      backgroundIndex: 0,
      bgStyle: {},
      icons: Configs.icons || []
    };
  }

  render() {
    const {
      appClass, bgStyle, backgroundMode, devDesc, icons
    } = this.state;

    return (
      <div className={appClass} style={bgStyle}>
        <div
          className={backgroundMode}
        >
          <main className="App-main">
            <ParticlesBg type="fountain" bg={true} />
            <div className="container">
              <img src={Penguin} alt="profile"/>
              <div className="shell">I am Web Application Developer in Okinawa</div>
              <div className="tagline">
                <Typist>{devDesc}</Typist>
              </div>
              
              <div className="icons-social">
                {icons.map((icon, i) => (
                  <a
                    target="_blank"
                    key={i}
                    rel="noopener noreferrer"
                    href={`${icon.url}`}
                  >
                    <i className={`${icon.image}`} />
                  </a>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;

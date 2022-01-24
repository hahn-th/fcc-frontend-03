import logo from './logo.svg';
import './App.css';
import React from 'react';
import DrumPad from './components/drumpad';
import bank from './constants'

class App extends React.Component {

  render() {

    const pads = [];

    for(let i=0;i<3;i++) {
      pads.push(<div className="row">
                    { bank.slice(i*3,i*3+3).map(
                        item =>
                          <div className='col'>
                            <DrumPad keyTrigger={item.keyTrigger} 
                                    id={item.id}
                                    url={item.url}
                                    src={item.src} />
                          </div> 
                      )} 
                  </div>);
    }

    return (
      <div className="App">
        <div id="drum-machine" className="container">
          <div className='row'>
            <div className='col-md-6'>
              {pads}
            </div>
            <div className='col-md-6'>
              Preview
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

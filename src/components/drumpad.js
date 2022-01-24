
import React from 'react';

/*
    Example:
        keyCode: 67,
        keyTrigger: 'C',
        id: 'Closed-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
 */

class DrumPad extends React.Component {

    constructor(props) {
        super(props);
    }

    pressedDrumPad(e) {

    }

    render() {
        return(
            <div id="{this.props.id}">{this.props.keyTrigger} <br /><audio src={this.props.url} /></div>
        );
    }

}

export default DrumPad;
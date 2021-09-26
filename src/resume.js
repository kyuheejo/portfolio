import React from 'react';
import resume from './images/Kyuhee_Jo.pdf';

class ResumePage extends React.Component {
    render(){
        const url='https://docs.google.com/viewer?url=https://kyuhee-jo.com'+resume+'&embedded=true';
	    return(<iframe src={url} style={{width: '100%', height: '100vh'}} ></iframe>);
    }
}

export default ResumePage;
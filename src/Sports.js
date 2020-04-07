import React from 'react';
import { withRouter } from "react-router";

class Sports extends React.Component {
    componentDidMount() {
        console.log('componentDidMount', this.props);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', this.props);
    }

    render() {
        const omfePath = this.props.match.params.omfePath || '';
        return (
            <div className="Sports">
                <iframe id="ifmSportsbook" src={`http://localhost:3000/en/${omfePath}?basePath=${encodeURIComponent('http://localhost:3001/sports')}`} style={{width: '100%', height: '600px'}}></iframe>
            </div>
        );
    }
}

export default withRouter(Sports);

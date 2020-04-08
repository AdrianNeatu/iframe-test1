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
        const basePath = encodeURIComponent(`${window.location.origin}/sports`);
        console.log(window.location);
        return (
            <div className="Sports">
                <iframe id="ifmSportsbook" src={`https://esports-stage.mybet.de/de/${omfePath}?basePath=${basePath}`} style={{width: '100%', height: '500px'}}></iframe>
            </div>
        );
    }
}

export default withRouter(Sports);

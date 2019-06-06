import React from 'react';
import {connect} from 'react-redux';

import Videos from './videos.js';
import {stateMapper} from '../store/store.js';

class TrendingComponent extends React.Component{

    componentDidMount(){
        this.props.dispatch({
            type: "FETCH_VIDEOS",
            videoType: "trending"
        })
    }

    render(){
        return(
            <div>
                <h2>Trending Videos</h2>
                <hr />
                <Videos />
            </div>
        )
    }
}

let Trending = connect(stateMapper)(TrendingComponent);

export default Trending;
import React from 'react';
import {connect} from 'react-redux';

import Videos from './videos.js';
import {stateMapper} from '../store/store.js';

class SearchComponent extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            query: ""
        }

        this.inputChanged = this.inputChanged.bind(this);
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    componentWillUnmount(){
        this.props.dispatch({
            type: "CLEAR_VIDEOS"
        })
    }

    inputChanged(event){
        this.setState({
            query: event.target.value
        })
    }

    buttonClicked(){
        this.props.dispatch({
            type: "FETCH_VIDEOS",
            videoType: "search",
            query: this.state.query
        })
    }

    render(){
        return(
            <div>
                <h2 className="text-danger">Search Videos</h2>
                <hr />
                <div className="form-row">
                    <div className="col">
                        <input onChange={this.inputChanged} type="text" className="form-control form-control-lg" />
                    </div>
                    <button onClick={this.buttonClicked} className="btn btn-info btn-lg"><span className="oi oi-magnifying-glass"></span></button>
                </div>    
                <p></p>
                <Videos />
            </div>
        )
    }
}

let Search = connect(stateMapper)(SearchComponent);

export default Search;
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {stateMapper} from '../store/store.js';

class MenuComponent extends React.Component{

    componentDidMount() {
        this.props.dispatch({
            type: "FETCH_PLAYLISTS"
        })
    }


    render(){
        return(
            <div>
                <h2 className="text-danger">MyTube<span className="oi oi-play-circle"></span></h2>
                <hr />
                <ul className="list-group">
                    <li className="list-group-item bg-danger text-white">Menu</li>
                    <li className="list-group-item">
                        <Link to="/app">Trending</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/app/search">Search</Link>
                    </li>

                    <li className="list-group-item bg-danger text-white">My Playlists</li>

                    {this.props.playlists && this.props.playlists.map(p => {
                        return (
                            <li key={p.etag} className="list-group-item">
                                <Link to={`/app/playlist/${p.id}`}>
                                    {p.snippet.title}
                                </Link>
                            </li>
                        )
                    })}

                    <li className="list-group-item">
                        <Link to="/app/playlists/create">Create</Link>
                    </li>

                    <li className="list-group-item bg-danger text-white">My Account</li>
                    
                    <li className="list-group-item">
                        <Link to="/app/profile">Profile</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/app/logout">Logout</Link>
                    </li>




                </ul>                
            </div>            
        )
    }
}

let Menu = connect(stateMapper)(MenuComponent);

export default Menu;
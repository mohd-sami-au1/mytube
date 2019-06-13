import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import {store, stateMapper} from '../store/store.js';
import Menu from './menu.js';
import Videos from './videos.js';
import Trending from './trending.js';
import Search from './search.js';
import VideoPlayer from './VideoPlayer.js';
import Profile from './profile.js';
import Logout from './logout.js';


class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
                
                    <div className="container">
                        <div className='row'>
                            <div className="col-md-3">
                                <Menu />
                            </div>
                            <div className="col-md-9">

                                <Route path='/app' exact={true} component={Trending} />
                                <Route path='/app/search' component={Search} />
                                <Route path='/app/player/:videoId' component={VideoPlayer} />
                                <Route path='/app/profile' component={Profile} />
                                <Route path='/app/logout' component={Logout} />
                            </div>
                            
                        </div>
                    </div>
                

            </Provider>
        )
    }
}

export default App;
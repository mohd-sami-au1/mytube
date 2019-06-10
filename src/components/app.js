import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import {store, stateMapper} from '../store/store.js';
import Menu from './menu.js';
import Videos from './videos.js';
import Trending from './trending.js';
import Search from './search.js';
import VideoPlayer from './VideoPlayer.js';


class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <Router>
                    <div className="container">
                        <div className='row'>
                            <div className="col-md-3">
                                <Menu />
                            </div>
                            <div className="col-md-9">

                                <Route path='/' exact={true} component={Trending} />
                                <Route path='/search' component={Search} />
                                <Route path='/player/:videoId' component={VideoPlayer} />
                            </div>
                            
                        </div>
                    </div>
                </Router>

            </Provider>
        )
    }
}

export default App;
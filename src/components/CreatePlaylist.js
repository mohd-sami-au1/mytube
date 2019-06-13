import React, { useReducer } from 'react';
import { thisExpression } from '@babel/types';

class CreatePlaylist extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            name: "",
            type: "",
            description: ""
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(event){
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            name: value
        })
    }

    render(){
        return(
            <div>
                <h2 className="text-danger">Create New Playlist</h2>
                <hr />

                <form>
                    <div className="form-group">
                        <label>
                            Playlist Name:
                            <input name="name" onChange={this.onChange} className="form-control" type="text" />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Select Playlist Type:
                            <select name="type" onChange={this.onChange} className="form-control">
                                <option value="public">Public</option>
                                <option value="private">Private</option>
                                <option value="unlisted">Unlisted</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Description:
                            <textarea name="description" onChange={this.onChange} cols="40" rows="5" className="form-control"></textarea>
                        </label>
                    </div>
                    <button className="btn btn-info" type="submit">Create Playlist</button>
                </form>


            </div>
        )
    }
}

export default CreatePlaylist;
import React, { useReducer } from 'react';
import { thisExpression, throwStatement } from '@babel/types';

class CreatePlaylist extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            name: "",
            type: "public",
            description: "",

            formState: {
                isFormValid: true,
                isNameValid: true,
                isDescriptionValid: true
            }
        }
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(event){
        let name = event.target.name;

        this.setState({
            [name]: event.target.value
        })
    }

    validateForm(){

        let newFormState = {
            isFormValid: true,
            isNameValid: true,
            isDescriptionValid: true
        };

        if(!this.state.name){
            newFormState.isNameValid = false;
            newFormState.isFormValid = false;
        }

        if(!this.state.description){
            newFormState.isDescriptionValid = false;
            newFormState.isFormValid = false;
        }

        this.setState({
            formState: newFormState
        })
        return newFormState.isFormValid;
    }

    handleSubmit(event){
        event.preventDefault();

        if(this.validateForm()){
            console.log("For AJAX");
        } else {
            console.log("Form is invalid");
        }
    }

    render(){
        return(
            <div>

                <h2 className="text-danger">Create New Playlist</h2>
                <hr />

                {
                    !this.state.formState.isFormValid && 
                        <div className="alert alert-danger">
                            Please fill in all the fields 
                        </div>
                }



                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                            Playlist Name:
                            <input
                                name="name"
                                onChange={this.onChange}
                                className={`form-control ${
                                    !this.state.formState.isNameValid &&
                                    "is-invalid"
                                }`}
                                type="text"
                            />
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
                            <textarea
                                name="description"
                                onChange={this.onChange}
                                cols="40"
                                rows="5"
                                className={`form-control ${
                                    !this.state.formState.isDescriptionValid &&
                                    "is-invalid"
                                }`}
                                >

                            </textarea>
                        </label>
                    </div>
                    <button className="btn btn-info" type="submit">Create Playlist</button>
                </form>


            </div>
        )
    }
}

export default CreatePlaylist;
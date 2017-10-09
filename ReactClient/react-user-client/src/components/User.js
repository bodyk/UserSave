import React from 'react';
import PropTypes from 'prop-types';
import { Gender } from '../models/Gender';
import './User.css';

export class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: this.getMode(),
            user: this.getUser(),
            genderKeys: this.getGenderKeys()
        };
    }

    getGenderKeys() {
        return Object.keys(Gender).map(k => Gender[k]).filter(v => typeof v === "string");
    }

    getMode() {
        // Init form legend header based on parameter
        let mode = "Add";
        try {
            if (this.props.location.state.isUserEdit !== undefined && this.props.location.state.isUserEdit) {
                mode = "Edit";
            }
        } 
        catch(e) {
            console.log("Mode is not initialized");
        }

        return mode;
    }

    getUser() {
        let user = {};
        try {
            if (this.props.location.state.user !== undefined && this.props.location.state.user) {
                user = this.props.location.state.user;
            }
        } 
        catch(e) {
            console.log("User is not initialized");
        }

        return user;
    }

    formGenderSelection() {
        console.log(this.state.genderKeys);
        return (
            <select id="gender" name="gender" className="form-control input-md" ref="gender">
               { 
                    this.state.genderKeys.map(function (obj, i) {
                        return <option value={i} key={i}>{obj}</option>
                    })
               }
            </select>
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.mode === "Add") {
            console.log(e);
            console.log(this.state.user);
            console.log(this.refs);            
        } else {
            
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="form-horizontal">
                <fieldset>
                    <legend>{this.state.mode} User</legend>
                    
                    <div className="inputWrapper">
                        <div className="form-group">
                            <input id="name" name="name" type="text" 
                                placeholder="Name" className="form-control input-md" required=""
                                ref="name"
                                value={this.state.user.Name}/>
                        </div>
                    </div>
                    
                    <div className="inputWrapper">
                        <div className="form-group">
                            <input id="surname" name="surname" type="text" 
                                placeholder="Surname" className="form-control input-md" required=""
                                ref="surname"
                                value={this.state.user.Surname}/>
                        </div>
                    </div>
                    
                    <div className="inputWrapper">
                        <div className="form-group">
                            <input id="email" name="email" type="text" 
                                placeholder="Email" className="form-control input-md" required=""
                                ref="email"
                                value={this.state.user.Email}/>
                        </div>
                    </div>
                    
                    <div className="inputWrapper">
                        <div className="form-group">
                            {this.formGenderSelection()}
                        </div>
                    </div>
                    
                    <div className="inputWrapper">
                        <div className="form-group">
                            <button id="Submit" name="Submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        );
    }
}

User.propTypes = {
    user: PropTypes.object,
    isUserEdit: PropTypes.bool
};
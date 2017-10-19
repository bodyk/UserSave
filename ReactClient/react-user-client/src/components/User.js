import React from 'react';
import PropTypes from 'prop-types';
import { Gender } from '../models/Gender';
import './User.css';
import { addUser, putUser } from '../actions/userActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

let api = require('../utils/api');

class User extends React.Component {
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
            if ('isUserEdit' in this.props.location.state) {
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
            if ('user' in this.props.location.state) {
                user = this.props.location.state.user;
            }
        } 
        catch(e) {
            console.log("User is not initialized");
        }

        return user;
    }

    formGenderSelection() {
        return (
            <select id="gender" name="gender" className="form-control input-md" ref="gender">
               { 
                    this.state.genderKeys.map(function (obj, i) {
                        return <option defaultValue={i} key={i}>{obj}</option>
                    })
               }
            </select>
        );
    }

    handleSubmit(e) {
        e.preventDefault();

        let newUser = {
            id: this.state.user.Id,
            name: this.refs.name.value,
            surname: this.refs.surname.value,
            email: this.refs.email.value,
            gender: this.refs.gender.value
        };

        if (this.state.mode === "Add") {
            this.props.addUser(newUser);
            // api.addUser(newUser)
            //     .then(() => {
            //         console.log("Add user");
            //     });
        } else {
            this.props.putUser(newUser, this.state.user.Id);            
            // api.putUser(newUser, this.state.user.Id)
            //     .then(() => {
            //         console.log("Update user");
            //     });
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
                                defaultValue={this.state.user.Name}/>
                        </div>
                    </div>
                    
                    <div className="inputWrapper">
                        <div className="form-group">
                            <input id="surname" name="surname" type="text" 
                                placeholder="Surname" className="form-control input-md" required=""
                                ref="surname"
                                defaultValue={this.state.user.Surname}/>
                        </div>
                    </div>
                    
                    <div className="inputWrapper">
                        <div className="form-group">
                            <input id="email" name="email" type="text" 
                                placeholder="Email" className="form-control input-md" required=""
                                ref="email"
                                defaultValue={this.state.user.Email}/>
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

export default connect(
    (state) => {return {users: state.users.users};},
    (dispatch) => bindActionCreators({addUser, putUser}, dispatch)
)(User);
import React from 'react';
import PropTypes from 'prop-types';
import { RowData } from './RowData';
import { Link } from 'react-router-dom';
import { Gender } from '../../models/Gender';

var api = require('../../utils/api');

export class TableRow extends React.Component {
    DeleteUser() {
        console.log("Delete");
        api.deleteUser(this.props.user.Id)
        .then(() => {
            this.props.updateCallback();
        });
    }

    render() {

        return (
            <div>
                <div className="col-sm-4 col-md-4">
                    <div className="row">
                        <RowData rowText={ this.props.user.Name }/>
                        <RowData rowText={ this.props.user.Surname }/>
                    </div>
                </div>
                <div className="col-sm-4 col-md-4">
                    <div className="row">
                        <RowData rowText={ this.props.user.Email }/>
                        <RowData rowText={ Gender[this.props.user.Gender] }/>
                    </div>
                </div>
                <div className="col-sm-4 col-md-4">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <Link to={{ pathname: '/user/' + this.props.user.Id,
                            state: { isUserEdit: true, user: this.props.user } }}>Edit</Link>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <a href="#" onClick={this.DeleteUser.bind(this)}>Delete</a>                           
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

TableRow.propTypes = {
    user: PropTypes.object,
    updateCallback: PropTypes.func
};
import React from 'react';
import PropTypes from 'prop-types';
import { RowData } from './RowData';

export class TableRow extends React.Component {
    render() {
        const Color = {
            0 : 'Male',
            1 : 'Female'
        }

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
                        <RowData rowText={ Color[this.props.user.Gender] }/>
                    </div>
                </div>
                <div className="col-sm-4 col-md-4">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <button>Edit</button>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <button>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

TableRow.propTypes = {
    user: PropTypes.object
};
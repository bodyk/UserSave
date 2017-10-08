import React from 'react';
import PropTypes from 'prop-types';

export class RowData extends React.Component {
    render() {
        return (
            <div className="col-sm-12 col-md-6">
                {this.props.rowText}
            </div>
        );
    }
}

RowData.propTypes = {
    rowText: PropTypes.string
};
import React from 'react';
import { RowData } from './RowData';

export class TableHeader extends React.Component {
    render() {
        return (
            <div className="row row-header">
                <div className="col-sm-4 col-md-4">
                    <div className="row">
                        <RowData rowText="Name"/>
                        <RowData rowText="Surname"/>
                    </div>
                </div>
                <div className="col-sm-4 col-md-4">
                    <div className="row">
                        <RowData rowText="Email"/>
                        <RowData rowText="Gender"/>
                    </div>
                </div>
                <div className="col-sm-4 col-md-4">
                    <div className="row">
                        <RowData />                      
                        <RowData />
                    </div>
                </div>
            </div>
        );
    }
}
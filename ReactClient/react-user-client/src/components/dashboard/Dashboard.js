import React from 'react';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';
import './Dashboard.css';

export class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard container text-center">
                <TableHeader />
                <TableBody />
            </div>
        );
    }
}
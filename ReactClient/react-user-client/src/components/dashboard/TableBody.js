import React from 'react';
import { TableRow } from './TableRow';

var api = require('../../utils/api');

export class TableBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    getUsers() {
        api.getAllUsers()
            .then(results => {
                this.setState({users: (results.data)});
            });
    }

    componentDidMount() {
        this.getUsers();
    }

    render() {
        return (
            <div>
                {this.state.users.map((user, i) => {
                    return <TableRow user={user} key={i} updateCallback={this.getUsers.bind(this)}/>
                })}
            </div>
        );
    }
}
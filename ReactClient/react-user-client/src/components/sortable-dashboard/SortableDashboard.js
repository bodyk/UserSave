import React from 'react';
import { UserSorter } from '../../helpers/UserSorter';
import SortableTable from 'react-sortable-table';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

let api = require('../../utils/api');

connect((store) => {
    return {
        user: store.user.user
    }
})
export class SortableDashboard extends React.Component {
    constructor() {
      super()
      this.state = {users: []};
    }

    getUsers() {
        api.getAllUsers()
            .then(results => {
                results.data.map((user) => {
                    user.deleteInfo = {
                        Id: user.Id,
                        deleteCallback: this.deleteUser.bind(this),
                        updateCallback: this.getUsers.bind(this)
                    };
                });
                this.setState({users: (results.data)});
            });
    }

    componentDidMount() {
        this.getUsers();
    }

    deleteUser(id, updateCallback) {
        api.deleteUser(id)
            .then(() => {
                console.log("Delete");
                updateCallback();
            });
    }
   
    render() {
      const columns = [
        {
          header: 'Name',
          key: 'Name',
          headerStyle: { fontSize: '15px' },
          headerProps: { className: 'align-left' },
          descSortFunction: UserSorter.desc,
          ascSortFunction: UserSorter.asc
        },
        {
            header: 'Surname',
            key: 'Surname',
            headerStyle: { fontSize: '15px' },
            headerProps: { className: 'align-left' },
            descSortFunction: UserSorter.desc,
            ascSortFunction: UserSorter.asc
        },
        {
            header: 'Email',
            key: 'Email',
            headerStyle: { fontSize: '15px' },
            headerProps: { className: 'align-left' },
            descSortFunction: UserSorter.desc,
            ascSortFunction: UserSorter.asc
        },
        {
            header: 'Gender',
            key: 'Gender',
            headerStyle: { fontSize: '15px' },
            headerProps: { className: 'align-left' },
            descSortFunction: UserSorter.desc,
            ascSortFunction: UserSorter.asc
        },
        {
            header: 'Edit',
            key: 'Id',
            headerStyle: { fontSize: '15px' },
            headerProps: { className: 'align-left' },
            sortable: false,
            render: ((Id) => {
                return (<Link to={{ pathname: '/user/' + Id,
                    state: { isUserEdit: true, user: this.state.users[Id] } }}>Edit</Link>);
            })
        },
        {
            header: 'Delete',
            key: 'deleteInfo',
            headerStyle: { fontSize: '15px' },
            headerProps: { className: 'align-left' },
            sortable: false,
            render: ((deleteInfo) => {        
                return (<a href="#" onClick={() => deleteInfo.deleteCallback(deleteInfo.Id, deleteInfo.updateCallback)}>Delete</a>);
            })
        }
      ];
   
      const style = {
        backgroundColor: '#eee'
      };
   
      const iconStyle = {
        color: '#aaa',
        paddingLeft: '5px',
        paddingRight: '5px'
      };
      return (
        <SortableTable
          data={this.state.users}
          columns={columns}
          style={style}
          iconStyle={iconStyle} />
      );
    }
  }
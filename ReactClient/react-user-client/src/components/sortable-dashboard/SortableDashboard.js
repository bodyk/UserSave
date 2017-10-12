import React from 'react';
import { UserSorter } from '../../helpers/UserSorter';
import SortableTable from 'react-sortable-table';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllUsers, deleteUser } from '../../actions/userActions';

let api = require('../../utils/api');

class SortableDashboard extends React.Component {
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
        //this.getUsers();
        this.props.getAllUsers();
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
            key: 'Id',
            headerStyle: { fontSize: '15px' },
            headerProps: { className: 'align-left' },
            sortable: false,
            render: ((Id) => { 
                return (<a href="#" onClick={() => this.props.deleteUser(Id)}>Delete</a>);
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
      let users = this.props.users.payload === undefined ? [] : this.props.users.payload;
      return (
        <SortableTable
          data={users}
          columns={columns}
          style={style}
          iconStyle={iconStyle} />
      );
    }
}

export default connect(
    (state) => {return {users: state.users};},
    (dispatch) => bindActionCreators({getAllUsers, deleteUser}, dispatch)
)(SortableDashboard);
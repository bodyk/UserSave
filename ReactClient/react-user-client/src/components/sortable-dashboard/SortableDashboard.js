import React from 'react';
import { UserSorter } from '../../helpers/UserSorter';
import SortableTable from 'react-sortable-table';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllUsers, deleteUser } from '../../actions/userActions';
import { Gender } from '../../models/Gender';

class SortableDashboard extends React.Component {
    constructor() {
      super()
      this.state = {users: []};
    }

    componentWillMount() {
        this.props.getAllUsers();
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
            ascSortFunction: UserSorter.asc,
            render: ((gender) => {
                return Gender[gender];
            })
        },
        {
            header: 'Edit',
            key: 'Id',
            headerStyle: { fontSize: '15px' },
            headerProps: { className: 'align-left' },
            sortable: false,
            render: ((Id) => {
                return (<Link to={{ pathname: '/user/' + Id,
                    state: { isUserEdit: true, user: this.props.users.find((user) => user.Id === Id) } }}>Edit</Link>);
            })
        },
        {
            header: 'Delete',
            key: 'Id',
            headerStyle: { fontSize: '15px' },
            headerProps: { className: 'align-left' },
            sortable: false,
            render: ((Id) => { 
                return (<a href="#" onClick={() => {
                    this.props.deleteUser(Id).then(() => this.props.getAllUsers());
                }}>Delete</a>);
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
      let users = this.props.users === undefined ? [] : this.props.users;
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
    (state) => {return {users: state.users.users};},
    (dispatch) => bindActionCreators({getAllUsers, deleteUser}, dispatch)
)(SortableDashboard);
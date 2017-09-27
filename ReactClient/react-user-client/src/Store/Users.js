import { observable} from 'mobx';

class Users {
    @observable all = [
        {id: 1, name: "Bogdan", surname: "Balanyk"},
        {id: 2, name: "Andy", surname: "Carrol"},
        {id: 3, name: "James", surname: "Milner"}        
    ];
}

export default Users;
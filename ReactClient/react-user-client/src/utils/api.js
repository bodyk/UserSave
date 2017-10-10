var axios = require('axios');
var base = require('axios-base-url/base')('http://localhost:52818/api/');
axios.interceptors.request.use(base);

const USERS_CONTROLLER_NAME = "/Users/";

module.exports = {
    getAllUsers: function() {
        return axios.get(USERS_CONTROLLER_NAME);
    },
    deleteUser: function(id) {
        return axios.delete(USERS_CONTROLLER_NAME + id);
    },
    addUser: function(user) {
        return axios.post(USERS_CONTROLLER_NAME, user);
    },
    putUser: function(user, id) {
        return axios.put(USERS_CONTROLLER_NAME + id, user);
    }
}
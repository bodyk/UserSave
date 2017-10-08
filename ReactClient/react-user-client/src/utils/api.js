var axios = require('axios');
var base = require('axios-base-url/base')('http://localhost:52818/api/');
axios.interceptors.request.use(base);

module.exports = {
    getAllUsers: function() {
        return axios.get('/Users');
    },
    get: function(getRequest) {
        return axios.get(getRequest)
        .then(function(response) {
            return response;
        });
    }
}
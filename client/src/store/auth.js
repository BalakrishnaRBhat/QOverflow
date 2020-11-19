import axios from 'axios';
import router from '../router/index';

const state = {
    token: localStorage.getItem('token') || '',
    user: '',
    status: '',
    error: null
};

const getters = {
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user,
    error: state => state.error
};

const actions = {
    // login user
    async login({commit}, user) {
        commit('auth_request');
        try {
            let res = await axios.post('http://localhost:5000/api/user/login/', user);
            if(res.data.success) {
                const token = res.data.token;
                const user = res.data.user;
                // Store the token into localStorage
                localStorage.setItem('token', token);
                // Set axios defaults
                axios.defaults.headers.common['Authorization'] = token;
                commit('auth_success', token, user);
            }
            return res;
        } catch (error) {
            commit('auth_error', error);
        }
    },
    // register user
    async register({commit}, userData) {
        commit('register_request');
        try {
            let res = await axios.post('http://localhost:5000/api/user/register/', userData);
            if(res.data.success != undefined) {
                commit('register_success');
            }
            return res;
        } catch (error) {
            commit('register_error', error);
        }
    },
    async logout({commit}) {
        // remove token from localStorage and delete axios defaults
        await localStorage.removeItem('token');
        commit('logout');
        delete axios.defaults.headers.common['Authorization'];
        router.push({name: 'Home'});
    }
};

const mutations = {
    auth_request(state) {
        state.status = 'loading'
        state.error = null  
    },
    auth_success(state, token, user) {
        state.token = token
        state.user = user
        state.status = 'success'
        state.error = null  
    },
    auth_error(state, error) {
        state.error = error.response.data.message
    },
    register_request(state) {
        state.status = 'loading'
        state.error = null  
    },
    register_success(state) {
        state.status = 'success'
        state.error = null  
    },
    register_error(state, error) {
        state.error = error.response.data.message
    },
    logout(state) {
        state.status = ''
        state.token = ''
        state.user = ''
        state.error = null  
    }
};

export default {
    state,
    actions,
    getters,
    mutations
}

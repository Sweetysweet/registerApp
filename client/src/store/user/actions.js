import axios from '@/plugins/axios'
export default {
    get_all_users( {commit} ) {
        let url = '/users'
        return axios.get(url)
        .then(r => r.data)
        .then(data => 
            commit('SET_ALL_USERS', data)
        )
    }
}
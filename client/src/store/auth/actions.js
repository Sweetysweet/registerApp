import axios from '@/plugins/axios'

export default {
    sendUserData({ commit }, user) {
        let url = '/auth'
        return axios
            .post(url, {
                data: { user }
            })
            .then(response => response.data)
            .then(axiosData => {
                const { type, data } = axiosData
                if (type === 'success') {
                    commit('SET_USER', data.user)
                    return true
                }
            })
            .catch(error => {
                return error
            })
    }
}
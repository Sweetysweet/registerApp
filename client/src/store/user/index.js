import mutations from './mutations'
import actions from './actions'
import getters from './getters'
export default {
    namespaced: true,

    state: () => ({
        users: []
    }),
    mutations,
    actions,
    getters
}
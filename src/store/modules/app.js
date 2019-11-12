import api from '../../api/api.js'

const app = {
  state: {
    pharmaciesList: {},
    color: 'success',
    image: ''
  },
  mutations: {
    SET_PHARMACIES_LIST: (state, payload) => {
      state.pharmaciesList = payload
    }
  },
  getters: {
    get_pharmacies_list: (state) => {
      return state.pharmaciesList
    }
  },
  actions: {
    loadPharmaciesList ({ commit }) {
      api.get('/api/Stupid/GetPharmacies').then((response) => {
        commit('SET_PHARMACIES_LIST', response.data)
      }).catch((e) => {
        console.log('ошибка загрузики списка аптек: ', e)
      })
    }
  }
}

export default app

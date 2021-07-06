import axios from 'axios';

const state = {
  reports: []
};

const getters = {
  allreports: state => state.reports
};

const actions = {
  async fetchleases({ commit }) {
    const response = await axios.get(
      ''
    );

    commit('setLeases', response.data);
  },


  async fetchTenants({ commit }) {
    const response = await axios.get(
      ''
    );

    commit('setTenants', response.data);
  },

  async fetchProperties({ commit }) {
    const response = await axios.get(
      ''
    );

    commit('setProperties', response.data);
  },
};

const mutations = {
  setTodos: (state, leases) => (state.leases = leases),


};

export default {
  state,
  getters,
  actions,
  mutations
};

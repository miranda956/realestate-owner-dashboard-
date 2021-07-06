import axios from 'axios';

const state = {
  leases: []
};

const getters = {
  allleases: state => state.leases
};

const actions = {
  async fetchleases({ commit }) {
    const response = await axios.get(
      ''
    );

    commit('setLeases', response.data);
  },

  async filterLeases({ commit }, e) {
    // Get selected number
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );

    const response = await axios.get(
      `${limit}`
    );

    commit('setLeases', response.data);
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

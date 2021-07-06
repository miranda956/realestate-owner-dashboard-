import axios from 'axios';

const state = {
  tenants: []
};

const getters = {
  allTenants: state => state.tenants
};

const actions = {
  async fetchTenants({ commit }) {
    const response = await axios.get(
      ''
    );

    commit('setTenants', response.data);
  },


  async filterTenant({ commit }, e) {
    // Get selected number
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );

    const response = await axios.get(
      `${limit}`
    );

    commit('setTenants', response.data);
  },

};

const mutations = {
  setTenants: (state, tenants) => (state.tenants = tenants),

};

export default {
  state,
  getters,
  actions,
  mutations
};

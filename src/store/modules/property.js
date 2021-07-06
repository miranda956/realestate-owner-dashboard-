import axios from 'axios';

const state = {
  property: []
};

const getters = {
  allproperty: state => state.properties
};

const actions = {
  async fetchProperty({ commit }) {
    const response = await axios.get(
      ''
    );

    commit('setProperty', response.data);
  },
  async addProperty({ commit }, propertyName) {
    const response = await axios.post(
      '',
      { propertyName }
    );

    commit('newProperty', response.data);
  },
  async deleteProperty({ commit }, id) {
    await axios.delete(``);

    commit('removeProperty', id);
  },
  async filterProperty({ commit }, e) {
    // Get selected number
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );

    const response = await axios.get(
      `${limit}`
    );

    commit('setProperty', response.data);
  },
  async updateProperty({ commit }, updProperty) {
    const response = await axios.put(
      ``,
      updProperty
    );

    console.log(response.data);

    commit('updateProperty', response.data);
  }
};

const mutations = {
  setProperty: (state, properties) => (state.properties = properties),
  newProperty: (state, property) => state.properties.unshift(property),
  removeProperty: (state, id) =>
    (state.properties = state.properties.filter(property => property.id !== id)),
  updateProperty: (state, updProperty) => {
    const index = state.properties.findIndex(property => property.id === updProperty.id);
    if (index !== -1) {
      state.properties.splice(index, 1, updProperty);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

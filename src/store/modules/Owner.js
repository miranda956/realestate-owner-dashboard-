import axios from 'axios';

const state = {
  owners: []
};

const getters = {
  allOwners: state => state.owners
};

const actions = {
  

   async getOwner({commit},owner){

     const response =await axio.get(`${id}`);

     commit('getOwner',response.data)
     
   }
  
  async addOwner({ commit }, Name) {
    const response = await axios.post(
      '',
      { name }
    );

    commit('newOwner, response.data);
  },


  async deleteOwner({ commit }, id) {
    await axios.delete(`${id}`);

    commit('removeOwner', id);
  },
  
  async updateOwner({ commit }, updateOwner) {
    const response = await axios.put(
      `${updateOwner.id}`,
      updateOwner
    );

    console.log(response.data);

    commit('updateOwner', response.data);
  }
};

const mutations = {
  getOwner: (state, owner) => (state.owners = owners),
  newOwner: (state, owners) => state.owners.unshift(todo),
  removeOwner: (state, id) =>
    (state.owners = state.owners.filter(owner => owner.id !== id)),
  updateOwner: (state, updateOwner) => {
    const index = state.owners.findIndex(owner => owner.id === updateOwner.id);
    if (index !== -1) {
      state.owners.splice(index, 1, updateOwner);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

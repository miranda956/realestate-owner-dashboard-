import Vuex from 'vuex';
import Vue from 'vue';
import owner from "./modules/Owner";
import lease from "./modules/leases";
import tenant from "./modules/tenants";
import reports from "./modules/reports";
import property from "./modules/property";
// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    tenant,lease,property,owner,reports
  }
});

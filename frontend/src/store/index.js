import { createStore } from 'vuex';
import tenant from './modules/tenant';

export default createStore({
  modules: {
    tenant,
  },
});

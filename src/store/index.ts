import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import getters from "./getters";
import { IAuthState } from "./modules/Auth/interface";
import { ILinkState } from "./modules/Link/interface";
import auth from "./modules/Auth";
import link from "./modules/Link";
import theme from "./modules/Theme";
import { IThemeState } from "@/store/modules/Theme/interface";


// 全局状态
export interface IGlobalState {
  auth: IAuthState
  link: ILinkState,
  theme: IThemeState
}

const store = createStore<IGlobalState>({
  modules: {
    auth,
    link,
    theme
  },
  getters,
  plugins: [
    createPersistedState({
      //默认存在 localstorage中
      storage: window.sessionStorage,
      reducer: (state) => ({
        auth: state.auth,
        link: state.link,
        theme: state.theme
      })
    })
  ]
});

export default store;

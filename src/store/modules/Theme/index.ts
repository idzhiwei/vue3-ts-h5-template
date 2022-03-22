import { Module } from "vuex";
import { IGlobalState } from "@/store";
import { IThemeState } from "@/store/modules/Theme/interface";

const state: any = {
  theme: "default", //default,color
  themeColor: "#046A81",
  menuTheme: "defaultIcon",
  newsBoxBg:{
    boxShadow: "0px 0px 1.333vw 0px rgb(4 106 129 / 16%)"
  }
};

const login: Module<IThemeState, IGlobalState> = {
  namespaced: true,
  state,
  mutations: {
    ["SET_THEME"](state, data) {
      console.log('SET_THEME', data)
      state = Object.assign(state,data)
    }
  },
  actions: {}
};

export default login;

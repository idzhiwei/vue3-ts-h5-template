import { Module } from 'vuex'
import { IGlobalState } from "@/store"
import { IAuthState } from '@/store/modules/Auth/interface'
import * as Types from '@/store/modules/Auth/types'

const state: IAuthState = {
  userInfo: {},
  isAuth: false,
  code: '',
  token: '',
}

const login: Module<IAuthState, IGlobalState> = {
  namespaced: true,
  state,
  mutations: {
    [Types.SAVE_USER_INFO](state, data) {
      state.userInfo = data
    },
    ['STE_ISAUTH'](state, data) {
      state.isAuth = data
    },
    ['STE_CODE'](state, data) {
      state.code = data
    },
    ['STE_TOKEN'](state, data) {
      state.token = data
    }
  },
  actions: {
    async [Types.SAVE_USER_INFO]({ commit }, data) {
      return commit(Types.SAVE_USER_INFO, data)
    },
    async ['STE_ISAUTH']({ commit }, data) {
      return commit('STE_ISAUTH', data)
    },
    async ['STE_CODE']({ commit }, data) {
      return commit('STE_CODE', data)
    },
    async ['STE_TOKEN']({ commit }, data) {
      return commit('STE_TOKEN', data)
    }
  }
}

export default login

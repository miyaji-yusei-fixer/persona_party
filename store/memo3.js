export const state = () => ({
  memo: ''
})
export const getters = {
  memo: state => state.memo
}
export const mutations = {
  setMemo: function (state, memo) {
    state.memo = memo
  },
}
export const actions = {
  setMemo: function ({ commit }, memo) {
    commit('setMemo', memo)
  },
}

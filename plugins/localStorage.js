import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => [
  createPersistedState({
    key: 'memo3',
    paths: ['memo3'],
    storage: window.sessionStorage
  })(store),
  createPersistedState({
    key: 'memo4',
    paths: ['memo4'],
    storage: window.localStorage
  })(store),
]

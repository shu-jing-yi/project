import store from 'store'

const USER_KEY = 'user_key'
export default {
  saveUser(user) {
    store.set(USER_KEY, user)  // 保存用户信息
  },
  getUser() {   // 获取用户信息
    return store.get(USER_KEY) || {}
  },
  removeUser() {   // 移除用户信息
    store.remove(USER_KEY)
  }
}
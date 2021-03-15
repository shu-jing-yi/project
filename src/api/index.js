import ajax from './ajax.js'

export const reqLogin = (username, password) => ajax('/login', { username, password }, 'POST')


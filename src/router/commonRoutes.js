import NotFound from 'partials/NotFound'
import routesMap from './routers'
import { $util } from 'helper'

let commonConf = [{
  path: '/login',
  alias: '/register',
  meta: {
    title: $util.titleLang('登录', 'Login'),
    ignoreAuth: true
  },
  component: resolve => require(['../views/Login'], resolve)
}, {
  path: '*',
  meta: {
    title: $util.titleLang('404', '404 Not Found')
  },
  component: NotFound
}, {
  path: 'index',
  redirect: '/'
}]

export default routesMap.concat(commonConf)

import VueRouter from 'vue-router'
// Pages
import Home from './pages/Home'
import Arm from './pages/Arm'
import Suppliers from './pages/Suppliers'
import Customers from './pages/Customers'
import Products from './pages/Products'
import Income from './pages/Income'
import Implementations from './pages/Implementations'
import Bysales from './pages/Bysales'
import Byreceipts from './pages/Byreceipts'


// Routes
const routes = [
    // Allow from all auth routes
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {auth: undefined}
    },
    {
        path: '/arm',
        name: 'arm',
        component: Arm,
        meta: {auth: undefined}
    },
    {
        path: '/suppliers',
        name: 'suppliers',
        component: Suppliers,
        meta: {auth: undefined}
    },
    {
        path: '/customers',
        name: 'customers',
        component: Customers,
        meta: {auth: undefined}
    },
    {
        path: '/products',
        name: 'products',
        component: Products,
        meta: {auth: undefined}
    },
    {
        path: '/income',
        name: 'income',
        component: Income,
        meta: {auth: undefined}
    },
    {
        path: '/implementations',
        name: 'implementations',
        component: Implementations,
        meta: {auth: undefined}
    },
    {
        path: '/bysales',
        name: 'bysales',
        component: Bysales,
        meta: {auth: undefined}
    },
    {
        path: '/byreceipts',
        name: 'byreceipts',
        component: Byreceipts,
        meta: {auth: undefined}
    },


    { // is exception
        path: '*',
        redirect: '/'
    }
]
const router = new VueRouter({
  history: true,
  mode: 'hash', //'history',
  routes,
})
export default router

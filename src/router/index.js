import Vue from 'vue'
import Router from 'vue-router'
import NameList from '@/components/NameList'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'NameList',
        component: NameList
    }]
})
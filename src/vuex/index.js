import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        data: [{
                id: 0,
                title: '功能域-行为(Function-Action)  需求要素',
                result: ''
            },
            {
                id: 1,
                title: '功能域-对象(Function-Object)  需求要素',
                result: ''
            },
            {
                id: 2,
                title: '结构域 (Structrue) 需求要素',
                result: ''
            },
            {
                id: 3,
                title: '场景域 (scene) 需求要素',
                result: ''
            },
        ]

    },

    mutations: {

    }
})
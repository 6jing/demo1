import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        data: [{
                id: 0,
                title: '功能域-行为(Function-Action)  需求要素',
                result: [],
                // 数据的条数
                count: 0
            },
            {
                id: 1,
                title: '功能域-对象(Function-Object)  需求要素',
                result: [],
                count: 0
            },
            {
                id: 2,
                title: '结构域 (Structrue) 需求要素',
                result: [],
                count: 0,
            },
            {
                id: 3,
                title: '场景域 (scene) 需求要素',
                result: [],
                //数据的条数
                count: 0
            },
        ]

    },

    mutations: {
        // 在result中添加一个实体
        // 在result中减少一个实体
        // 直接更新result中的实体,输入id值，重新更新store中的数值
        updataResultById(state, id, dataSource) {
            if (id == 0) {
                state.data[0].result = dataSource
            }
            if (id == 1) {
                state.data[1].result = dataSource
            }
            if (id == 2) {
                state.data[2].result = dataSource
            }
            if (id == 3) {
                state.data[3].result = dataSource
            }
        }
    },

    actions: {

    },

    getters: {
        // 根据传送的id号来返还数据
        fromDataSource: function(state, id) {
            for (let i = 0, len = 4; i < len; i++) {
                if (i == id) {
                    let empty = []
                    for (let m = 0, len = state.data.result.length; m < len; m++) {
                        let data = {}
                        data.name = state.data.result[m]
                        data.key = m
                        empty.push(data)
                    }
                    return empty
                } else {
                    return
                }
            }
        }
    }
})
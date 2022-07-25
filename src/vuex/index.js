import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


export default new Vuex.Store({

    state: {
        data: [{
                id: 0,
                title: '结构域 (Structrue) 需求要素',
                abbreviation: "S",
                result: [],
                // 数据的条数
                count: 0
            },
            {
                id: 1,
                title: '功能域-行为(Function-Action)  需求要素',
                abbreviation: "FA",
                result: [],
                count: 0
            },
            {
                id: 2,
                title: '功能域-对象(Function-Object)  需求要素',
                abbreviation: "FO",
                result: [],
                count: 0,
            },
            {
                id: 3,
                title: '场景域 (scenario) 需求要素',
                abbreviation: "scene",
                result: [],
                //数据的条数
                count: 0
            },
        ],
        data1: [{
                id: 0,
                title: '结构域 (Structrue) 需求要素',
                abbreviation: "S",
                result: [],
                // 数据的条数
                count: 0
            },
            {
                id: 1,
                title: '功能域-行为(Function-Action)  需求要素',
                abbreviation: "FA",
                result: [],
                count: 0
            },
            {
                id: 2,
                title: '功能域-对象(Function-Object)  需求要素',
                abbreviation: "FO",
                result: [],
                count: 0,
            },
            {
                id: 3,
                title: '场景域 (scenario) 需求要素',
                abbreviation: "scene",
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
        fromDataSource(state) {
            var result_dict = {}
            for (let ii = 0, len = state.data.length; ii < len; ii++) {
                let key = ''
                if (ii == 0) {
                    key = 'S'
                    let empty = []
                    for (let yy = 0, len = state.data[ii].result.length; yy < len; yy++) {
                        empty.push(state.data[ii].result[yy].name)
                    }
                    result_dict[key] = empty
                } else if (ii == 1) {
                    key = 'FA'
                    let empty = []
                    for (let yy = 0, len = state.data[ii].result.length; yy < len; yy++) {
                        empty.push(state.data[ii].result[yy].name)
                    }
                    result_dict[key] = empty
                } else if (ii == 2) {
                    key = 'FO'
                    let empty = []
                    for (let yy = 0, len = state.data[ii].result.length; yy < len; yy++) {
                        empty.push(state.data[ii].result[yy].name)
                    }
                    result_dict[key] = empty
                } else if (ii == 3) {
                    key = 'scene'
                    let empty = []
                    for (let yy = 0, len = state.data[ii].result.length; yy < len; yy++) {
                        empty.push(state.data[ii].result[yy].name)
                    }
                    result_dict[key] = empty
                }
            }
            return result_dict
        },
    }
})
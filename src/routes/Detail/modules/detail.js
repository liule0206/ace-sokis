import request from 'plato-request'
import {
    PROMISE_SUCCESS
} from 'store/constants'

// ------------------------------------
// Constants
// ------------------------------------
export const SHOW_DETAIL = "SHOW_DETAIL"

// ------------------------------------
// States
// ------------------------------------
const state = {
    detailInfo: {}
}

// ------------------------------------
// Getters
// ------------------------------------
const getters = {
    info: state => state.detailInfo
}


// ------------------------------------
// Action Handlers
// ------------------------------------
const actions = {
    showDetail({ commit }, id) {
        commit(SHOW_DETAIL, request(`/api/v1/topic/${id}`))
    }
}

// ------------------------------------
// Mutations
// ------------------------------------
const mutations = {
    [SHOW_DETAIL](state, {payload, meta}) {
        if (PROMISE_SUCCESS === meta) {
            state.detailInfo = payload.data
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
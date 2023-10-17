import {
    ACTION_WAITER_CREATE_ITEM,
    ACTION_WAITER_CREATE_ITEM_ERROR,
    ACTION_WAITER_GET_LIST_ERROR,
    ACTION_WAITER_GET_LIST_LOADING,
    ACTION_WAITER_GET_LIST_SUCCESS,
    ACTION_WAITER_REMOVE_ITEM,
    ACTION_WAITER_REMOVE_ITEM_ERROR,
    ACTION_WAITER_SET_EDITING_ITEM,
    ACTION_WAITER_UPDATE_ITEM,
    ACTION_WAITER_UPDATE_ITEM_ERROR,
} from './actions'
import {WaiterI} from "../type";

const DEFAULT_WAITER: WaiterI = {
    firstName: '',
    phone: '',
}

interface INITIAL_STATE_I {
    editingWaiter: WaiterI,
    list: WaiterI[],
    listLoading: boolean,
    listError?: Error,
    updateError?: Error
}

const INITIAL_STATE: INITIAL_STATE_I = {
    editingWaiter: DEFAULT_WAITER,
    list: [],
    listLoading: false,
    listError: undefined,
    updateError: undefined
}

export const reducer = (state = INITIAL_STATE, {type, payload}: any) => {
    switch (type) {
        case ACTION_WAITER_GET_LIST_LOADING:
            return {...state, list: payload, listLoading: true, listError: undefined, updateError: undefined}
        case ACTION_WAITER_GET_LIST_SUCCESS:
            return {...state, list: payload, listLoading: false, updateError: undefined}
        case ACTION_WAITER_GET_LIST_ERROR:
            return {...state, list: [], listError: payload, listLoading: false, updateError: undefined}
        case ACTION_WAITER_CREATE_ITEM:
            return {
                ...state,
                list: [...state.list, payload],
                editingWaiter: {...DEFAULT_WAITER},
                updateError: undefined
            }
        case ACTION_WAITER_CREATE_ITEM_ERROR:
            return {...state, updateError: payload}
        case ACTION_WAITER_REMOVE_ITEM:
            return {
                ...state,
                list: state.list.filter((waiter: WaiterI) => waiter.id !== payload),
                updateError: undefined
            }
        case ACTION_WAITER_REMOVE_ITEM_ERROR:
            return {...state, updateError: payload}
        case ACTION_WAITER_SET_EDITING_ITEM:
            return {...state, editingWaiter: payload, updateError: undefined}
        case ACTION_WAITER_UPDATE_ITEM:
            return {
                ...state,
                list: state.list.map((waiter: WaiterI) => waiter.id === payload.id ? payload : waiter),
                editingWaiter: DEFAULT_WAITER,
                updateError: undefined
            }
        case ACTION_WAITER_UPDATE_ITEM_ERROR:
            return {...state, updateError: payload}
        default:
            return state
    }
}
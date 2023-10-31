import {all, call, put, takeEvery} from 'redux-saga/effects';
import {getListActionError, getListActionRequest, getListActionSuccess} from "./reducer";
import {WaiterApi} from "../api/server";
import {WaiterI} from "../type";

function* getWaiterListWorker() {
    try {
        const waiterList: WaiterI[] = yield call([WaiterApi, 'getList'])
        yield put(getListActionSuccess(waiterList))
    } catch (error: any) {
        yield put(getListActionError(error.message))
    }
}

export function* waiterWatch() {
    yield all([
        takeEvery(getListActionRequest, getWaiterListWorker)
    ]);
}
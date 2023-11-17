import {all, call, put, takeEvery} from 'redux-saga/effects';
import {
    getListActionError,
    getListActionRequest,
    getListActionSuccess,
    removeItemAction,
    removeItemRequestType
} from "./reducer";
import {WaiterApi} from "../api/server";
import {WaiterI} from "../type";
import {PayloadAction} from "@reduxjs/toolkit";
import {DELETE} from "../../../api/FetchClient";

function* getWaiterListWorker() {
    try {
        const waiterList: WaiterI[] = yield call([WaiterApi, 'getList'])
        yield put(getListActionSuccess(waiterList))
    } catch (error: any) {
        yield put(getListActionError(error.message))
    }
}

interface RemoveWaiterPayload {
    id: number
    resolve: () => any
    reject: () => any
}

function* removeWaiterWorker(action: PayloadAction<RemoveWaiterPayload>) {
    try {
        yield call([WaiterApi, DELETE], action.payload.id)
        yield put(removeItemAction(action.payload.id))

        action.payload.resolve()
    } catch (error: any) {
        action.payload.reject()
    }
}

export function* waiterWatch() {
    yield all([
        takeEvery(getListActionRequest, getWaiterListWorker),
        takeEvery(removeItemRequestType, removeWaiterWorker)
    ]);
}
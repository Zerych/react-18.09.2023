import {
    createItemAction,
    getListActionError,
    getListActionLoading,
    getListActionSuccess,
    removeItemAction,
    updateItemAction,
} from "./reducer";
import {WaiterApi} from "../api/server";
import {WaiterI} from "../type";

export function getList() {
    return (dispatch: any) => {
        dispatch(getListActionLoading())

        WaiterApi
            .getList()
            .then((waiterList) => {
                dispatch(getListActionSuccess(waiterList))
            })
            .catch((error) => {
                dispatch(getListActionError(error))
            })
    }
}

export function removeItem(id: number) {
    return async (dispatch: any) => {
        await WaiterApi.delete(id)
        dispatch(removeItemAction(id))
    }
}

export function saveItem(waiter: WaiterI) {
    return async (dispatch: any) => {
        if (waiter.id) {
            const updatedWaiter = await WaiterApi.update(waiter.id, waiter)
            dispatch(updateItemAction(updatedWaiter))
        } else {
            const newWaiter = await WaiterApi.create(waiter)
            dispatch(createItemAction(newWaiter))
        }
    }
}

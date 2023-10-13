import {
    createItemAction,
    createItemActionError,
    getListActionError,
    getListActionLoading,
    getListActionSuccess,
    removeItemAction,
    removeItemActionError,
    updateItemAction,
    updateItemActionError,
} from "./actions";
import {WaiterApi} from "../api/server";
import {WaiterI} from "../type";

export function getList() {
    return (dispatch: any) => {
        dispatch(getListActionLoading())

        WaiterApi.getList().then((waiterList) => {
            dispatch(getListActionSuccess(waiterList))
        }).catch((error) => {
            dispatch(getListActionError(error))
        })
    }
}

export function removeItem(id: number) {
    return (dispatch: any) => {
        WaiterApi.delete(id).then(() => {
            dispatch(removeItemAction(id))
        }).catch((error) => {
            dispatch(removeItemActionError(error))
        })
    }
}

export function saveItem(waiter: WaiterI) {
    return (dispatch: any) => {
        if (waiter.id) {
            WaiterApi.update(waiter.id, waiter).then((updatedWaiter) => {
                dispatch(updateItemAction(updatedWaiter))
            }).catch((error) => {
                dispatch(updateItemActionError(error))
            })
        } else {
            WaiterApi.create(waiter).then((newWaiter) => {
                dispatch(createItemAction(newWaiter))
            }).catch((error) => {
                dispatch(createItemActionError(error))
            })
        }
    }
}
import {
    createItemAction,
    getEditingItemActionError,
    getEditingItemActionLoading,
    getEditingItemActionSuccess,
    removeItemAction,
    updateItemAction,
} from "./reducer";
import {WaiterApi} from "../api/server";
import {WaiterI} from "../type";

export function getEditingItem(id: number) {
    return async (dispatch: any) => {
        dispatch(getEditingItemActionLoading())
        try {
            const waiter = await WaiterApi.get(id)
            dispatch(getEditingItemActionSuccess(waiter))
        } catch (error: any) {
            dispatch(getEditingItemActionError(error.message))
        }
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

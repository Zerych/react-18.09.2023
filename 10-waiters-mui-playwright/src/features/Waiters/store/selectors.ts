import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../../../store";

export const listSelector = (state: RootState) => state.waiter.list
export const filterSelector = (state: RootState) => state.waiter.filter
export const editingWaiterSelector = (state: RootState) => state.waiter.editingWaiter
export const editingWaiterLoadingSelector = (state: RootState) => state.waiter.editingWaiterLoading
export const editingWaiterErrorSelector = (state: RootState) => state.waiter.editingWaiterError

export const editingWaiterCombinedSelector = createSelector(
    editingWaiterSelector,
    editingWaiterLoadingSelector,
    editingWaiterErrorSelector,
    (editingWaiter, editingWaiterLoading, editingWaiterError) => ({
        editingWaiter: editingWaiter,
        editingWaiterLoading: editingWaiterLoading,
        editingWaiterError: editingWaiterError,
    })
);

export const filteredWaiterListSelector = createSelector(
    listSelector,
    filterSelector,
    (list, filter) => {
        switch (filter) {
            case 'A-M':
                return list.filter((waiter) =>
                    waiter.firstName.charCodeAt(0) >= 'A'.charCodeAt(0)
                    && waiter.firstName.charCodeAt(0) <= 'M'.charCodeAt(0))
            case 'N-Z':
                return list.filter((waiter) =>
                    waiter.firstName.charCodeAt(0) >= 'N'.charCodeAt(0)
                    && waiter.firstName.charCodeAt(0) <= 'Z'.charCodeAt(0))
            case 'other':
                return list.filter((waiter) =>
                    waiter.firstName.charCodeAt(0) < 'A'.charCodeAt(0)
                    || waiter.firstName.charCodeAt(0) > 'Z'.charCodeAt(0))
            default:
                return list
        }
    }
)

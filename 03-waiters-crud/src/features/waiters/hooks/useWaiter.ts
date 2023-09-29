import React, {useCallback, useEffect} from "react";
import {WaiterI} from "../type";
import {WaiterApi} from "../api/server";

const DEFAULT_WAITER: WaiterI = {
    firstName: '',
    phone: '',
}

export function useWaiter() {
    const [editingWaiter, setEditingWaiter] = React.useState<WaiterI>(DEFAULT_WAITER)
    const [list, setList] = React.useState<WaiterI[]>([])

    const getAll = useCallback(() => {
        WaiterApi.getAll().then((waiterList) => {
            setList(waiterList)
        })
    }, [])

    useEffect(() => {
        getAll()
    }, [getAll])

    const onWaiterSubmit = (waiter: WaiterI) => {
        if (waiter.id) {
            WaiterApi.update(waiter.id, waiter).then((updatedWaiter) => {
                setList(list.map((waiter) => waiter.id === updatedWaiter.id ? updatedWaiter : waiter))
                setEditingWaiter(DEFAULT_WAITER)
            })
        } else {
            WaiterApi.create(waiter).then((newWaiter) => {
                setList([...list, newWaiter])
                setEditingWaiter({...DEFAULT_WAITER})
            })
        }
    }

    const deleteWaiter = (id: number) => {
        WaiterApi.delete(id).then(() => {
            setList(list.filter((waiter) => waiter.id !== id))
        })
    }

    const editWaiter = (waiter: WaiterI) => {
        setEditingWaiter(waiter)
    }

    return {
        editingWaiter,
        list,
        onWaiterSubmit,
        deleteWaiter: deleteWaiter,
        editWaiter,
    }
}

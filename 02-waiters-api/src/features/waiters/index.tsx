import React, {useEffect} from "react";
import {WaiterList} from "./WaiterList";
import {WaiterApi} from "./api/WaiterApi";
import {Waiter} from "./type";
import {FormEdit} from "./FormEdit";

export function WaitersApp() {
    const [list, setList] = React.useState<Waiter[]>([])

    useEffect(() => {
        WaiterApi.getList().then((waiterList) => {
            setList(waiterList)
        })
    }, [])

    const onWaiterSubmit = (waiter: Waiter) => {
        WaiterApi.create(waiter).then((newWaiter) => {
            setList([...list, newWaiter])
        })
    }

    return (
        <div>
            <WaiterList list={list}/>
            <FormEdit onWaiterSubmit={onWaiterSubmit}/>
        </div>
    );
}
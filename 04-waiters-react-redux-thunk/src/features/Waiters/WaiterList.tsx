import {useEffect} from "react";
import {WaiterI} from "./type";
import {WaiterRow} from "./WaiterRow";
import {useDispatch, useSelector} from "react-redux";
import {getList} from "./store/thunk";

export function WaiterList(): React.ReactElement {
    const list = useSelector((state: any) => state.waiter.list)
    const loading = useSelector((state: any) => state.waiter.listLoading)
    const fetchError = useSelector((state: any) => state.waiter.listError)
    const updateError = useSelector((state: any) => state.waiter.updateError)
    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(getList())
    }, [getList])

    if (loading) {
        return <div>Loading...</div>
    }

    if (fetchError) {
        return <div style={{color: 'red'}}>{fetchError.message}</div>
    }

    return (
        <>
            <div>
                {updateError && <div style={{color: 'red'}}>{updateError.message}</div>}
            </div>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {list.map((waiter: WaiterI) => (
                    <WaiterRow
                        waiter={waiter}
                        key={waiter.id}/>
                ))}
                </tbody>
            </table>
        </>
    );
}

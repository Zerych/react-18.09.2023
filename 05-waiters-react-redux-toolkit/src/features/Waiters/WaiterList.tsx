import {useEffect} from "react";
import {WaiterI} from "./type";
import {WaiterRow} from "./WaiterRow";
import {useDispatch, useSelector} from "react-redux";
import {getList} from "./store/thunks";

export function WaiterList(): React.ReactElement {
    const list = useSelector((state: any) => state.waiter.list)
    const loading = useSelector((state: any) => state.waiter.listLoading)
    const error = useSelector((state: any) => state.waiter.listError)
    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(getList())
    }, [getList])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div style={{color: 'red'}}>{error.message}</div>
    }

    return (
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
    );
}

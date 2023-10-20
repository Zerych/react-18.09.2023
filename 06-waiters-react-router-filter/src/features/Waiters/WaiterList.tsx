import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getList} from "./store/thunks";
import {RootState} from "../../store";
import {filteredWaiterListSelector} from "./store/selectors";
import {Page} from "../../components/Page";
import {Link} from "react-router-dom";
import {Filters} from "./Filters";
import {WaiterI} from "./type";
import {WaiterRow} from "./WaiterRow";

export function WaiterList(): React.ReactElement {
    const list = useSelector(filteredWaiterListSelector)
    const loading = useSelector((state: RootState) => state.waiter.listLoading)
    const error = useSelector((state: RootState) => state.waiter.listError)
    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(getList())
    }, [getList])

    return (
        <Page
            title='Waiters List'
            loading={loading}
            error={error}
        >
            <div>
                <Link to="/waiters/create">
                    <button>Create</button>
                </Link>
            </div>
            <Filters/>
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
                        key={waiter.id}
                    />
                ))}
                </tbody>
            </table>
        </Page>
    );
}

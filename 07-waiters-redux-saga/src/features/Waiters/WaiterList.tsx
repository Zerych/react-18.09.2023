import {useEffect} from "react";
import {filteredWaiterListSelector} from "./store/selectors";
import {Page} from "../../components/Page";
import {Link} from "react-router-dom";
import {Filters} from "./Filters";
import {WaiterI} from "./type";
import {WaiterRow} from "./WaiterRow";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getListActionRequest} from "./store/reducer";

export function WaiterList(): React.ReactElement {
    const list = useAppSelector(filteredWaiterListSelector)
    const loading = useAppSelector((state) => state.waiter.listLoading)
    const error = useAppSelector((state) => state.waiter.listError)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getListActionRequest())
    }, [dispatch, getListActionRequest])

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

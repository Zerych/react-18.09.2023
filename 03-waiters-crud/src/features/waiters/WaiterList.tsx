import {WaiterI} from "./type";
import {WaiterRow} from "./WaiterRow";

interface WaiterListPropsI {
    list: WaiterI[];
    editWaiter: (waiter: WaiterI) => void;
    deleteWaiter: (id: number) => void;
}

export function WaiterList({list, deleteWaiter, editWaiter}: WaiterListPropsI): React.ReactElement {
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
            {list.map((waiter) => (
                <WaiterRow
                    waiter={waiter}
                    key={waiter.id}
                    deleteWaiter={deleteWaiter}
                    editWaiter={editWaiter}
                />
            ))}
            </tbody>
        </table>
    );
}

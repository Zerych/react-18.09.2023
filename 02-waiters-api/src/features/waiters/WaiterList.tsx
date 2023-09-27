import {Waiter} from "./type";
import {WaiterRow} from "./WaiterRow";

interface WaiterListProps {
    list: Waiter[];
}

export function WaiterList({list}: WaiterListProps): React.ReactElement {
    return (
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Phone</th>
            </tr>
            </thead>
            <tbody>
            {list.map((waiter) => <WaiterRow waiter={waiter} key={waiter.id}/>)}
            </tbody>
        </table>
    );
}

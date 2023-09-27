import {Waiter} from "./type";

interface WaiterProps {
    waiter: Waiter;
}

export function WaiterRow({waiter}: WaiterProps) {
    return (
        <tr>
            <td>{waiter.id}</td>
            <td>{waiter.firstName}</td>
            <td>{waiter.phone}</td>
        </tr>
    )
}

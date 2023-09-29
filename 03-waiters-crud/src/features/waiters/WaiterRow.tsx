import {WaiterI} from "./type";

interface WaiterPropsI {
    waiter: WaiterI;
    editWaiter: (waiter: WaiterI) => void;
    deleteWaiter: (id: number) => void;
}

export function WaiterRow({waiter, deleteWaiter, editWaiter}: WaiterPropsI) {

    function onEditBtnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        editWaiter(waiter)
    }

    function onDeleteBtnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        if (waiter.id) {
            deleteWaiter(waiter.id)
        }
    }

    return (
        <tr>
            <td>{waiter.id}</td>
            <td>{waiter.firstName}</td>
            <td>{waiter.phone}</td>
            <td>
                <button onClick={onEditBtnClick}>Edit</button>
                <button onClick={onDeleteBtnClick}>Delete</button>
            </td>
        </tr>
    )
}

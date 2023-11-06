import React from "react";
import {Link} from "react-router-dom";
import {WaiterI} from "../../type";
import Button from '@mui/material/Button';

export function EditBtn({waiter}: { waiter: WaiterI }) {
    return <Link to={`/waiters/edit/${waiter.id}`}>
        <Button>Edit</Button>
    </Link>
}

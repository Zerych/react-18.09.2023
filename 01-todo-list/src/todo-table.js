const TodoItemTableRow = ({item}) => (
    <tr>
        <td>{item.id}</td>
        <td>{item.description}</td>
        <td>{item.isCompleted ? '✔️' : '✖️'}</td>
    </tr>
);

export const TodoItemsTable = ({items}) => (
    <table>
        <thead>
        <tr>
            <th>#</th>
            <th>Description</th>
            <th>Is Completed</th>
        </tr>
        </thead>
        <tbody>
        {items.map((item) => <TodoItemTableRow key={item.id} item={item}/>)}
        </tbody>
    </table>
)
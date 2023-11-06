import React from 'react';

export function Alert({message}: { message: string }): React.ReactElement {
    return <div style={{color: 'red', fontStyle: 'bold'}}>{message}</div>;
}

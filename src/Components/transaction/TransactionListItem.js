import React from 'react'

const TransactionListItem = ({ transact }) => {
    return (
        <tr>
            <td>{transact.type}</td>
            <td>{transact.amount}</td>
            <td>{transact.currency}</td>
        </tr>
    );
}

export default TransactionListItem;
import React from 'react'
import TransactionListItem from './TransactionListItem';
import { TransactionListStyled } from './TransactionListStyles';
// import PropTypes from 'prop-types'

const TransactionList = ({ transaction }) => {
    return (
        <TransactionListStyled>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {transaction.map((transact) => (
                    <TransactionListItem transact={transact} key={transact.id} />
                ))}
            </tbody>
        </TransactionListStyled>
    );
}

export default TransactionList;

// TransactionHistoryItems.propTypes = {
//     item: PropTypes.arrayOf({
//         type: PropTypes.string,
//         amount: PropTypes.number,
//         currency: PropTypes.string,
//     }).isRequired

// };
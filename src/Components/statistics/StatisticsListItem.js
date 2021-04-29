import React from 'react'
import { StatisticsItemStyles } from './StatisticsListItemStyles';
// import PropTypes from 'prop-types'

const StatisticsListItem = ({ statistic }) => {
    return (
        <StatisticsItemStyles key={statistic.id}>
            <span className="label">{statistic.label}</span>
            <span className="percentage">{statistic.percentage}%</span>
        </StatisticsItemStyles>
    )
}

export default StatisticsListItem;


// StatisticsItems.propTypes = {
//     stat: PropTypes.shape({
//         label: PropTypes.string,
//         percentage: PropTypes.number,
//     }).isRequired
// };
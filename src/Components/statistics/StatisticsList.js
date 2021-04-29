import React from "react";
import StatisticsListItem from "./StatisticsListItem";
import { StatisticListStyled } from "./StatisticsListStyles";
// import PropTypes from 'prop-types'

const StatisticsList = ({ statistics }) => {
  return (
    <StatisticListStyled>
      <div className="container">
        <h2 className="title">Upload stats</h2>
        <ul className="stat-list">
          {statistics.map((statistic) => (
            <StatisticsListItem statistic={statistic} key={statistic.id} />
          ))}
        </ul>
      </div>
    </StatisticListStyled>
  );
};

export default StatisticsList;

// StatisticsList.propTypes = {
//   stats: PropTypes.arrayOf(PropTypes.object).isRequired,
//   title: PropTypes.string,
// };
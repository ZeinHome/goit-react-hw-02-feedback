import {
  ContainerStatistics,
  StatisticsList,
  StatisticsItem,
} from './Statistics.styled';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <ContainerStatistics>
        <StatisticsList>
          <StatisticsItem>Good: {good}</StatisticsItem>
          <StatisticsItem>Neutral: {neutral}</StatisticsItem>
          <StatisticsItem>Bad: {bad}</StatisticsItem>
          <StatisticsItem>Total: {total()}</StatisticsItem>
          <StatisticsItem>
            Positive feedback: {positivePercentage() + '%'}
          </StatisticsItem>
        </StatisticsList>
      </ContainerStatistics>
    </div>
  );
}

export default Statistics;

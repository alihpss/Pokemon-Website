import PropTypes from 'prop-types';
import { Container } from './styles';

export default function PokeStats({ stats, numberOfStatsToShow }) {
  return (
    <Container>
      {stats.slice(0, numberOfStatsToShow).map((stat) => (
        <div key={stat.stat.name}>
          <p>{stat.stat.name}</p>
          <div className="statsBar">
            <div style={{ width: `${stat.base_stat}%` }}>
              <ul>
                <li />
                <li />
                <li />
                <li />
              </ul>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
}

PokeStats.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      stat: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      base_stat: PropTypes.number.isRequired,
    }),
  ).isRequired,
  numberOfStatsToShow: PropTypes.number,
};

PokeStats.defaultProps = {
  numberOfStatsToShow: 6,
};

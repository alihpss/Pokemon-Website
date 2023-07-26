import PropTypes from 'prop-types';
import { Container } from './styles';

export default function PokeStats({ stats, numberOfStatsToShow, propertyColor }) {
  return (
    <Container propertyColor={propertyColor}>
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
  propertyColor: PropTypes.string,
};

PokeStats.defaultProps = {
  numberOfStatsToShow: 6,
  propertyColor: '#f6f5fc',
};

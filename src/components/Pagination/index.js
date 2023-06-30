import PropTypes from 'prop-types';
import { ButtonPagination, PaginationContainer } from './styles';

import chevronLeft from '../../assets/images/icons/chevron-left.svg';

export default function Pagination({
  counter,
  onClick,
  controllerAddIndex,
  controllerRemoveIndex,
  isDisabled,
}) {
  if (isDisabled) {
    return null;
  }

  return (
    <PaginationContainer>
      <button type="button" className="controller" onClick={controllerRemoveIndex}>
        <img src={chevronLeft} alt="goLeft" />
      </button>
      <ButtonPagination
        type="button"
        onClick={() => onClick(0)}
        active={counter.index === 1}
        disabled={counter.index === 0}
      >
        1
      </ButtonPagination>
      {counter.index < 3
          && (
          <>
            {[
              2,
              3,
              4]
              .map((value) => (
                <ButtonPagination
                  key={value}
                  type="button"
                  onClick={() => onClick(value - 1)}
                  active={counter.index === value}
                  disabled={counter.index === value - 1}
                >
                  {value}
                </ButtonPagination>
              ))}
            <p>...</p>
            <ButtonPagination
              type="button"
              onClick={() => onClick(39)}
              active={counter.index === 39}
              disabled={counter.index === 39}
            >
              40
            </ButtonPagination>
          </>
          )}
      {counter.index >= 3 && counter.index < 37
        && (
        <>
          <p>...</p>
          {[
            counter.index,
            counter.index + 1,
            counter.index + 2]
            .map((value) => (
              <ButtonPagination
                key={value}
                type="button"
                onClick={() => onClick(value - 1)}
                active={counter.index === value}
                disabled={counter.index === value - 1}
              >
                {value}
              </ButtonPagination>
            ))}
          <p>...</p>
          <ButtonPagination
            type="button"
            onClick={() => onClick(39)}
            active={counter.index === 39}
            disabled={counter.index === 39}
          >
            40
          </ButtonPagination>
        </>
        )}
      {counter.index >= 37
        && (
        <>
          <p>...</p>
          {[
            37,
            38,
            39]
            .map((value) => (
              <ButtonPagination
                key={value}
                type="button"
                onClick={() => onClick(value - 1)}
                active={counter.index === value}
                disabled={counter.index === value - 1}
              >
                {value}
              </ButtonPagination>
            ))}
          <ButtonPagination
            type="button"
            onClick={() => onClick(39)}
            active={counter.index === 40}
            disabled={counter.index === 39}
          >
            40
          </ButtonPagination>
        </>
        )}
      <button type="button" className="controller" onClick={controllerAddIndex}>
        <img src={chevronLeft} alt="goRight" className="secondImage" />
      </button>
    </PaginationContainer>
  );
}

Pagination.propTypes = {
  counter: PropTypes.shape({
    index: PropTypes.number,
    value: PropTypes.number,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  controllerAddIndex: PropTypes.func.isRequired,
  controllerRemoveIndex: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

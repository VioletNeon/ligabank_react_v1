import React, {useState} from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';

function OfferCardsList(props) {
  const {offersCount, offers} = props;
  const [, setActiveCard] = useState(null);
  const cardHoverHandler = (nextActiveCard) => {
    setActiveCard(nextActiveCard);
  };
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offersCount} places to stay in Amsterdam</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0">
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"/>
          </svg>
        </span>
        <ul className="places__options places__options--custom">
          <li className="places__option places__option--active" tabIndex="0">Popular</li>
          <li className="places__option" tabIndex="0">Price: low to high</li>
          <li className="places__option" tabIndex="0">Price: high to low</li>
          <li className="places__option" tabIndex="0">Top rated first</li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        {new Array(offersCount).fill(0).map((item, index) => item + index).map((key, index) => <OfferCard offer={offers[index]} cardHoverHandler={cardHoverHandler} key={key}/>)}
      </div>
    </section>
  );
}

OfferCardsList.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
};

export default OfferCardsList;
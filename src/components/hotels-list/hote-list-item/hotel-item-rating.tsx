import { Dispatch, SetStateAction, useId, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import StarIcoFilled from '../../../assets/images/star-icon-filled.svg';
import StarIcoOutlined from '../../../assets/images/star-icon-outlined.svg';

const MAX_STAR_RATING = 5;
const INDEX_TO_ORDER_MODIFIER = 1;

const HotelItemRating = ({
  editable,
  hotelRating,
  setMinRatingFilterValue
}: {
  editable?: boolean;
  hotelRating: string;
  setMinRatingFilterValue?: Dispatch<SetStateAction<number>>;
}) => {
  const [currentRanking, setCurrentRanking] = useState(parseInt(hotelRating, 10));

  const onRatingStarClick = (index: number) => {
    setCurrentRanking(index + INDEX_TO_ORDER_MODIFIER);
    if (editable && setMinRatingFilterValue) {
      setMinRatingFilterValue(index + INDEX_TO_ORDER_MODIFIER);
    }
  };

  return (
    <Flex marginTop={editable ? '0' : '8px'}>
      {Array.from({ length: currentRanking }, (_, starItemItemIndex) => {
        return (
          <img
            src={StarIcoFilled}
            className={`${editable ? 'filter-' : ''}rating-star-ico`}
            alt="Rating star ico"
            width="20px"
            onClick={() => editable && onRatingStarClick(starItemItemIndex)}
            key={useId()}
            data-testid={`${editable ? 'filter-' : ''}rating-star-ico`}
            style={{ cursor: editable ? 'pointer' : 'default' }}
          />
        );
      })}
      {Array.from({ length: MAX_STAR_RATING - currentRanking }, (_, starItemItemIndex) => {
        return (
          <img
            src={StarIcoOutlined}
            className="rating-star-ico"
            alt="Rating star ico"
            width="20px"
            onClick={() => editable && onRatingStarClick(currentRanking + starItemItemIndex)}
            key={useId()}
            data-testid={`${editable ? 'filter-' : ''}rating-star-ico`}
            style={{ cursor: editable ? 'pointer' : 'default' }}
          />
        );
      })}
    </Flex>
  );
};

export default HotelItemRating;

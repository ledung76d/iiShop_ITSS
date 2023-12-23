import { Rating } from '@mui/material';
import { formatCountReview } from '../../utils/formatCountReview';

// eslint-disable-next-line react/prop-types
const ButtonFilter = ({
  option,
  handleFilter,
}) => {
  // eslint-disable-next-line react/prop-types
  const { name, count, key, isSelect } =
    option;
  return (
    <div
      className={`flex items-center px-4 py-1 border 
        border-[#AFAFAF] bg-white rounded-sm
         transition cursor-pointer
        ${isSelect
          ? 'border-red-600'
          : 'border-[#AFAFAF]'
        }
        ${isSelect
          ? 'text-red-600'
          : 'border-[#AFAFAF]'
        }
        hidden md:flex
        `}
      onClick={() => handleFilter(key)}
    >
      {name}
      {count > 0 && (
        <span className="ml-1 text-red-600">
          ({formatCountReview(count)})
        </span>
      )}
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const ReviewFilter = ({
  filter,
  handleFilter,
  rating,
}) => {
  return (
    <div className="flex items-center rounded-sm flex-row my-3 mx-3 p-4 bg-[#EDEDFF] gap-24">
      <div className="flex flex-col items-center ml-4">
        <div className="text-4xl text-red-600 font-semibold mb-4">
          {rating}
          <span className="text-3xl mx-2">
            trên
          </span>
          5
        </div>
        <Rating
          name="read-only"
          value={Math.round(rating)}
          size="large"
          readOnly
          style={{
            color: '#dc2626',
            fontSize: '40px',
          }}
        />
      </div>
      <div className="flex gap-4 flex-wrap">
        {filter?.map((item) => {
          return (
            <ButtonFilter
              key={item.key}
              option={item}
              handleFilter={
                handleFilter
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default ReviewFilter;

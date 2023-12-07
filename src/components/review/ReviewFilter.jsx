import { Rating } from "@mui/material"
import { formatCountReview } from "../../utils/formatCountReview"


// eslint-disable-next-line react/prop-types
const ButtonFilter = ({ option, handleFilter }) => {
  // eslint-disable-next-line react/prop-types
  const { name, value, key } = option
  return (
    <button
      className={`flex items-center px-5 py-3 border 
        border-[#AFAFAF] bg-white rounded-sm
        `}
      onClick={() => handleFilter(key)}
    >
      {name}
      {value > 0 && (
        <span className="ml-1 text-red-600">({formatCountReview(value)})</span>
      )}
    </button>
  )
}

const REVIEW_OPTION_FILTER = [
  {
    name: "Tất cả",
    key: "all",
    value: 0,
  },
  {
    name: "5 sao",
    key: "5star",
    value: 20000,
  },
  {
    name: "4 sao",
    key: "4star",
    value: 20000,
  },
  {
    name: "3 sao",
    key: "3star",
    value: 20000,
  },
  {
    name: "2 sao",
    key: "2star",
    value: 20000,
  },
  {
    name: "1 sao",
    key: "1star",
    value: 20000,
  },
  {
    name: "Có hình ảnh",
    key: "file",
    value: 0,
  },
  {
    name: "Có bình luận",
    key: "comment",
    value: 10,
  }
]


const ReviewFilter = () => {
  return (
    <div className="flex items-center rounded-sm flex-row my-3 mx-3 p-4 bg-[#EDEDFF] gap-20 ">
      <div className="flex flex-col items-center">
        <div className="text-4xl text-red-600 font-semibold mb-4">
          4.9
          <span className="text-3xl mx-2">trên</span>
          5
        </div>
        <Rating
          name="read-only"
          value={4.9}
          size="large"
          readOnly
          style={{
            color: "#dc2626",
            fontSize: "48px"
          }}
        />
      </div>
      <div className="flex gap-8 flex-wrap">
        {REVIEW_OPTION_FILTER.map((item) => {
          return (
            <ButtonFilter key={item.key} option={item} />
          )
        })}
      </div>
    </div>
  )
}

export default ReviewFilter
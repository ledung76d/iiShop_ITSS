import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const sortData = [
  {
    id: 1,
    type: 'ratingZa',
    name: 'Sao giảm dần',
  },
  {
    id: 2,
    type: 'ratingAz',
    name: 'Sao tăng dần',
  },
  {
    id: 4,
    type: 'credibilityZa',
    name: 'Độ uy tín giảm dần',
  },
  {
    id: 3,
    type: 'credibilityAz',
    name: 'Độ uy tín tăng dần',
  },
]

// eslint-disable-next-line react/prop-types
const TopFilter = ({ listSort, handleSort }) => {
  return (
    <div className='flex flex-col gap-4'>
      {/* <div className='flex flex-row flex-wrap gap-4'>
        {brand.map((item) => (
          <div
            key={item.id}
            className='flex items-center border rounded-md px-4 py-1 cursor-pointer min-h-[32px] hover:bg-gray-200'
          >
            <img
              alt={item.name}
              src={item.img}
              className='overflow-hidden object-cover'
              width={100}
            />
          </div>
        ))}
      </div>
      <div className='mx-20'>
        <h1 className='text-2xl font-medium mb-2'>Chọn theo nhu cầu</h1>
        <div className='flex flex-row flex-wrap gap-4'>
          {list.map((item) => (
            <div key={item.id} className='flex flex-col p-1 bg-orange-500 gap-2 rounded-md cursor-pointer'>
              <h3 className='text-white font-semibold'>Văn phòng</h3>
              <img
                className='overflow-hidden w-[110px] h-[100px] '
                src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L3BmLXM3My0wOC1tb2NrdXAtYS1qb2IxMDc0LnBuZw.png"
                alt="Type"
              />
            </div>
          ))}
        </div>
      </div> */}
      <div className='flex gap-4 mt-4'>
        {/* <h1 className='text-2xl font-medium mb-2'>Sắp xếp: </h1> */}
        <div className='flex flex-row ml-2 gap-4 flex-wrap'>
          {sortData.map((item) => {
            return (
              <div
                key={item.id}
                className={`
                  flex gap-2 cursor-pointer hover:scale-105 
                hover:bg-[#F97316] hover:text-white
                  items-center  py-2 px-4 rounded-[4px]
                  ${listSort[item.type] ?
                    'bg-[#F97316] text-white border-[#F97316] border-2 '
                    :
                    'bg-white  text-[#F97316] border-dashed border-2 border-[#F97316]'
                  }
                `}
                onClick={() => handleSort(item.type)}
              >
                <span className='text-sm font-medium'>{item.name}</span>
                {/* <SortIcon sort={listSort[item.type]} /> */}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TopFilter
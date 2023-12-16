import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const sortData = [
  {
    id: 1,
    type: 'name',
    name: 'Tên',
  },
  {
    id: 2,
    type: 'date',
    name: 'Mới nhất',
  },
  {
    id: 3,
    type: 'rating',
    name: 'Số sao',
  },
  {
    id: 4,
    type: 'credibility',
    name: 'Độ uy tín',
  },
]

// eslint-disable-next-line no-unused-vars
const list = [
  {
    id: 1,
    name: 'Địa chỉ'
  },
  {
    id: 2,
    name: 'Hãng'
  },
  {
    id: 3,
    name: 'Số sao'
  },
  {
    id: 4,
    name: 'Số like'
  },
]

// eslint-disable-next-line react/prop-types
const SortIcon = ({ sort }) => {
  if (sort === 'DESC') {
    return (
      <ArrowDropDownIcon
        style={{
          color: '#F35836',
          fontSize: '32px',
        }}
      />
    )
  }
  return (
    <ArrowDropDownIcon
      style={{
        transform: 'rotate(180deg)',
        color: '#F35836',
        fontSize: '32px',
      }} />
  )

}

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
        <h1 className='text-2xl font-medium mb-2'>Sắp xếp: </h1>
        <div className='flex flex-row gap-4 flex-wrap'>
          {sortData.map((item) => {
            return (
              <div
                key={item.id}
                className='flex gap-2 cursor-pointer hover:scale-105 
                  items-center border-none px-2 rounded-[10px] bg-[#FFC7C2]'
                onClick={() => handleSort(item.type, listSort[item.type])}
              >
                <span className='text-sm font-medium'>{item.name}</span>
                <SortIcon sort={listSort[item.type]} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TopFilter
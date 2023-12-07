import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const listSort = [
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
  {
    id: 5,
    name: 'số dislike'
  },
  {
    id: 6,
    name: 'Số bình luận'
  },
  {
    id: 7,
    name: 'Số bài viết'
  }
]

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

const brand = [
  {
    id: 1,
    name: 'apple',
    img: 'https://upload.wikimedia.org/wikipedia/commons/5/57/MacBook_Air.svg'
  },
  {
    id: 2,
    name: 'msi',
    img: 'https://cdnlogo.com/logos/m/5/msi.svg'
  },
  {
    id: 3,
    name: 'apple',
    img: 'https://upload.wikimedia.org/wikipedia/commons/5/57/MacBook_Air.svg'
  },
  {
    id: 4,
    name: 'msi',
    img: 'https://cdnlogo.com/logos/m/5/msi.svg'
  },
  {
    id: 5,
    name: 'apple',
    img: 'https://upload.wikimedia.org/wikipedia/commons/5/57/MacBook_Air.svg'
  },
  {
    id: 6,
    name: 'apple',
    img: 'https://upload.wikimedia.org/wikipedia/commons/5/57/MacBook_Air.svg'
  },
  {
    id: 7,
    name: 'apple',
    img: 'https://upload.wikimedia.org/wikipedia/commons/5/57/MacBook_Air.svg'
  },
  {
    id: 8,
    name: 'apple',
    img: 'https://upload.wikimedia.org/wikipedia/commons/5/57/MacBook_Air.svg'
  },
]

const TopFilter = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-row flex-wrap gap-4'>
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
      </div>
      <div className='mx-20'>
        <h1 className='text-2xl font-medium mb-2'>Sắp xếp theo</h1>
        <div className='flex flex-row gap-4 flex-wrap'>
          {listSort.map((item) => {
            return (
              <button key={item.id} className='flex gap-2 items-center border-none px-2 rounded-[10px] bg-[#FFC7C2]'>
                <span className='text-sm font-medium'>{item.name}</span>
                <ArrowDropDownIcon style={{
                  color: '#F35836'
                }} />
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TopFilter
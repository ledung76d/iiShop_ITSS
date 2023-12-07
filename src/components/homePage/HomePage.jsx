import homepage from '@root/assets/homepage/homepage.jpg'
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div className='flex flex-1 object-cover bg-cover bg-center'
      style={{
        backgroundImage: `url(${homepage})`,
      }}>
      <div className="relative  flex flex-col justify-center items-start w-full px-[11%]">
        <h3 className="text-[48px] xl: font-montserrat text-[#67DA54] font-semibold">Chào bạn</h3>
        <h1 className="font-palanquin text-[58px] font-bold text-orange-500">
          <span
            className=" xl:whitespace-nowrap relative z-10 pr-10"
          >
            Laptop của bạn,
          </span>
          <br />
          <span className="inline-block mt-3">review của chúng tôi</span>
        </h1>
        <p className="my-8 font-montserrat text-xl text-slate-500 leading-8 gap-16 font-semibold">Hãy chọn địa chỉ uy tín để mua laptop nhé!</p>
        <div className='mt-8'>
          <Link className='bg-[#97DD3E] text-white text-2xl px-4 py-2 rounded-[40px] font-bold' to='/shop'>Tham gia</Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
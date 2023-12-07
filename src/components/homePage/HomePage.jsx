import homepage from '@/assets/homepage/homepage.jpg'

const HomePage = () => {
  return (
    <div className='h-screen object-cover bg-cover bg-center'
      style={{
        backgroundImage: `url(${homepage})`,
      }}>

    </div>
  )
}

export default HomePage
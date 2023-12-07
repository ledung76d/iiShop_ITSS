import NotificationsIcon from '@mui/icons-material/Notifications';

const AlertButton = () => {
  return (
    <div className='flex flex-row items-center gap-2'>
      <div className='border border-slate-400 p-2 rounded-md cursor-pointer'>
        <NotificationsIcon />
      </div>
      <span className='whitespace-nowrap'> Thông báo</span>
    </div >
  )
}

export default AlertButton
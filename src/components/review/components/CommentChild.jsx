import { Avatar } from "@mui/material"
import MessageIcon from '@mui/icons-material/Message';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const Icon = ({ type }) => {
  if (type === 'LIKE')
    return <ThumbUpIcon
      style={{
        color: 'green',
        fontSize: '16px',
      }}
    />
  if (type === 'DISLIKE')
    return <ThumbDownIcon
      style={{
        color: 'red',
        fontSize: '16px',
      }}
    />
  return <MessageIcon
    style={{
      color: 'gray',
      fontSize: '16px',
    }}
  />
}

const CommentChild = ({ message }) => {
  console.log(message)
  return (
    <>
      <div className="my-4 flex flex-1  gap-4 justify-start">
        <Avatar
          alt="name"
          src={message?.avatar}
          sx={{ width: 32, height: 32 }}
        />
        <div className="flex flex-col gap-2">
          <div className="flex flex-col justify-between gap-1">
            <div className="text-slate-700 font-semibold flex flex-row items-center gap-2">
              <span>{message?.fullname}</span>
              <Icon type={message?.type} />
            </div>
            <span className="text-xs text-slate-500"> {message?.createdAt}</span>
          </div>
          <span>{message?.content}</span>
        </div>
      </div>
      <hr className="w-full my-2" />
    </>
  )
}

export default CommentChild
import { Avatar } from "@mui/material"

const MessageChild = ({ message }) => {
  return (
    <div className="my-4 flex  gap-4 justify-start">
      <Avatar
        alt="name"
        src={message?.avatar}
        sx={{ width: 32, height: 32 }}
      />
      <div className="flex flex-col gap-2">
        <span className="text-slate-700 font-semibold">
          {message?.name}
        </span>
        <span>{message?.content}</span>
      </div>
    </div>
  )
}

export default MessageChild
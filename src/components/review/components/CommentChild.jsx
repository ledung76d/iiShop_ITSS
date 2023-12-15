import { Avatar } from "@mui/material"

const CommentChild = ({ message }) => {
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
            <span className="text-slate-700 font-semibold">
              {message?.fullname}
            </span>
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
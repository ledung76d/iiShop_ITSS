import { Avatar, Rating } from "@mui/material"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentChild from "./components/CommentChild";
import MessageIcon from '@mui/icons-material/Message';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CommentChildModal from "./components/CommentChildModal";
import { useState } from "react";

const messageChild = [
  {
    name: 'Nguyễn Văn A',
    avatar: 'https://picsum.photos/200/300',
    date: '2021-10-10 19:16',
    rating: 5,
    title: 'Sản phẩm tốt',
    content: 'Sản phẩm tốt, giao hàng nhanh',
    like: 100,
    disLike: 10,
  },
  {
    name: 'Nguyễn Văn A',
    avatar: 'https://picsum.photos/200/300',
    date: '2021-10-10 19:16',
    rating: 5,
    title: 'Sản phẩm tốt',
    content: 'Sản phẩm tốt, giao hàng nhanh',
    like: 100,
    disLike: 10,
  },
  {
    name: 'Nguyễn Văn A',
    avatar: 'https://picsum.photos/200/300',
    date: '2021-10-10 19:16',
    rating: 5,
    title: 'Sản phẩm tốt',
    content: 'Sản phẩm tốt, giao hàng nhanh',
    like: 100,
    disLike: 10,
  },
  {
    name: 'Nguyễn Văn A',
    avatar: 'https://picsum.photos/200/300',
    date: '2021-10-10 19:16',
    rating: 5,
    title: 'Sản phẩm tốt',
    content: 'Sản phẩm tốt, giao hàng nhanh',
    like: 100,
    disLike: 10,
  },
  {
    name: 'Nguyễn Văn A',
    avatar: 'https://picsum.photos/200/300',
    date: '2021-10-10 19:16',
    rating: 5,
    title: 'Sản phẩm tốt',
    content: 'Sản phẩm tốt, giao hàng nhanh',
    like: 100,
    disLike: 10,
  },
]

const review = {
  name: 'Nguyễn Văn A',
  avatar: 'https://picsum.photos/200/300',
  date: '2021-10-10 19:16',
  rating: 5,
  title: 'Sản phẩm tốt',
  content: 'Sản phẩm tốt',
  like: 100,
  disLike: 10,
  img: [
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
  ],
  messageChild,
}

const CommentCard = ({ comment }) => {
  const [isShowChildMessage, setIsShowChildMessage] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [action, setAction] = useState('message') // like, dislike, message

  const handleModalAction = (action) => {
    setAction(action)
    setOpenModal(true)
  }

  const handleCreateChildMessage = (message) => {
    // Viet o day ne Vanh :D
    console.log(message)
    console.log('create child message')
  }

  return (
    <>
      <div className=" flex justify-start mx-20">
        <div className="flex-1 flex flex-col border border-slate-400 rounded-lg">
          <div className="flex justify-between bg-slate-200 p-4 rounded-t-lg">
            <div className="flex flex-row items-center gap-4">
              <Avatar
                alt="name"
                src={comment?.avatar}
                sx={{ width: 48, height: 48 }}
              />
              <div className="flex flex-col gap-1">
                <span className="text-slate-700 font-semibold ml-1">{comment?.fullname}</span>
                <Rating
                  value={comment?.rating}
                  style={{
                    fontSize: "24px"
                  }}
                  readOnly
                />
              </div>
            </div>
            <span className="text-slate-500 text-xs ml-1">{comment?.createdAt}</span>
          </div>
          <div className="flex flex-col m-4">
            <div className="flex flex-col gap-5 mb-4">
              <span className="text-slate-700 ml-1">{comment?.content}</span>
              <div className="flex items-center flex-row gap-3 flex-wrap">
                {comment?.images?.map((img, index) => {
                  return (
                    <img key={index} src={img.url} alt="" className="w-[100px] h-[100px] object-cover" />
                  )
                })}
              </div>
            </div>
          </div>
          <div className="flex items-center border-t border-b border-slate-400">
            <div
              className="flex-1 cursor-pointer flex justify-center gap-1 p-2 border-r border-slate-400 opacity-50 hover:opacity-100"
              onClick={() => handleModalAction('message')}
            >
              <MessageIcon
                style={{
                  color: 'gray',
                  fontSize: '24px',
                  cursor: 'pointer',
                }}
              />
              <span className="text-slate-500">{comment?.reactions?.length}</span>
            </div>
            <div
              className="flex-1 cursor-pointer flex justify-center gap-1 p-2 border-r border-slate-400 opacity-50 hover:opacity-100"
              onClick={() => handleModalAction('like')}
            >
              <ThumbUpIcon
                className="hover:opacity-100"
                style={{
                  color: 'green',
                  fontSize: '24px',
                  cursor: 'pointer',
                }}
              />
              <span className="text-slate-500">{comment?.likes}</span>
            </div>
            <div
              className="flex-1 cursor-pointer flex justify-center gap-1 p-2 border-r border-slate-400 opacity-50 hover:opacity-100"
              onClick={() => handleModalAction('dislike')}
            >
              <ThumbDownIcon
                style={{
                  color: 'red',
                  fontSize: '24px',
                  cursor: 'pointer',
                }}
              />
              <span className="text-slate-500">{comment?.dislikes}</span>
            </div>

            <div
              className="hover:bg-slate-200 p-2"
              onClick={() => setIsShowChildMessage(!isShowChildMessage)}
            >
              {isShowChildMessage ? (
                <KeyboardArrowDownIcon
                  style={{
                    color: 'red',
                    fontSize: '24px',
                    cursor: 'pointer',
                    margin: "0 4px"
                  }}
                />
              ) :
                <KeyboardArrowUpIcon
                  style={{
                    color: 'red',
                    fontSize: '24px',
                    cursor: 'pointer',
                    margin: "0 4px"
                  }}
                />
              }
            </div>
          </div>
          <div className="m-4 flex flex-col ">
            {isShowChildMessage && comment?.reactions.length > 0 && comment?.reactions?.map((child) => {
              return (
                <CommentChild key={child.name} message={child} />
              )
            })}
            {isShowChildMessage && comment?.reactions.length === 0 && (
              <div className="flex justify-center">
                <button className="text-slate-500">Không có nhận xét</button>
              </div>
            )}
          </div>
        </div>
        <CommentChildModal
          action={action}
          setAction={setAction}
          open={openModal}
          setOpen={setOpenModal}
          handleOnSubmit={handleCreateChildMessage}
        />
      </div>
      <hr className="w-full my-2" />
    </>

  )
}

export default CommentCard


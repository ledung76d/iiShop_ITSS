import {
  Avatar,
  Rating,
} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentChild from './components/CommentChild';
import MessageIcon from '@mui/icons-material/Message';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CommentChildModal from './components/CommentChildModal';
import {
  useEffect,
  useState,
} from 'react';
import moment from 'moment';
import { shopAPIs } from '../../service';
import { useAuth } from '../AuthPage/hook/useAuth';

const CommentCard = ({
  comment,
  shopId,
}) => {
  const { authUser, isLogged } =
    useAuth();
  const [
    isShowChildMessage,
    setIsShowChildMessage,
  ] = useState(false);
  const [openModal, setOpenModal] =
    useState(false);
  const [action, setAction] =
    useState('message'); // like, dislike, message
  const [content, setContent] =
    useState('');
  const [feedbacks, setFeedbacks] =
    useState(comment?.feedbacks || 0);
  const [likes, setLikes] = useState(
    comment?.likes || 0,
  );
  const [dislikes, setDislikes] =
    useState(comment?.dislikes || 0);

  const [reactions, setReactions] =
    useState(comment?.reactions || []);

  useEffect(() => {
    console.log('comment', comment);
    console.log('reactions', reactions);
  }, [comment, reactions]);

  const handleModalAction = (
    action,
  ) => {
    setAction(action);
    setOpenModal(true);
  };

  const actionToText = (action) => {
    switch (action) {
      case 'like':
        return 'LIKE';
      case 'dislike':
        return 'DISLIKE';
      case 'message':
        return 'FEEDBACK';
      default:
        return '';
    }
  };

  const handleCreateChildMessage =
    async () => {
      const res =
        await shopAPIs.createReaction({
          storeId: shopId,
          commentId: comment.id,
          reaction: {
            type: actionToText(action),
            content,
            user_id: authUser.id,
          },
        });

      if (res.data.EC === 200) {
        console.log('success', res);
        setContent('');
        setOpenModal(false);
        setFeedbacks(
          res.data.data.feedbacks,
        );
        setLikes(res.data.data.likes);
        setDislikes(
          res.data.data.dislikes,
        );
        setReactions(
          res.data.data.reactions.sort(
            (a, b) =>
              new Date(b.createdAt) -
              new Date(a.createdAt),
          ),
        );
      } else {
        setOpenModal(false);
        setContent('');
        alert('Có lỗi xảy ra');
      }
    };

  return (
    <>
      <div className=" flex justify-start mx-20">
        <div className="flex-1 flex flex-col border border-slate-400 rounded-lg">
          <div className="flex justify-between bg-slate-200 p-4 rounded-t-lg">
            <div className="flex flex-row items-center gap-4">
              <Avatar
                alt="name"
                src={comment?.avatar}
                sx={{
                  width: 48,
                  height: 48,
                }}
              />
              <div className="flex flex-col gap-1">
                <span className="text-slate-700 font-semibold ml-1">
                  {comment?.fullname}
                </span>
                <Rating
                  value={
                    comment?.rating
                  }
                  style={{
                    fontSize: '24px',
                  }}
                  readOnly
                />
              </div>
            </div>
            <span className="text-slate-500 text-xs ml-1">
              {moment(
                comment?.createdAt,
              ).format(
                'DD/MM/YYYY HH:mm',
              )}
            </span>
          </div>
          <div className="flex flex-col m-4">
            <div className="flex flex-col gap-5 mb-4">
              <span className="text-slate-700 ml-1">
                {comment?.content}
              </span>
              <div className="flex items-center flex-row gap-3 flex-wrap">
                {comment?.images?.map(
                  (img, index) => {
                    return (
                      <img
                        key={index}
                        src={img.url}
                        alt=""
                        className="w-[100px] h-[100px] object-cover"
                      />
                    );
                  },
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center border-t border-b border-slate-400">
            <div
              className="flex-1 cursor-pointer flex justify-center gap-1 p-2 border-r border-slate-400 opacity-50 hover:opacity-100"
              onClick={() =>
                handleModalAction(
                  'message',
                )
              }
            >
              <MessageIcon
                style={{
                  color: 'gray',
                  fontSize: '24px',
                  cursor: 'pointer',
                }}
              />
              <span className="text-slate-500">
                {feedbacks}
              </span>
            </div>
            <div
              className="flex-1 cursor-pointer flex justify-center gap-1 p-2 border-r border-slate-400 opacity-50 hover:opacity-100"
              onClick={() =>
                handleModalAction(
                  'like',
                )
              }
            >
              <ThumbUpIcon
                className="hover:opacity-100"
                style={{
                  color: 'green',
                  fontSize: '24px',
                  cursor: 'pointer',
                }}
              />
              <span className="text-slate-500">
                {likes}
              </span>
            </div>
            <div
              className="flex-1 cursor-pointer flex justify-center gap-1 p-2 border-r border-slate-400 opacity-50 hover:opacity-100"
              onClick={() =>
                handleModalAction(
                  'dislike',
                )
              }
            >
              <ThumbDownIcon
                style={{
                  color: 'red',
                  fontSize: '24px',
                  cursor: 'pointer',
                }}
              />
              <span className="text-slate-500">
                {dislikes}
              </span>
            </div>

            <div
              className="hover:bg-slate-200 p-2"
              onClick={() =>
                setIsShowChildMessage(
                  !isShowChildMessage,
                )
              }
            >
              {isShowChildMessage ? (
                <KeyboardArrowDownIcon
                  style={{
                    color: 'red',
                    fontSize: '24px',
                    cursor: 'pointer',
                    margin: '0 4px',
                  }}
                />
              ) : (
                <KeyboardArrowUpIcon
                  style={{
                    color: 'red',
                    fontSize: '24px',
                    cursor: 'pointer',
                    margin: '0 4px',
                  }}
                />
              )}
            </div>
          </div>
          <div className="m-4 flex flex-col ">
            {isShowChildMessage &&
              reactions.length > 0 &&
              reactions?.map(
                (child) => {
                  return (
                    <CommentChild
                      key={child.name}
                      message={child}
                    />
                  );
                },
              )}
            {isShowChildMessage &&
              comment?.reactions
                .length === 0 && (
                <div className="flex justify-center">
                  <button className="text-slate-500">
                    Không có nhận xét
                  </button>
                </div>
              )}
          </div>
        </div>
        <CommentChildModal
          action={action}
          setAction={setAction}
          open={openModal}
          setOpen={setOpenModal}
          handleOnSubmit={
            handleCreateChildMessage
          }
          setContent={setContent}
          content={content}
        />
      </div>
      <hr className="w-full my-2" />
    </>
  );
};

export default CommentCard;

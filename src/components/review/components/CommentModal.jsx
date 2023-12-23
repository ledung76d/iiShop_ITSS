import Box from '@mui/material/Box';
import Button from '../../Button';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import { orange } from '@mui/material/colors';
import { useState } from 'react';
import {
  Rating,
  TextField,
} from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useAuth } from '../../AuthPage/hook/useAuth';
import { shopAPIs } from '../../../service';
import axios from 'axios';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '620px',
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow:
    ' rgba(0, 0, 0, 0.16) 0px 1px 4px',
  p: 3,
};

export default function CommentModal({
  shop,
  reloadList,
}) {
  const { authUser, isLogged } =
    useAuth();
  const [open, setOpen] =
    useState(false);
  const [images, setImages] = useState(
    [],
  );
  const [comment, setComment] =
    useState(shop);

  const [newReview, setNewReview] =
    useState({
      rating: 0,
      content: '',
      images: [],
    });
  const [loading, setLoading] =
    useState(false);

  const handleOpen = () =>
    setOpen(true);
  const handleClose = () =>
    setOpen(false);

  const convertBase64 = (file) => {
    return new Promise(
      (resolve, reject) => {
        const fileReader =
          new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
        fileReader.onerror = (
          error,
        ) => {
          reject(error);
        };
      },
    );
  };

  const onChangeInputImage = async (
    e,
  ) => {
    const files = e.target.files;
    const images = [];
    for (
      let i = 0;
      i < files.length;
      i++
    ) {
      const file = files[i];
      const base64 =
        await convertBase64(file);
      images.push(base64);
    }
    setImages(images);
    setNewReview({
      ...newReview,
      images: files,
    });
  };

  const uploadImage = async (image) => {
    const data = new FormData();
    data.append('file', image);
    data.append(
      'upload_preset',
      'threilvx',
    );
    data.append(
      'cloud_name',
      'kien-save-img',
    );
    data.append('folder', 'ITSS');

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/kien-save-img/image/upload`,
        {
          method: 'POST',
          body: data,
        },
      );
      const res = await response.json();
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const clearData = () => {
    setNewReview({
      rating: 0,
      content: '',
      images: [],
    });
    setImages([]);
  };

  const uploadImages = async (
    images,
  ) => {
    let urls = [];
    for (
      let i = 0;
      i < images.length;
      i++
    ) {
      const res = await uploadImage(
        images[i],
      );
      urls.push(res.url);
    }
    return urls;
  };
  const handleOnSubmit = async () => {
    console.log('submit comment');
    setLoading(true);
    const urls = await uploadImages(
      newReview.images,
    );

    let comment = {
      ...newReview,
      images: urls,
      user_id: authUser.id,
    };

    const res =
      await shopAPIs.createReview({
        storeId: shop.id,
        comment: comment,
      });
    setLoading(false);
    if (res.data.EC === 200) {
      reloadList();
      handleClose();
    } else {
      alert('Đánh giá thất bại');
      handleClose();
      clearData();
    }
  };

  return (
    <div>
      <Button
        label="Viết đánh giá"
        color="orange"
        custom={'w-[200px]'}
        onClick={handleOpen}
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="flex items-center justify-between"
          >
            <span className="text-2xl font-semibold">
              Đánh giá cửa hàng
            </span>
            <CloseIcon
              onClick={handleClose}
              style={{
                width: 32,
                height: 32,
                cursor: 'pointer',
              }}
            />
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 4 }}
          >
            <div>
              <div className="flex gap-8">
                <img
                  src={
                    shop?.images[0].url
                  }
                  alt=""
                  width={128}
                  height={128}
                />
                <div className="">
                  <span className="mb-4 flex flex-col text-xl font-normal text-slate-500 gap-2">
                    {comment.name}
                    <span className="text-xs font-normal text-slate-500">
                      {shop?.address}
                    </span>
                  </span>
                  <Rating
                    style={{
                      fontSize: '32px',
                    }}
                    defaultValue={5}
                    onChange={(e) =>
                      setNewReview({
                        ...newReview,
                        rating:
                          e.target
                            .value,
                      })
                    }
                  />
                </div>

              </div>
              <div className="my-4 flex gap-8 item-center">
                <label
                  htmlFor="comment"
                  className="cursor-pointer"
                >
                  <CameraAltIcon
                    style={{
                      fontSize: '48px',
                      color: '#6B7280',
                    }}
                  />
                </label>
                <input
                  type="file"
                  id="comment"
                  name="avatar"
                  className="hidden"
                  accept="image/png, image/jpeg"
                  multiple
                  onChange={(e) =>
                    onChangeInputImage(
                      e,
                    )
                  }
                />
                <div className="flex items-center flex-wrap gap-4">
                  {images?.length > 0 &&
                    images?.map(
                      (
                        image,
                        index,
                      ) => {
                        return (
                          <img
                            src={image}
                            alt=""
                            key={index}
                            style={{
                              height: '40px',
                              width: '40px',
                              borderRadius: '4px',
                              border: '1px solid #E5E7EB',
                            }}
                          />
                        );
                      },
                    )}
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <TextField
                  id="outlined-multiline-static"
                  label="Bình luận của bạn"
                  multiline
                  rows={4}
                  defaultValue=""
                  onChange={(e) =>
                    setNewReview({
                      ...newReview,
                      content:
                        e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </Typography>
          <Typography
            id="modal-modal-footer"
            sx={{ mt: 2 }}
            className="flex items-center flex-row gap-4"
          >
            <Box sx={{ flexGrow: 1 }}>
              <Button
                label="Hủy bỏ"
                color="slate"
                onClick={handleClose}
                disabled={loading}
              />
            </Box>
            <Box
              sx={{
                m: 1,
                position: 'relative',
                flexGrow: 1,
              }}
            >
              <Button
                label='Đăng comment'
                color={
                  loading
                    ? 'slate'
                    : 'orange'
                }
                isLoading={loading}
                // disabled={loading}
                onClick={handleOnSubmit}
              />
              {loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: 'green',
                    position:
                      'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                  }}
                />
              )}
            </Box>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

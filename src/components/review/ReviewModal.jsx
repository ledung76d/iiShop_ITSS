import Box from '@mui/material/Box';
import Button from '../Button';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Rating, TextField } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '620px',
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: ' rgba(0, 0, 0, 0.16) 0px 1px 4px',
  p: 3,
};

export default function ReviewModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [images, setImages] = useState([])

  const onChangeInputImage = async (e) => {
    const files = e.target.files
    const images = []
    for (let i = 0; i < files.length; i++) {
      // const file = files[i]
      // const base64 = await convertBase64(file)
      // images.push(base64)
    }
    setImages(images)
  }

  const handleOnSubmit = async () => {
    console.log('submit review')
  }

  return (
    <div>
      <Button label="Viết đánh giá" color="orange" custom={"w-[200px]"} onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" className='flex items-center justify-between'>
            <h1 className='text-3xl font-semibold'>Đánh giá cửa hàng</h1>
            <CloseIcon
              onClick={handleClose}
              style={{
                width: 32,
                height: 32,
                cursor: 'pointer',
              }}
            />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 4 }}>
            <div>
              <div className='flex gap-8' >
                <img src="https://laptop88.vn/media/news/0607_BVCN88-small.jpg" alt="" width={128} />
                <div className='flex flex-col gap-8'>
                  <h2 className='text-xl font-normal text-slate-500'>Cửa hàng FPT shop Hai Bà Tưng</h2>
                  <Rating
                    value={4}
                    style={{
                      fontSize: "32px"
                    }}
                    readOnly
                  />
                </div>
              </div>
              <div className='my-4 flex gap-8 item-center'>
                <label htmlFor="review" className='cursor-pointer'>
                  <CameraAltIcon
                    style={{
                      fontSize: "48px",
                      color: '#6B7280'
                    }}
                  />
                </label>
                <input type="file"
                  id="review" name="avatar"
                  className='hidden'
                  accept="image/png, image/jpeg"
                  onChange={(e) => onChangeInputImage(e)}
                />
                <div className='flex items-center'>
                  {images.length > 0 ? images?.map((image, index) => {
                    return (
                      <img src={image} alt="" key={index} width={128} />
                    )
                  }) :
                    <div>
                      Empty
                    </div>
                  }
                </div>
              </div>
              <div className='flex flex-col gap-4 mt-4'>
                <TextField
                  id="outlined-multiline-static"
                  label="Bình luận của bạn"
                  multiline
                  rows={4}
                />
              </div>
            </div>
          </Typography>
          <Typography id="modal-modal-footer" sx={{ mt: 2 }} className='flex items-center flex-row gap-4'>
            <Button label="Hủy bỏ" color="slate" onClick={handleClose} />
            <Button label="Đăng review" color="orange" onClick={handleOnSubmit} />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

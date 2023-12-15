import Box from '@mui/material/Box';
import Button from '../../Button';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import MessageIcon from '@mui/icons-material/Message';
import { useAuth } from '../../AuthPage/hook/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '480px',
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: ' rgba(0, 0, 0, 0.16) 0px 1px 4px',
  p: 3,
};


const ActionSelect = ({ action, setAction }) => {

  const handleChange = (event) => {
    setAction(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 160 }}>
      <FormControl sx={{ minWidth: 169 }}>
        <Select
          value={action}
          onChange={(e) => handleChange(e)}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={"message"}>
            <MessageIcon
              className='mr-2'
              style={{
                color: 'gray',
                fontSize: '24px',
                cursor: 'pointer',
              }}
            />
            Phản hồi
          </MenuItem>
          <MenuItem value={"like"}>
            <ThumbUpIcon
              className='mr-2'
              style={{
                color: 'green',
                fontSize: '24px',
                cursor: 'pointer',
                opacity: '0.9'
              }}
            />
            Thích
          </MenuItem>
          <MenuItem value={"dislike"}>
            <ThumbDownIcon
              className='mr-2'
              style={{
                color: 'red',
                fontSize: '24px',
                cursor: 'pointer',
                opacity: '0.9'
              }}
            />
            Không thích
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default function CommentChildModal({
  action,
  setAction,
  open,
  setOpen,
  handleOnSubmit
}) {
  const handleClose = () => setOpen(false);
  const { authUser, isLogged } = useAuth()
  // truyen noi dung mon submit o day
  const handleCreateChildMessage = () => {

    handleOnSubmit()
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" className='flex items-center justify-between'>
            <span className='text-2xl font-semibold'>Nhận xét phản hồi</span>
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
              <hr className="w-full " />
              <div className='my-4 flex flex-col gap-2'>
                <span className='text-slate-700 font-semibold'>
                  Bày tỏ thái độ
                </span>
                <ActionSelect
                  action={action}
                  setAction={setAction}
                />
              </div>
              <div className='flex flex-col gap-4 mt-4'>
                <TextField
                  id="outlined-multiline-static"
                  label="Nhận xét của bạn"
                  multiline
                  rows={4}
                />
              </div>
            </div>
          </Typography>
          <Typography id="modal-modal-footer" sx={{ mt: 2 }} className='flex items-center flex-row gap-4'>
            <Button label="Hủy bỏ" color="slate" onClick={handleClose} />
            <Button label="Nhận xét" color="orange" onClick={handleCreateChildMessage} />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

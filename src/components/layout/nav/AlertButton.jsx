import NotificationsIcon from '@mui/icons-material/Notifications';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
// import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
// import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import {
  useState,
  useEffect,
} from 'react';
import notificationAPIs from '../../../service/notificationApis';
import { socketService } from '../../../service/socketService';
import { useNavigate } from 'react-router-dom';

const AlertButton = () => {
  const [drawer, setDrawer] =
    useState(false);
  const [
    notifications,
    setNotifications,
  ] = useState([]);
  
  const navigate = useNavigate();
  

  const fetchNotifications = async (
    userId,
  ) => {
    try {
      const param = {
        page: 1,
        limit: 10,
        user: userId,
      };
      const res =
        await notificationAPIs.getAll(
          param,
        );
      setNotifications(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const user =
      localStorage.getItem('user');
    if (user) {
      const userId =
        JSON.parse(user)._id;
      fetchNotifications(userId);
    }
  }, []);

  useEffect(() => {
    socketService.connectWithSocketServer(
      notifications,
      setNotifications,
    );
  }, [notifications]);

  const renderHead = (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        py: 2,
        pl: 2.5,
        pr: 1,
        minHeight: 68,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          flexGrow: 1,
          fontWeight: 800,
        }}
      >
        Thong bao
      </Typography>
      <Tooltip title="Mark all as read">
        <IconButton color="primary">
          <DoneAllIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );

  const renderList = (
    // <Scrollbar>
    <List disablePadding>
      {notifications.map(
        (notification, index) => (
          <>
            <ListItemButton
              key={index}
              disableRipple
              onClick={() => navigate(`/shop/${notification.store._id}/reviews`)}
              sx={{
                p: 2.5,
                alignItems:
                  'center',
                justifyContent: 'center',
                borderBottom: (theme) =>
                  `dashed 1px ${theme.palette.divider}`,
              }}
            >
              <Avatar
                src={
                  notification.sender
                    .avatar
                }
                sx={{
                  bgcolor:
                    'background.neutral',
                }}
              />
              <ListItemText
                sx={{ ml: 2}}
                disableTypography
                primary={
                  notification.message
                }
                secondary={
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{
                      typography:
                        'caption',
                      color:
                        'text.disabled',
                    }}
                    divider={
                      <Box
                        sx={{
                          width: 2,
                          height: 2,
                          bgcolor:
                            'currentColor',
                          mx: 0.5,
                          borderRadius:
                            '50%',
                        }}
                      />
                    }
                  >
                    {notification.sender
                      .fullname ||
                      'An danh'}
                  </Stack>
                }
              />
            </ListItemButton>
          </>
        ),
      )}
    </List>
    // </Scrollbar>
  );

  return (
    <>
      <IconButton
        whileTap="tap"
        whileHover="hover"
        color={
          drawer ? 'primary' : 'default'
        }
        onClick={() => {
          setDrawer(!drawer);
        }}
      >
        <Badge
          badgeContent={5}
          color="error"
        >
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <Drawer
        open={drawer}
        onClose={() => setDrawer(false)}
        anchor="right"
        slotProps={{
          backdrop: {
            invisible: true,
          },
        }}
        PaperProps={{
          sx: {
            width: 1,
            maxWidth: 420,
          },
        }}
      >
        {renderHead}

        <Divider />

        {renderList}
      </Drawer>
    </>
  );
};

export default AlertButton;

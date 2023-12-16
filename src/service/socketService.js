import io from 'socket.io-client';

class SocketService {
  constructor() {
    this.socket = null;
  }

  getSocket() {
    return this.socket;
  }

  setSocket(socket) {
    this.socket = socket;
  }

  connectWithSocketServer(
    notifications,
    setNotifications
  ) {
    this.socket = io(
      'http://localhost:8000',
    );

    this.socket.on(
      'newNotification',
      (data) => {
        const user = localStorage.getItem('user');
        if (user) {
          const userId = JSON.parse(user)._id;
          if (data.recipient === userId) {
            notifications.unshift(data);
            setNotifications([...notifications]);
          }
        }
      },
    );
  }

  disconnect() {
    this.socket.disconnect();
  }
}

export const socketService =
  new SocketService();

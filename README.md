# Full Stack Chat Application 💬🗣️

![Chat App Demo](./assets/chatapp.png)

A real-time chat application built with **React**, **Node.js**, **Express**, **MongoDB**, **Cloudinary**, **DaisyUI**, **Tailwind CSS**, **Socket.IO**, **JWT**, and more. This application allows users to create accounts, send messages in real-time, share images, and use an emoji picker for a more interactive experience.

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="30" height="30" alt="React Logo"> &nbsp;&nbsp;&nbsp;<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="30" height="30" alt="Node.js Logo"> &nbsp;&nbsp;&nbsp;<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg" width="30" height="30" alt="MongoDB Logo"> &nbsp;&nbsp;&nbsp;<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" width="30" height="30" alt="Express.js Logo"> &nbsp;&nbsp;&nbsp;<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width="30" height="30" alt="Tailwind Logo"> &nbsp;&nbsp;&nbsp;<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg" width="30" height="30" alt="Socket.io Logo">


## Features

- **User Authentication**: Users can sign up, log in, and manage their profiles.
- **Real-Time Messaging**: Send and receive messages instantly without delays using **Socket.IO**.
- **Emoji Picker**: Users can select and send emojis to make chats more interactive.
- **Image Picker**: Users can upload and send images using **Cloudinary**.
- **Responsive UI**: Designed with **Tailwind CSS** and **DaisyUI** for an elegant and responsive user interface.
- **JWT Authentication**: Secure user authentication with **JWT** tokens.

## Tech Stack

- **Frontend**:
  - React
  - Tailwind CSS
  - DaisyUI
  - Socket.IO
    
- **Backend**:
  - Node.js
  - Express
  - JWT Authentication
  - Cloudinary for image upload
 
- **Database**:
  - MongoDB
       
- **Real-Time Features**:
  - Socket.IO for instant message exchange

### create React + vite frontend

```
npm create vite@latest
```

### run the frontend folder

```
cd frontend
npm install
npm run dev
```

### run the backend folder

```
cd backend
npm install
npm run dev
```

### install node packages to the backend folder

```
npm init -y
```

### install nodemon devDependencies

```
npm i nodemon -D
```

### .env configuration

```
MONGODB_URI=mongodb+srv://janiduchamod25:123@chat.64s7a.mongodb.net/chat_db?retryWrites=true&w=majority&appName=Chat
PORT=5001
JWT_SECRET=mysecretkey
NODE_ENV=development

CLOUDINARY_CLOUD_NAME=dw0kg1jfw
CLOUDINARY_API_KEY=459734256311868
CLOUDINARY_API_SECRET=9gJ1ySl4gyAQAVEG6-KttSvThEQ
```

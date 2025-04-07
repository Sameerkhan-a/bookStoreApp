
# 📚 BiblioHub – MERN-Based Online Bookstore Web App

**BiblioHub** is a full-stack online bookstore web application developed using the MERN (MongoDB, Express, React, Node.js) stack.

## 🚀 Features

- 🔐 **User Authentication** (Login/Signup)
- 📚 **Book Listing with Categories**
- 🎨 **Responsive UI** with Tailwind CSS and DaisyUI
- 🔍 **Search and Filter Books**
- ⚡ **Toast Notifications** for interactions
- 🔄 **Form Validation** with React Hook Form
- 🧭 **Client-side Routing** with React Router
- 📦 **RESTful APIs** with Express.js

---

## 🛠️ Tech Stack

### 🧩 Frontend
- React.js
- Vite
- React Router DOM
- React Hook Form
- Axios
- Tailwind CSS
- DaisyUI
- React Slick (for sliders/carousels)
- React Hot Toast

### ⚙️ Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- dotenv
- cors
- nodemon

---

## 🧑‍💼 Roles

- **User:**
  - Signup / Login
  - View books

- **Admin:**
  - Add new books
  - Update/delete books
  - View all book listings

---

## 📂 Folder Structure

```
bookStore/
├── Backend/
│   ├── index.js
│   ├── models/
│   ├── routes/
│   └── controllers/
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
├── .env
└── README.md
```

---

## 🔧 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/Sameerkhan-a/bookStoreApp.git
cd bookStoreApp
```

### 2. Backend Setup
```bash
cd Backend
npm install
npm start
```

### 3. Frontend Setup
```bash
cd ../Frontend
npm install
npm run dev
```

### 4. Environment Variables
Create a `.env` file in the `Backend/` folder and add:

```env
MONGO_URI=your_mongo_db_connection_string
PORT=5000
```

---

## 📝 Future Enhancements

- 💳 Payment Gateway Integration (e.g. Razorpay)
- 🧾 Order History & Tracking
- 📈 Dashboard Analytics for Admin
- 📧 Email Notifications

---



## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

Made with ❤️ by [Sameer Khan](https://github.com/Sameerkhan-a)

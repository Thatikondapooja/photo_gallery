# React Photo Gallery App

This project is a **Photo Gallery Web Application** built with **React + Vite + Tailwind CSS**.  
It fetches photos from the **Picsum Photos API**, displays them in a responsive grid, allows users to search photos by author name, and mark photos as favourites.

---

## 🚀 Features

- Fetch 30 photos from the Picsum Photos API
- Responsive photo grid
- Real-time search filter by author name
- Mark and unmark photos as favourites
- Favourite photos persist using localStorage
- Custom React hook for API fetching
- State management using useReducer
- Performance optimization using useMemo and useCallback

---

## 🛠 Technologies Used

- React
- Vite
- Tailwind CSS
- JavaScript (ES6)
- React Hooks

---

## 📂 Project Structure
src
│
├── components
│ ├── Gallery.jsx
│ ├── PhotoCard.jsx
│ └── SearchBar.jsx
│
├── hooks
│ └── useFetchPhotos.js
│
├── reducer
│ └── favouriteReducer.js
│
├── App.jsx
├── main.jsx
└── index.css


---

## 📸 API Used

This project uses the **Picsum Photos API** to fetch images.

API endpoint:

https://picsum.photos/v2/list?limit=30


---

## ⚙️ Installation and Setup

1. Clone the repository

```bash
git clone https://github.com/your-username/photo-gallery.git

2. Navigate to the project folder

cd photo-gallery

3. Install dependencies

npm install

4. Run the development server

npm run dev

5. Open the app in your browser

http://localhost:5173




🧠 React Concepts Used

This project demonstrates the use of several important React concepts:

useState → Manage search input state

useReducer → Manage favourites state

useEffect → Save favourites to localStorage

useMemo → Optimize photo filtering

useCallback → Prevent unnecessary function recreation

Custom Hooks → Separate data fetching logic

📦 How Favourites Work

When a user clicks the heart icon, a TOGGLE_FAVOURITE action is dispatched.

The favouriteReducer adds or removes the photo ID from the favourites array.

The favourites state is saved to localStorage using useEffect.

When the page reloads, favourites are restored from localStorage.

📱 Responsive Design

The gallery layout adjusts based on screen size:

Screen Size	Columns
Mobile	1
Tablet	2
Desktop	4

Implemented using Tailwind grid classes.

🎥 Assignment Requirement

This project includes:

Custom Hook (useFetchPhotos)

State management using useReducer

Performance optimization with useMemo and useCallback

Real-time search filtering

localStorage persistence

📌 Author

Pooja Thatikonda

GitHub: https://github.com/Thatikondapooja

LinkedIn: https://www.linkedin.com/in/thatikonda-pooja-76b2132ba/



---
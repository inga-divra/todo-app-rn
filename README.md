# 📝 Todo App

This application was built as part of a **30-hour React Native Bootcamp**.  
The main goal of this project was to strengthen my understanding of **React Native fundamentals** and build a **fully functional mobile todo application** from scratch.

---

## 📷 Screenshots

### 🌙 Dark Mode

<p>
  <img src="./screenshots/dark1.PNG" width="250" />
  <img src="./screenshots/dark2.PNG" width="250" />
  <img src="./screenshots/dark3.PNG" width="250" />
</p>

**Todos Screen** • **Editing Todo** • **Delete Alert**

<p>
  <img src="./screenshots/dark4.PNG" width="250" />
  <img src="./screenshots/dark5.PNG" width="250" />
  <img src="./screenshots/dark6.PNG" width="250" />
</p>

**Settings Stats** • **Settings Preferences** • **Reset App Warning**

<p>
  <img src="./screenshots/dark7.PNG" width="250" />
</p>

**Empty State**

---

### ☀️ Light Mode

<p>
  <img src="./screenshots/light1.PNG" width="250" />
  <img src="./screenshots/light2.PNG" width="250" />
  <img src="./screenshots/light3.PNG" width="250" />
</p>

**Todos Screen** • **Editing Todo** • **Delete Alert**

<p>
  <img src="./screenshots/light4.PNG" width="250" />
  <img src="./screenshots/light5.PNG" width="250" />
  <img src="./screenshots/light6.PNG" width="250" />
</p>

**Settings Stats** • **Settings Preferences** • **Reset App Warning**

---

## 🚀 What I Learned

While building this app, I practiced and learned a wide range of modern React Native techniques and development tools:

### 📱 React Native Fundamentals

- Building UI components using `View`, `Text`, `FlatList`, `TouchableOpacity`, `Switch`, `TextInput`, etc.
- Applying responsive styles using `StyleSheet` and custom styling hooks
- Working with `SafeAreaView` for safe layouts on iOS and Android

### 🎨 Theming & Styling

- Implementing light and dark themes with a custom `useTheme` hook
- Creating reusable gradient styles using **LinearGradient**
- Organizing all styles in modular style files (`.style.ts`)

### ⚡ State & Logic

- Managing local component state with `useState`
- Handling user interactions (add, edit, toggle, delete todos)
- Using `Alert` for confirmation dialogs

### 🧠 Data Layer (Convex)

- Fetching and mutating data using **Convex**
- Writing and using server-side functions: `getTodos`, `toggleTodo`, `updateTodo`, `deleteTodo`, `clearAllTodos`
- Understanding `useQuery` and `useMutation` hooks

### ⚙️ Architecture & Structure

- Organizing the app into screens and reusable components
- Following clean file structure: `components/`, `app/tabs/`, `hooks/`, `convex/`

---

## ⚡ Features

- Add, toggle, edit and delete todos
- Track progress stats (total, completed, active todos)
- Switch between dark and light mode
- Toggle notifications and auto sync preferences
- Reset all todos with a single tap (Danger Zone)
- Beautiful and consistent UI with gradient styles

---

## 📦 Tech Stack

- **React Native**
- **Expo**
- **Convex** (for backend & data storage)
- **Expo Router**
- **TypeScript**
- **Ionicons** (icons)
- **LinearGradient** (from `expo-linear-gradient`)

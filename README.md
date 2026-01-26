
# Forkify React App 🍳

A recipe search application built with React, TypeScript, and Vite. Search over 1,000,000 recipes, bookmark your favorites, and adjust servings!

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd 2-forkify-react-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```

   Then get your API key from [Forkify API](https://forkify-api.herokuapp.com/v2) and add it to your `.env` file:
   ```
   VITE_API_KEY=your_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🛠️ Built With

- [React](https://react.dev/) - UI Library
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Vite](https://vite.dev/) - Build Tool
- [Forkify API](https://forkify-api.herokuapp.com/v2) - Recipe Data

## 📝 License

This project is for learning purposes. Original design by [Jonas Schmedtmann](https://twitter.com/jonasschmedtman).

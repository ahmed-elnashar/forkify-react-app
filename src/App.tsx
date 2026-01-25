import HomePage from './pages/HomePage.tsx';
import RecipeContextProvider from './context/RecipeContext.tsx';
import { BrowserRouter } from 'react-router-dom';
function App() {
    return (
        <BrowserRouter>
            <RecipeContextProvider>
                <div className="container">
                    <HomePage />
                </div>
            </RecipeContextProvider>
        </BrowserRouter>
    );
}

export default App;

import HomePage from './pages/HomePage.tsx';
import RecipeContextProvider from './context/RecipeContext.tsx';
function App() {
    return (
        <RecipeContextProvider>
            <div className="container">
                <HomePage />
            </div>
        </RecipeContextProvider>
    );
}

export default App;

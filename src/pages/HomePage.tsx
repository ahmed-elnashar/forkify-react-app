import Header from '../components/layout/Header.tsx'
import SearchResultsSideBar from '../components/layout/SearchResultsSideBar.tsx'
import RecipeMainLayout from '../components/layout/RecipeMainLayout.tsx'
function HomePage() {
    return (
        <>
            <Header />
            <SearchResultsSideBar />
            <RecipeMainLayout />
        </>
    )
}
export default HomePage

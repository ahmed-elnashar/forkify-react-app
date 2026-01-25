# Forkify React App - Implementation Plan 🍳

## 📁 Current Structure Analysis & Recommendations

Your folder structure is well-organized! However, your **components need to be split** for better maintainability and single responsibility.

### Components to Split/Create

#### 1. Header.tsx → Split into:

- `Header.tsx` - Main header wrapper (keep)
- `SearchForm.tsx` - The search input and button (extract to `features/search/`)
- `BookmarksList.tsx` - The bookmarks dropdown (extract to `features/bookmarks/`)
- `BookmarkPreviewItem.tsx` - Individual bookmark item (extract to `features/bookmarks/`)

#### 2. SearchResultsSideBar.tsx → Split into:

- `SearchResultsSideBar.tsx` - Container only (keep in `layout/`)
- `SearchResultsList.tsx` - The `<ul>` with results (extract to `features/search/`)
- `RecipePreviewItem.tsx` - Individual recipe preview card (extract to `ui/`)
- `Pagination.tsx` - Pagination controls (extract to `ui/`)

#### 3. RecipeMainLayout.tsx → Split into:

- `RecipeContainer.tsx` - Main container with conditional rendering (keep in `layout/`)
- `RecipeDetails.tsx` - Full recipe view (extract to `features/recipe/`)
- `RecipeHeader.tsx` - Image and title (extract to `features/recipe/`)
- `RecipeInfo.tsx` - Time, servings, bookmark button (extract to `features/recipe/`)
- `ServingsControl.tsx` - +/- buttons for servings (extract to `features/recipe/`)
- `IngredientsList.tsx` - List of ingredients (extract to `features/recipe/`)
- `IngredientItem.tsx` - Single ingredient (extract to `features/recipe/`)
- `RecipeDirections.tsx` - Cooking directions section (extract to `features/recipe/`)

#### 4. Shared UI Components (in `ui/`):

- `Spinner.tsx` - Loading spinner
- `Message.tsx` - Info/welcome message
- `ErrorMessage.tsx` - Error display

---

## 🗂️ Suggested Final Folder Structure

```
src/
├── components/
│   ├── features/
│   │   ├── search/
│   │   │   ├── SearchForm.tsx
│   │   │   └── SearchResultsList.tsx
│   │   ├── recipe/
│   │   │   ├── RecipeDetails.tsx
│   │   │   ├── RecipeHeader.tsx
│   │   │   ├── RecipeInfo.tsx
│   │   │   ├── ServingsControl.tsx
│   │   │   ├── IngredientsList.tsx
│   │   │   ├── IngredientItem.tsx
│   │   │   └── RecipeDirections.tsx
│   │   └── bookmarks/
│   │       ├── BookmarksList.tsx
│   │       └── BookmarkPreviewItem.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── SearchResultsSideBar.tsx
│   │   └── RecipeContainer.tsx
│   └── ui/
│       ├── Spinner.tsx
│       ├── Message.tsx
│       ├── ErrorMessage.tsx
│       ├── Pagination.tsx
│       └── RecipePreviewItem.tsx
├── hooks/
│   ├── useRecipeSearch.ts
│   ├── useRecipe.ts
│   ├── useBookmarks.ts
│   └── useLocalStorage.ts
├── services/
│   └── api.ts
├── types/
│   ├── recipe.ts
│   └── search.ts
├── context/
│   └── RecipeContext.tsx
└── pages/
└── HomePage.tsx
```

---

## 📋 Implementation Plan (Step-by-Step)

### Phase 1: Setup Foundation

#### Step 1.1 - Define Types

Create TypeScript interfaces in `types/`:

- `Recipe` - full recipe data (id, title, publisher, image, servings, cookingTime, ingredients, etc.)
- `RecipePreview` - minimal recipe data for search results (id, title, publisher, image)
- `Ingredient` - ingredient structure (quantity, unit, description)
- `SearchResult` - search response structure

#### Step 1.2 - Create API Service

In `services/api.ts`:

- Create a function to search recipes by query
- Create a function to fetch a single recipe by ID
- Handle API errors gracefully
- API to use: Forkify API (same as the original project)

#### Step 1.3 - Install React Router

You'll need `react-router-dom` for URL-based navigation:

- This enables recipe ID in URL (`/#recipeId` or `/recipe/:id`)
- Allows users to share recipe links

---

### Phase 2: State Management Setup

#### Step 2.1 - Create Context

Create a `RecipeContext` to manage global state:

- `searchResults` - array of recipe previews
- `selectedRecipe` - currently displayed recipe
- `bookmarks` - array of bookmarked recipes
- `isLoading` - loading states
- `error` - error messages
- `servings` - current servings count (for adjustment)

#### Step 2.2 - Create Custom Hooks

- `useRecipeSearch` - handles search logic and results
- `useRecipe` - handles fetching and displaying single recipe
- `useBookmarks` - handles bookmark add/remove/check logic
- `useLocalStorage` - generic hook for persisting data

---

### Phase 3: Implement Core Features

#### Step 3.1 - Search Functionality

1. Extract `SearchForm.tsx` from Header
2. On form submit:
    - Get search query
    - Call API search function
    - Store results in context
    - Display results in sidebar

#### Step 3.2 - Display Search Results

1. Create `SearchResultsList.tsx`
2. Create `RecipePreviewItem.tsx` (reusable)
3. Map through search results and render preview items
4. Each item should be clickable

#### Step 3.3 - Recipe Selection & URL

1. When clicking a recipe preview:
    - Update URL with recipe ID (using hash: `#recipeId`)
    - Fetch full recipe details from API
    - Display in main recipe area
2. On page load:
    - Check if URL has recipe ID
    - If yes, fetch and display that recipe

#### Step 3.4 - Servings Adjustment

1. Create `ServingsControl.tsx`
2. Store current servings in state
3. On +/- click:
    - Update servings count
    - Recalculate all ingredient quantities proportionally

---

### Phase 4: Bookmarks Feature

#### Step 4.1 - Bookmark Logic

1. Create `useBookmarks` hook with:
    - `addBookmark(recipe)` function
    - `removeBookmark(recipeId)` function
    - `isBookmarked(recipeId)` function
    - `bookmarks` array

#### Step 4.2 - Local Storage Persistence

1. Create `useLocalStorage` hook
2. On bookmark change → save to localStorage
3. On app load → read bookmarks from localStorage

#### Step 4.3 - Bookmark UI

1. Recipe bookmark button should toggle bookmark state
2. Header bookmarks dropdown should show all bookmarks
3. Clicking bookmark item should navigate to that recipe

---

### Phase 5: Pagination (Optional but Recommended)

#### Step 5.1 - Implement Pagination

1. Create `Pagination.tsx` component
2. Store current page in state
3. Calculate which results to show based on page
4. Typically 10 results per page

---

## 🔄 Data Flow Summary

```
User searches → API call → Results stored in context → Sidebar displays results
↓
User clicks recipe → URL updates → API fetches full recipe → Main area displays
↓
User bookmarks → Context updates → localStorage saves → Header dropdown updates
↓
User adjusts servings → State updates → Ingredients recalculated → UI updates
```

---

## ✅ Implementation Checklist

| #   | Task                                | Phase | Done |
| --- | ----------------------------------- | ----- | ---- |
| 1   | Define TypeScript types             | 1     | ☐    |
| 2   | Create API service functions        | 1     | ☐    |
| 3   | Install & setup React Router        | 1     | ☐    |
| 4   | Create RecipeContext                | 2     | ☐    |
| 5   | Create custom hooks                 | 2     | ☐    |
| 6   | Split Header component              | 3     | ☐    |
| 7   | Implement search form               | 3     | ☐    |
| 8   | Split SearchResultsSideBar          | 3     | ☐    |
| 9   | Implement search results display    | 3     | ☐    |
| 10  | Split RecipeMainLayout              | 3     | ☐    |
| 11  | Implement recipe display            | 3     | ☐    |
| 12  | Implement URL sync (hash routing)   | 3     | ☐    |
| 13  | Implement servings adjustment       | 3     | ☐    |
| 14  | Create useLocalStorage hook         | 4     | ☐    |
| 15  | Create useBookmarks hook            | 4     | ☐    |
| 16  | Implement bookmark button in recipe | 4     | ☐    |
| 17  | Implement bookmarks dropdown        | 4     | ☐    |
| 18  | Create shared UI components         | 3-4   | ☐    |
| 19  | Implement pagination                | 5     | ☐    |

---

## 💡 Pro Tips

1. **Start with types** - Having good TypeScript types will guide your implementation
2. **Build bottom-up** - Create small UI components first, then compose them
3. **Test API calls early** - Make sure your API service works before building UI around it
4. **Handle all states** - Loading, error, empty, and success states for every async operation
5. **Use hash routing** - For recipe URLs, hash routing (`/#recipeId`) is simpler and doesn't require server configuration

---

## 📚 Resources

- Forkify API Documentation: https://forkify-api.herokuapp.com/v2
- React Router Documentation: https://reactrouter.com/
- React Context API: https://react.dev/reference/react/useContext

---

_Good luck with your implementation! 🚀_

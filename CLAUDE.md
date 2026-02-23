# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite development server
npm run build      # TypeScript check + production build
npm run lint       # Run ESLint
npm run preview    # Preview production build
```

There are no tests in this project.

## Architecture

React 19 + TypeScript + Vite app. Uses React Router DOM 7, Context API for state, and plain CSS (BEM) for styling — no external UI library or state management library.

### State Management

All global state lives in [src/context/RecipeContext.tsx](src/context/RecipeContext.tsx):

- Search results, selected recipe, bookmarks, loading/error states, current page
- Consumed via custom hooks, not accessed directly by components

### Custom Hooks (`src/hooks/`)

Business logic is encapsulated in hooks that read/write to RecipeContext:

- `useRecipeSearch` — fires API search, updates results in context
- `useRecipe` — fetches recipe detail by ID, handles servings scaling
- `useBookmarks` — add/remove/check bookmarks (persisted via `useLocalStorage`)
- `usePagination` — slice results to current page (10 per page, see `src/config/constants.ts`)
- `useLocalStorage` — generic localStorage read/write abstraction

### Data Flow

1. User types in `SearchForm` → `useRecipeSearch` calls `searchRecipes()` in `services/api.ts` → results stored in context
2. User clicks a result → URL hash changes (e.g. `#recipe-id`) → `useRecipe` calls `getRecipeByID()` → recipe detail stored in context
3. Servings change → `useRecipe` scales ingredient quantities proportionally

### Folder Structure

```
src/
├── components/
│   ├── features/       # Feature-specific: search/, recipe/
│   ├── layout/         # Page layout shells
│   └── ui/             # Reusable presentational components
├── context/            # RecipeContext (single context)
├── hooks/              # All custom hooks
├── services/           # api.ts — all Forkify API calls
├── types/              # recipe.ts, search.ts — API response shapes
└── config/             # constants.ts, env.ts (VITE_API_KEY)
```

### API

Base URL and API key configured in [src/config/env.ts](src/config/env.ts), read from `.env` as `VITE_API_KEY`. All calls go through [src/services/api.ts](src/services/api.ts).

### Code Style

- Prettier: 4-space indentation, single quotes, trailing commas (ES5)
- ESLint: TypeScript strict, React Hooks rules enforced
- TypeScript strict mode — no implicit any, no unused variables

## Add unit tests

- whenever you add any changes add unit tests and run and make sure the tests passes.

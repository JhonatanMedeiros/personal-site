
# Project Overview

This is a personal website built with Next.js, TypeScript, and Tailwind CSS. It serves as a portfolio for Jhonatan de Medeiros, a WEB Developer. The site features a home page with a profile picture, social media links, and a downloadable CV. It also includes a theme switcher for light and dark modes.

## Building and Running

To get the project up and running, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

3.  **Build for production:**
    ```bash
    npm run build
    ```

4.  **Start the production server:**
    ```bash
    npm run start
    ```

5.  **Lint the code:**
    ```bash
    npm run lint
    ```

## Development Conventions

*   **Styling:** The project uses Tailwind CSS for styling. Utility classes are preferred over custom CSS.
*   **Components:** The project is structured with a clear separation of components, pages, and hooks.
*   **State Management:** The project uses React's Context API for state management, as seen in `src/Context/ContextProvider.tsx`.
*   **Hooks:** Custom hooks are used to encapsulate logic, as seen in `src/Hooks/AllData.tsx` and `src/Hooks/UseData.tsx`.
*   **Theming:** The project supports light and dark themes, which are controlled by the `handleTheme` function in `src/Hooks/AllData.tsx`. The theme is stored in the browser's local storage.
*   **Routing:** The project uses Next.js's file-based routing system. The pages are located in the `src/pages` directory.
*   **Data:** The menu items are defined in the `AllData` hook.

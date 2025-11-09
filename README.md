
# Our Wedding Invitation

A modern, elegant, and responsive single-page wedding invitation website built with React and TypeScript. This project provides a beautiful digital experience for guests, complete with a countdown timer, event details, and a smart RSVP form.

## Features

- **Elegant Single-Page Design**: A seamless scrolling experience that feels like opening a physical wedding invitation.
- **Responsive Layout**: Looks beautiful on desktops, tablets, and mobile devices.
- **Countdown Timer**: Builds excitement by showing the time remaining until the big day.
- **Event Details**: Clearly displays information for the ceremony and reception, including dates, times, and map links.
- **Interactive RSVP Form**: Guests can easily confirm their attendance.
- **Custom Guest Links**: A generator to create personalized RSVP links (e.g., `your-site.com?guest=John%20Doe`), which pre-fills the guest's name in the form for a personal touch and quicker response.
- **Easy Customization**: All wedding details (names, dates, venue) are centralized in a single configuration file for easy updates.
- **Modern Tech Stack**: Built with React, TypeScript, and styled with Tailwind CSS for a clean, maintainable codebase.

## Tech Stack

- **React 18**: For building the user interface.
- **TypeScript**: For static typing and improved code quality.
- **Tailwind CSS**: For all styling, loaded via CDN.

## How to Customize

Customizing the invitation for your own wedding is incredibly simple!

1.  **Open `config.ts`**: This file contains all the essential details.
2.  **Edit the Information**:
    -   Update `couple` with your names.
    -   Change `weddingDate` to your wedding day and time.
    -   Update the `venue` object with your location's name, address, and a Google Maps link.
    -   Modify `ourStory` text to share your personal story.
3.  **Change Images**:
    -   The main background image is set in `components/Hero.tsx`.
    -   The "Our Story" image is set in `components/OurStory.tsx`.
    -   You can replace the placeholder `https://picsum.photos/...` URLs with links to your own photos.

That's it! Your personalized wedding website is ready.

## Local Development & Deployment

To run this project on your local machine, follow these steps:

1.  **Prerequisites**: Make sure you have [Node.js](https://nodejs.org/) (version 18 or higher) and a package manager like `npm` or `yarn` installed.

2.  **Project Setup**:
    *   Create a new project directory.
    *   Place all the files from this project into your new directory.
    *   Open your terminal in the project directory.

3.  **Install Dependencies**:
    *   If you don't have a `package.json`, create one with `npm init -y`.
    *   Install React, ReactDOM, and their TypeScript types:
        ```bash
        npm install react react-dom
        npm install -D @types/react @types/react-dom typescript
        ```
    *   To run the development server, it's recommended to use Vite:
        ```bash
        npm install -D vite @vitejs/plugin-react
        ```

4.  **Configure Vite**:
    *   Create a `vite.config.ts` file in your project root:
        ```typescript
        import { defineConfig } from 'vite'
        import react from '@vitejs/plugin-react'

        // https://vitejs.dev/config/
        export default defineConfig({
          plugins: [react()],
          server: {
            port: 3000 // Optional: Set a specific port
          }
        })
        ```

5.  **Run the Development Server**:
    ```bash
    npx vite
    ```
    The application should now be running at `http://localhost:3000`.

## Hosting / Deployment

This is a static React application, which can be deployed to any static site hosting service.

1.  **Build the Application**:
    Run the build command to generate a production-ready `dist` folder.
    ```bash
    npm run build
    ```
    (You may need to add `"build": "vite build"` to the `scripts` section of your `package.json`).

2.  **Deploy**:
    Deploy the contents of the `dist` folder to your preferred hosting provider. Popular choices include:
    - [Netlify](https://www.netlify.com/)
    - [Vercel](https://vercel.com/)
    - [GitHub Pages](https://pages.github.com/)

    Most of these services allow you to simply drag-and-drop the `dist` folder or connect your Git repository for automatic deployments.

## Customization

All the vendor, category, and "real wedding" data is mocked and located in:

`services/vendorService.ts`

You can easily modify the arrays in this file to change the content of the website. Update the vendor details, add new categories, or change images to fit your needs. Images are currently sourced from `https://picsum.photos`, which you can replace with your own image URLs.



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

Follow the same "Local Development Setup" and "Hosting / Deployment" instructions from the previous version of this README. The process remains unchanged: you can use a tool like Vite to run a local server and build the static files for deployment on any static hosting provider like Netlify, Vercel, or GitHub Pages.

# Tesla Clone

A high-fidelity UI clone of the Tesla website built with Next.js 16 (App Router), Framer Motion, and Tailwind CSS. This project leverages Server-Side Rendering (SSR) for performance and SEO, and uses a MySQL database for dynamic content.

## How to Run Locally

Follow these steps to set up and run the project on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [MySQL](https://www.mysql.com/) installed and running

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/hashinmohammed/tnp-assignment.git
    cd tnp-assignment
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env.local` file in the root directory and add your MySQL database credentials:

    ```env
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=your_password
    DB_NAME=tesla_clone
    ```

    _Note: Ensure you have created a database named `tesla_clone` (or whatever you specify) in your MySQL instance._

4.  **Run the Development Server:**

    ```bash
    npm run dev
    ```

5.  **Access the Application:**
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## High Level Design (HLD)

The application follows a modern **Client-Server Architecture** using the Next.js App Router.

- **Frontend**: Built with **Next.js** and **React**. It utilizes Server Components for initial data fetching and improved SEO, and Client Components for interactive UI elements (animations, carousels).
- **Backend**: Leverages **Next.js API Routes** to create a RESTful API layer.
- **Database**: **MySQL** database (hosted) stores vehicle data, ensuring content is dynamic and manageable. `mysql2` is used for efficient connection pooling.
- **State Management**: **Redux Toolkit** is used for managing global client-side state where necessary.
- **Deployment**: Deployed on **Vercel**, taking advantage of their edge network and optimization features.

## State Management

The application uses **Redux Toolkit** to manage global client-side state.

- **Store**: Configured in `src/store/index.js`.
- **Slices**:
  - **`uiSlice`**: Manages UI-related state, specifically the visibility of the side navigation menu (`isSideMenuOpen`). This allows for smooth toggling of the mobile/tablet sidebar from anywhere in the application.

## Low Level Design (LLD)

### Directory Structure

- `src/app`: Contains the App Router pages and API routes.
  - `src/app/api`: Backend endpoints.
  - `src/app/[vehicle]`: Dynamic routes for specific vehicle pages.
- `src/components`: Reusable UI components.
  - `modules`: Functional blocks like Banners, Specifications, and Media galleries.
  - `ui`: Generic atomic components (Buttons, etc.).
  - `common`: Shared layout components (Header, Footer).
- `src/lib`: Utility libraries, including the database connection pool (`db.js`).
- `src/store`: Redux store configuration and slices.

### Data Flow

1.  **User Request**: User visits a page (e.g., `/vehicles`).
2.  **Server Component**: The page (Server Component) requests data from the internal API or directly fetches using the DB utility (depending on implementation).
3.  **Database Query**: The backend queries the MySQL database for vehicle details (name, specs, image URLs).
4.  **Rendering**: Next.js renders the HTML on the server with the fetched data.
5.  **Hydration**: The HTML is sent to the browser. React "hydrates" the interactive parts (buttons, animations) using Client Components.

## API Routes

The project exposes several API endpoints in `src/app/api` to serve data to the frontend:

| Endpoint          | Method | Description                                                                        |
| :---------------- | :----- | :--------------------------------------------------------------------------------- |
| `/api/products`   | GET    | Fetches a list of all vehicles/products. Supports filtering by category or search. |
| `/api/cybertruck` | GET    | Specific endpoint for Cybertruck data.                                             |
| `/api/model3`     | GET    | Specific endpoint for Model 3 data.                                                |
| `/api/modely`     | GET    | Specific endpoint for Model Y data.                                                |
| `/api/modelx`     | GET    | Specific endpoint for Model X data.                                                |
| `/api/models`     | GET    | Specific endpoint for Model S data.                                                |
| `/api/solarpanel` | GET    | Data for Solar Panels.                                                             |
| `/api/solarroof`  | GET    | Data for Solar Roofs.                                                              |
| `/api/specs`      | GET    | Fetches detailed technical specifications for vehicles.                            |

## Packages Used

### Core Dependencies

- **`next`**: Framework for SSR and Routing.
- **`react` / `react-dom`**: UI Library.
- **`mysql2`**: MySQL client with Promise support and connection pooling.
- **`@reduxjs/toolkit` / `react-redux`**: State management.
- **`framer-motion`**: Library for complex animations and gestures.
- **`react-window`** / **`react-virtualized-auto-sizer`**: Utilities for list virtualization (performance optimization for long lists).

### Dev Dependencies

- **`tailwindcss`**: Utility-first CSS framework.
- **`postcss` / `autoprefixer`**: CSS processing tools.

## Optimization Techniques Used

1.  **Server-Side Rendering (SSR)**: By using Next.js App Router (Server Components), the initial HTML is generated on the server. This reduces the JavaScript bundle size sent to the client and significantly improves SEO and First Contentful Paint (FCP).
2.  **Image Optimization**: Usage of `next/image` component automatically serves images in modern formats (WebP/AVIF), lazy loads them, and resizes them based on the device viewport to prevent layout shifts (CLS).
3.  **Connection Pooling**: The `mysql2` library is configured to use a connection pool. This reuses database connections rather than creating a new handshake for every request, reducing latency and backend overhead.
4.  **Code Splitting**: Next.js automatically splits code by route. Components like `VideoBanner` are loaded only when needed.
5.  **Optimized Animations**: `framer-motion` handles animations efficiently outside the main React render loop where possible, ensuring smooth 60fps transitions.

---

_If you liked this project, consider giving it a star!_

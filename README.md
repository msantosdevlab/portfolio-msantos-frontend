# Portfolio MSANTOS - Frontend

## Description
This repository contains the source code for the frontend of my professional portfolio, built with Next.js. The project's goal is to professionally showcase my skills and developed projects, providing a smooth and modern experience for visitors.  

The application follows a modular structure, using reusable components and optimized styling to ensure maintainability and scalability. Additionally, it is integrated with a [backend API](https://github.com/msantosdevlab/portfolio_msantos_backend), enabling dynamic updates to the displayed content.  

## Technologies Used
- **Next.js** - React framework for web applications.  
- **React.js** - Library for building user interfaces.  
- **Tailwind CSS** - Modern and efficient styling.  
- **Material-UI (MUI)** - Component library for styling.  
- **AOS (Animate On Scroll)** - Library for scroll animations.  
- **Axios** - HTTP client for API consumption.  
- **Lucide React** - Icon set for React.  
- **SWR** - React Hook for efficient data fetching.  
- **DOMPurify** - Sanitizes HTML to prevent XSS attacks.  
- **HTML React Parser** - Converts HTML into React components.

## Project Structure  
The project is organized as follows: 

```
portfolio-msantos-frontend/
portfolio-msantos-frontend/
├── public/             # Static files
├── src/
│   ├── app/            # Main application structure
│   │   ├── assets/     # Visual resources and styles
│   │   │   ├── css/    # Global CSS files
│   │   │   ├── images/ # Images used in the application
│   │   ├── components/ # Structural components
│   │   │   ├── contact/
│   │   │   ├── footer/
│   │   │   ├── introduction/
│   │   │   ├── linkedinprofile/
│   │   │   ├── navbar/
│   │   │   ├── projects/
│   │   │   ├── LanguageToggle.js
│   │   │   ├── ThemeToggle.js
│   │   ├── layout.js   # Main layout
│   │   ├── page.js     # Home page
│   ├── hooks/          # Custom hooks
│   │   ├── useFetchData.js
│   ├── pages/
│   │   ├── api/
│   │   │   ├── proxy.js
├── .gitignore          # Files and directories ignored by Git
├── jsconfig.json       # JavaScript configuration
├── next.config.mjs     # Next.js configuration
├── package.json        # Project dependencies and scripts
├── postcss.config.mjs  # PostCSS configuration
├── tailwind.config.mjs # Tailwind CSS configuration
└── README.md           # Project documentation
```


## Installation & Running

### Prerequisites

Make sure you have installed:

- **Node.js** (recommended version: 18+)
- **npm** or **yarn**

### Steps to run the project locally:

```sh
# Clone the repository
git clone https://github.com/your-username/portfolio-frontend.git
cd portfolio-frontend

# Install dependencies
npm install  # or yarn install

# Create the environment variables file
cp .env.example .env.local
# Configure the necessary variables in .env.local

# Run the project in development mode
npm run dev  # or yarn dev

```
### Steps to run the project locally:
You need to create a .env file in the root of the project with the following variables:
```sh
# Public API for chat widget (example: Tawk.to)
NEXT_PUBLIC_API_TAWK=

# Base URL for images (example: Cloud storage or CDN)
NEXT_PUBLIC_IMAGE=

# Private API key for internal requests
API_KEY=

# Backend API base URL
API_URL=

```

The application will be available at **[http://localhost:3000](http://localhost:3000)**.

**Feel free to review and suggest improvements!** :relaxed:
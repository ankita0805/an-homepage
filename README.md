# Ankita Nayak - Academic Homepage

This is the source code for Dr. Ankita Nayak's professional academic website.

**Live Site**: https://ankita0805.github.io/an-homepage/

## Project Setup

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Local Development

```sh
# Clone the repository
git clone https://github.com/ankita0805/an-homepage.git

# Navigate to the project directory
cd an-homepage

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:8080`

## Technologies Used

This project is built with:

- **Vite** - Build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React 18** - UI framework
- **React Router v6** - Client-side routing
- **shadcn/ui** - Component library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions.

### Automatic Deployment

Every push to the `main` branch triggers a GitHub Actions workflow that:
1. Builds the Vite project
2. Deploys the `dist` folder to GitHub Pages

You can monitor deployments at: https://github.com/ankita0805/an-homepage/actions

### Manual Build

To build the project locally:

```sh
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
├── src/
│   ├── assets/          # Images and static files
│   ├── components/      # Reusable React components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── Header.tsx  # Navigation header
│   │   ├── Footer.tsx  # Site footer
│   │   └── SideNav.tsx # Side navigation for long pages
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── Research.tsx
│   │   ├── Publications.tsx
│   │   ├── Patents.tsx
│   │   ├── Teaching.tsx
│   │   └── CV.tsx
│   ├── App.tsx         # Main app component with routing
│   └── main.tsx        # Application entry point
├── public/             # Static assets
└── index.html          # HTML template

```

## Making Updates

### Content Updates

- **Home page**: Edit `src/pages/Home.tsx`
- **Research**: Edit `src/pages/Research.tsx`
- **Publications**: Edit `src/pages/Publications.tsx`
- **Patents**: Edit `src/pages/Patents.tsx`
- **Teaching**: Edit `src/pages/Teaching.tsx`
- **CV**: Edit `src/pages/CV.tsx`

### Profile Photo

Replace `src/assets/headshot.jpg` with your new photo.

### Styling

- Global styles: `src/index.css`
- Tailwind configuration: `tailwind.config.ts`
- Component styles: Inline Tailwind classes

## License

© 2025 Ankita Nayak. All rights reserved.

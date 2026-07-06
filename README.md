# FlowTask

A modern React application with a responsive SaaS navbar built with Vite and Tailwind CSS.
https://myflowtask.vercel.app/

## Features

- ✨ Responsive SaaS navigation bar with FlowTask branding
- 📱 Mobile hamburger menu
- 🎨 Modern, clean design with Tailwind CSS
- ⚡ Fast development with Vite
- 🔄 Sticky navbar on scroll with smooth transitions

## Prerequisites

Before running this project, make sure you have [Node.js](https://nodejs.org/) installed (version 18 or higher recommended).

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173` to see the application.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build

## Project Structure

```
1-FlowTask/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Responsive navbar component
│   │   ├── Breadcrumbs.jsx      # Navigation breadcrumbs
│   │   ├── Hero.jsx             # Landing page hero section
│   │   ├── Features.jsx         # Features showcase
│   │   ├── Pricing.jsx          # Pricing plans
│   │   ├── Testimonials.jsx     # Customer testimonials
│   │   ├── FAQ.jsx              # FAQ accordion
│   │   ├── CTA.jsx              # Call-to-action section
│   │   ├── Skeletons.jsx        # Loading skeleton components
│   │   └── EmptyState.jsx       # Empty state UI components
│   ├── pages/
│   │   ├── Home.jsx             # Landing page
│   │   ├── GetStarted.jsx       # Onboarding flow
│   │   ├── Support.jsx          # Support hub
│   │   ├── HelpCenter.jsx       # Help center articles
│   │   ├── Documentation.jsx    # API documentation
│   │   ├── Contact.jsx          # Contact form
│   │   ├── SystemStatus.jsx     # Service status page
│   │   └── NotFound.jsx         # 404 page
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles with Tailwind
├── index.html               # HTML template
├── package.json             # Project dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── postcss.config.js        # PostCSS configuration
```

## Navbar Features

- **Logo:** FlowTask branding in blue
- **Navigation Links:** Features, Pricing, Contact
- **CTA Button:** "Get Started" primary action button
- **Mobile Responsive:** Hamburger menu for mobile devices
- **Sticky Header:** Navbar stays visible on scroll with shadow effect
- **Smooth Animations:** Fade-in transitions and hover effects

## Technologies Used

- **React 18.3** - UI library
- **Vite 6.0** - Build tool and dev server
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **React Router 6.28** - Client-side routing
- **Framer Motion 11.11** - Animation library
- **Lucide React 0.460** - Icon library

## Component Library

### EmptyState Component

Display friendly empty state messages when there's no data to show.

**Usage:**

```javascript
import EmptyState from './components/EmptyState';

// Basic usage with variant
<EmptyState 
  variant="no-results" 
  buttonText="Try again" 
  onButtonClick={handleRetry}
/>

// Custom empty state
<EmptyState 
  title="No projects yet"
  description="Create your first project to start organizing your work."
  buttonText="Create Project"
  buttonLink="/projects/new"
/>

// Convenience exports
import { NoResultsEmptyState, NoDataEmptyState } from './components/EmptyState';

<NoResultsEmptyState buttonText="Clear filters" onButtonClick={clearFilters} />
```

**Available variants:**
- `no-results` - Search returned no matches
- `no-data` - Empty list or table
- `getting-started` - First-time user experience
- `no-notifications` - No new notifications
- `no-tasks` - No tasks assigned
- `no-users` - No team members
- `no-documents` - No files uploaded
- `error` - Error state

### Skeleton Components

Show loading placeholders while content loads.

```javascript
import SkeletonCard, { SkeletonAvatar, SkeletonTextLines } from './components/Skeletons';

<SkeletonCard withAvatar={true} lines={4} />
<SkeletonAvatar size={12} />
<SkeletonTextLines lines={3} />
```

## Customization

### Changing Colors

Edit [tailwind.config.js](tailwind.config.js) to customize the color scheme or modify the classes in [Navbar.jsx](src/components/Navbar.jsx).

### Adding Navigation Links

Edit the `navLinks` array in [Navbar.jsx](src/components/Navbar.jsx):

```javascript
const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
  // Add more links here
];
```

## License

MIT

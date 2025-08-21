# Autio MVP

A React-based car searching and lifestyle recommendation application with an AI-powered search engine.

## Features

- **Home_1**: Main car search interface with AI-powered recommendations
- **Home_2**: Lifestyle-based car selection interface
- Interactive slide bar for user preference adjustment
- Responsive design with custom Fieldstones font
- Modern UI components built with Tailwind CSS

## Pages

### Home_1
- Header with search functionality
- Hero text with lifestyle integration
- "About This Tool" information section
- Interactive progress bar for knowledge level selection
- Background image with blur overlay

### Home_2
- Lifestyle-based car selection
- Beach day, Jeep, and palm trees lifestyle cards
- Interactive input area for car preferences
- Right sidebar with lifestyle guidance

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Custom Fieldstones font family
- SVG assets for UI elements

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── assets/
│   ├── home_1/          # Assets for Home_1 page
│   ├── home_2/          # Assets for Home_2 page
│   └── fonts/           # Custom font files
├── components/           # UI components
├── styles/              # Global styles
└── index.tsx            # Main application entry point
```

## Development

The application uses a simple routing system based on URL paths:
- `/` or `/home_1` → Home_1 page
- `/home_2` → Home_2 page

## Font

The application uses the custom Fieldstones font family for consistent typography across all text elements.


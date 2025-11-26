# useState Sample Project

A sample project demonstrating React's `useState` hook with Storybook-based component development and testing.

## Purpose

This project serves as a practical example of:
- Implementing sample code using React's `useState` hook
- Testing components with Storybook and automated interaction tests

## Features

- **Simple Counter Component**: A basic counter demonstrating `useState` functionality with increment/decrement buttons
- **Storybook Integration**: Interactive component development environment
- **Automated Testing**: Interaction tests using Vitest with Storybook's test addon
- **Accessibility Testing**: Built-in a11y checks with Storybook addon

## Tech Stack

- **React**: 19.2.0
- **TypeScript**: 5.9.3
- **Vite**: 7.2.4
- **Storybook**: 10.0.8
- **Vitest**: 4.0.14
- **Playwright**: 1.57.0

## Getting Started

### Prerequisites

- Node.js (recommended: latest LTS version)
- npm or yarn

### Installation

```bash
npm install
```

## Available Commands

### Development

```bash
# Start Vite development server
npm run dev
```

Visit `http://localhost:5173` to see the counter component in action.

### Storybook

```bash
# Run Storybook development server
npm run storybook
```

Visit `http://localhost:6006` to explore components in Storybook.

### Testing

```bash
# Run Storybook interaction tests with Vitest
npm run test:storybook
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Build Storybook for deployment
npm run build-storybook
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Project Structure

```
use-state/
├── .storybook/           # Storybook configuration
│   ├── main.ts           # Main Storybook config
│   ├── preview.ts        # Preview settings
│   └── vitest.setup.ts   # Vitest integration setup
├── src/
│   ├── App.tsx           # Counter component using useState
│   ├── App.stories.tsx   # Storybook stories with interaction tests
│   └── main.tsx          # React entry point
├── index.html            # HTML entry point
├── vite.config.ts        # Vite and Vitest configuration
└── package.json          # Dependencies and scripts
```

## Development Guide

### The Counter Component

The main component (`src/App.tsx`) demonstrates `useState` with a simple counter:

- Uses `useState` to manage counter state
- Implements increment and decrement handlers
- Uses functional state updates for safe state management

### Creating Stories

Stories are defined in `src/App.stories.tsx` and include:

- **Default Story**: Basic rendering of the component
- **InteractiveFlow Story**: Automated interaction tests that:
  - Verify initial state
  - Simulate button clicks
  - Assert expected state changes

### Writing Tests

The project uses Storybook's `play` function for interaction testing:

```typescript
play: async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  // Find elements
  const increaseButton = canvas.getByText('+')

  // Simulate interactions
  await userEvent.click(increaseButton)

  // Assert expectations
  await expect(canvas.getByText('1')).toBeInTheDocument()
}
```

Tests run automatically in Storybook's UI and can be executed via CLI using `npm run test:storybook`.

## License

MIT

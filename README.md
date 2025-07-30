# Frontend Intern Workshop

*This readme was generated automatically.*

A modern Next.js project set up with TypeScript, Tailwind CSS, and essential development tools.

## Features

- **Next.js 14** with App Router and Turbopack for fast development
- **TypeScript** for type safety
- **Tailwind CSS** with typography plugin for styling
- **Storybook** for component development and documentation
- **Vitest** for unit testing with coverage reporting
- **Biome** for linting and code formatting
- **Headless UI** for accessible React components
- **Valibot** for type-safe data validation
- **HLS.js** for video streaming support

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended package manager)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd frontend-intern-workshop
```

2. Install dependencies:
```bash
pnpm install
```

### Development

Start the development server:
```bash
pnpm dev
```

Open [http://localhost:8000](http://localhost:8000) to view the application.

### Storybook

Run Storybook for component development:
```bash
pnpm sb
```

Open [http://localhost:6006](http://localhost:6006) to view the component library.

### Testing

Run the test suite:
```bash
pnpm test
```

Run tests in watch mode with coverage:
```bash
pnpm vi
```

### Code Quality

Check code formatting and types:
```bash
pnpm check
```

Format code automatically:
```bash
pnpm fmt
```

## Project Structure

```
src/
  app/                 # Next.js App Router pages
  components/          # Reusable React components
  test/               # Test setup and utilities
.storybook/           # Storybook configuration
```

## Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm test` - Run tests
- `pnpm test.coverage` - Run tests with coverage
- `pnpm vi` - Run tests in watch mode with UI
- `pnpm sb` - Start Storybook
- `pnpm check` - Check formatting and types
- `pnpm fmt` - Format code

## Technologies

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Headless UI
- **Testing**: Vitest + Testing Library
- **Documentation**: Storybook
- **Code Quality**: Biome (ESLint + Prettier replacement)
- **Validation**: Valibot
- **Media**: HLS.js for video streaming

## License

This project is private and for educational purposes.

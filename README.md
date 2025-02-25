# OpenWatch Web

A modern web interface for OpenWatch - an open source alternative to JustWatch that helps you find where movies are streaming.

## Features

- 🔍 Search and browse movies with a clean, intuitive interface
- 🌐 View streaming availability across different services
- 🌍 Country-specific streaming information
- 🎯 Filter results by streaming service
- 📱 Responsive design for mobile and desktop

## Tech Stack

- [React](https://reactjs.org/) - Frontend framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React Query](https://tanstack.com/query/latest) - Data fetching

## Getting Started

### Prerequisites

- Node.js 22+
- pnpm
- OpenWatch API running locally or accessible URL

### Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

### Development

Start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

### Building for Production

Build the application:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm start
```

## Related Projects

- [OpenWatch API](https://github.com/tracktr/openwatch-api) - Backend API service

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

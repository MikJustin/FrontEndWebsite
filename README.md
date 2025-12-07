# 4mik.com Frontend

This is the consumer-facing website for 4mik.com, built with [Next.js](https://nextjs.org) and TypeScript.

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm (comes with Node.js)

### Installation

First, install the dependencies:

```bash
npm install
```

### Development Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

### Building for Production

To create a production build:

```bash
npm run build
```

To run the production build locally:

```bash
npm start
```

### Linting

To run ESLint:

```bash
npm run lint
```

## Project Structure

- `/src/app` - Next.js App Router pages and layouts
- `/public` - Static assets (images, fonts, etc.)
- `/src` - Source code directory

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Linting**: ESLint with Next.js config

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## CI/CD Pipeline

This project includes a GitHub Actions CI/CD pipeline that automatically:

- **Lints** code on every push and pull request
- **Builds** the application to verify no build errors
- **Creates Docker image** when code is pushed to the `main` branch

### Pipeline Jobs

1. **Lint**: Runs ESLint to check code quality
2. **Build**: Compiles the Next.js application and uploads build artifacts
3. **Docker**: Builds a production-ready Docker image (main branch only)

### Running in Docker

To build and run the application using Docker:

```bash
# Build the Docker image
docker build -t fourmik-frontend .

# Run the container
docker run -p 3000:3000 fourmik-frontend
```

The Docker image uses a multi-stage build to create an optimized production image.

## Deployment

This site will be hosted at [4mik.com](https://4mik.com).

The application is configured with Next.js standalone output mode for efficient deployment.

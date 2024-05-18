# e-chat-fe

A Next.js project with TypeScript, Husky, Prettier, ESLint, Jest, and Sass setup.

## Requirements

- Node.js 22.X

## Getting Started

### Installation

1. Clone the repository:

```sh
git clone https://github.com/BielowAlex/nextjs-example.git
cd nextjs-example
```
Install dependencies:
```sh
npm install
```
Running the Development Server
Start the development server:

```sh
npm run dev
```
Open http://localhost:3000 with your browser to see the result.

Building for Production
Build the project for production:

```sh
npm run build
```
Start the production server:

```sh
npm start
```
### Linting
To lint the project using ESLint:

```sh
npm run lint
```
### Formatting
To format the project using Prettier:

```sh
npm run prettier
```
 ### Testing
To run the tests with Jest:

```sh
npm test
```
To run the tests in watch mode:

```sh
npm run test:watch
```
### Husky and lint-staged
Husky is used to manage git hooks, and lint-staged is used to run linters on staged files.

### Install Husky hooks:

```sh
npm run prepare
```
### Project Structure
* pages/ - Next.js pages.
* components/ - React components.
* styles/ - Sass styles.

### Custom Scripts
* dev: Runs the Next.js development server.
* build: Builds the application for production.
* start: Starts the production server.
* lint: Runs ESLint to lint the project.
* prettier: Runs Prettier to format the project.
* test: Runs Jest to test the project.
* test:watch: Runs Jest in watch mode.
* prepare: Sets up Husky hooks.
## Configuration
### TypeScript
TypeScript is used for type checking. The configuration can be found in tsconfig.json.

### ESLint
ESLint is used for linting JavaScript and TypeScript files. The configuration can be found in .eslintrc.json.

### Prettier
Prettier is used for code formatting. The configuration can be found in .prettierrc.

### Jest
Jest is used for testing. The configuration can be found in jest.config.js.

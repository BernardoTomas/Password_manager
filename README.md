# Password Manager

This is a password manager application built with React and TypeScript. It allows users to securely store and manage their passwords.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Project Structure](#project-structure)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/password-manager.git
    ```
2. Navigate to the project directory:
    ```sh
    cd password-manager
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

To start the development server, run:
```sh
npm run dev
```

To build the project for production, run:
```sh
npm run build
```

To preview the production build, run: 
```sh
npm run preview
```

To run tests, run:
```sh
npm run test
```

## Scripts

- ```dev```: Starts the development server.
- ```build```: Builds the project for production.
- ```preview```: Previews the production build.
- ```test```: Runs the tests.
- ```lint```: Lints the TypeScript and JavaScript files.
- ```lint:styles```: Lints the CSS files.

## Project Structure

- .env
- .eslintignore
- [.eslintrc.json](http://_vscodecontentref_/1)
- .gitignore
- .stylelintignore
- [.stylelintrc.json](http://_vscodecontentref_/2)
- [index.html](http://_vscodecontentref_/3)
- [package.json](http://_vscodecontentref_/4)
- public/
  - manifest.json
  - robots.txt
- [README.md](http://_vscodecontentref_/5)
- [setupTests.ts](http://_vscodecontentref_/6)
- src/
  - App.css
  - App.tsx
  - components/
    - Footer.css
    - Footer.tsx
    - Form.css
    - Form.tsx
    - Header.css
    - Header.tsx
    - PasswordLi.css
    - PasswordLi.tsx
  - images/
  - index.css
  - main.tsx
  - types/
    - types.ts
- vite-env.d.ts
- [tsconfig.json](http://_vscodecontentref_/7)
- [tsconfig.node.json](http://_vscodecontentref_/8)
- [vite.config.ts](http://_vscodecontentref_/9)

- ```src/```: Contains the source code of the application.
- ```public/```: Contains static files.
- ```setupTests.ts```: Configuration for setting up tests.
- ```tsconfig.json```: TypeScript configuration file.
- ```vite.config.ts```: Vite configuration file.

## Acknowledgements
This project was developed as part of the Trybe curriculum. All files and configurations except the src and public directory were provided by Trybe.

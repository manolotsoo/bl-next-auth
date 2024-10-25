# Next.js Authentication Boilerplate

This is a boilerplate for a Next.js application with authentication using [NextAuth.js](https://next-auth.js.org/). The boilerplate supports authentication via Google and GitHub.


## Features
* Authentication with NextAuth.js
* OAuth support for Google and GitHub
* Built with Next.js and React
* Environment variables for API keys and secrets

## Technologies Used
* [Next.js](https://nextjs.org)
* [NextAuth.js](https://next-auth.js.org/) (Google, GitHub OAuth)
* [React](https://react.dev/)

## Getting Started
### Prerequisites
To use this project, you need the following tools installed:

Node.js (version 14 or later)
npm or pnpm, or yarn

### Installation
1. Clone the repository:
```bash
git clone https://github.com/manolotsoo/bl-next-auth.git
```

2. Navigate into the directory:
```bash
cd bl-next-auth
```

3. Install the dependencies:

If you are using pnpm:
```bash
pnpm install
```
If you are using npm:
```bash
npm install
```
If you are using yarn:
```bash
yarn install
```

### Configuration
1. Set up environment variables:
Create a .env.local file at the root of the project with the following variables:

```bash
# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# GitHub OAuth
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret

# NextAuth secret (generate a strong secret)
NEXTAUTH_SECRET=your-secret

```

2. Set up OAuth providers (Google and GitHub):
* Follow the instructions to create OAuth credentials for Google and GitHub.
* Add the generated client ID and secret to the .env.local file.

3. Install the dependencies:

If you are using pnpm:
```bash
pnpm install
```
If you are using npm:
```bash
npm install
```
If you are using yarn:
```bash
yarn install
```

### Running the Project
1. Start the development server:

```bash
npm run dev
```
Or with pnpm
```bash
pnpm run dev
```
Or with yarn
```bash
yarn dev
```

2. Access the application:
The application should now be running on http://localhost:3000.

### Authentication Routes
NextAuth.js automatically sets up the following routes:

* /api/auth/signin - Sign in page
* /api/auth/signout - Sign out page
* /api/auth/session - Session endpoint to get the current user session
* /api/auth/callback/google - Callback route for Google OAuth
* /api/auth/callback/github - Callback route for GitHub OAuth

### Customization Routes

* To customize the login page, modify the pages/auth/signin.tsx file.
* You can add more providers by modifying the next-auth configuration in pages/api/auth/[...nextauth].ts.

### Next Steps

* Add your custom components, pages, and other features to build out your application.
* Modify the UI of the sign-in page to match your design.

## License
This project is licensed under the MIT License.

[MIT](https://choosealicense.com/licenses/mit/)
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Setting Up The Project from GitHub to Local Machine

This guide will walk you through the steps to set up the project from GitHub to your local machine.

## Prerequisites
Ensure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/) (LTS recommended)
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/) or any preferred code editor
- [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (included with Node.js installation)

## Step 1: Clone the Repository
1. Open a terminal or command prompt.
2. Navigate to the directory where you want to store the project:
   ```sh
   cd path/to/your/directory
   ```
3. Clone the GitHub repository using:
   ```sh
   git clone https://github.com/slaggala/theconnect-next.git
   ```
4. Move into the project directory:
   ```sh
   cd theconnect-next
   ```

## Step 2: Install Dependencies
Run the following command inside the project folder to install dependencies:
```sh
npm install
# or if using yarn
yarn install
```

## Step 3: Start the Development Server
Run the following command to start your Next.js development server:
```sh
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Step 4: Open the App in a Browser
By default, the Next.js app runs on port `3000`. Open a browser and navigate to:
```
http://localhost:3000
```

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.


## Learn More
To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.
- [Next.js GitHub Repository](https://github.com/vercel/next.js) - Your feedback and contributions are welcome.


## Conclusion
You have successfully set up the project from GitHub to your local machine. Happy coding!



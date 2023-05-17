# Installing and Running a Basic Template React Repo with npm

In this tutorial, we'll walk through the steps to install and run a basic template React repository that you've cloned from GitHub. We'll be using npm (Node Package Manager) to manage our project's dependencies and scripts.

## Prerequisites

Before getting started, make sure you have the following software installed on your system:

- Node.js (including npm)
- Git (for cloning the repository)

## Step 1: Clone the Repository

Open your terminal or command prompt and navigate to the directory where you want to store your project. Then, use the `git clone` command to clone the repository.

```bash
git clone https://github.com/hackathon-ssias/front
```

## Step 2: Navigate to the Project Directory

Once the repository is cloned, navigate to the project directory using the cd command. For example:

```bash
cd front
```

## Step 3: Install Dependencies

Before running the project, we need to install its dependencies. In the project directory, run the following command:

```bash
npm install
```

This command will read the package.json file in the project directory and install all the dependencies specified under the dependencies section.

## Step 4: Start the Development Server

After installing the dependencies, we can now start the development server. In the project directory, run the following command:

```bash
npm start
```

This command will start the development server and launch your React application. You can access it by opening your web browser and navigating to http://localhost:5000

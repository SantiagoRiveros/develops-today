# develops-today

# Welcome to My Technical Test

Hi! Welcome to my technical test repository. Here's how to get started:

## Cloning the Repository

First, clone the repository to your PC or laptop by running the following command:

```bash
git clone https://github.com/SantiagoRiveros/develops-today.git
```

Once the repository is cloned, you'll find two folders:

- **client**: Contains the frontend built with Vite, React, and JavaScript.
- **api**: Contains the backend built with ExpressJS and Node.js.

## Setting Up the Project

To proceed, open two terminal windows:

- One terminal for the `client` folder.
- Another terminal for the `api` folder.

### Backend Setup

1. Navigate to the `api` folder in your terminal.
2. Install the necessary dependencies by running:
   ```bash
   npm i express
   ```
3. Start the backend server by running:
   ```bash
   npm run dev
   ```

That's it! The backend is now up and running.

### Frontend Setup

1. Navigate to the `client` folder in your terminal.
2. Create a new file named `.env` and add the following content:
   ```env
   VITE_API_BASE_URL=http://localhost:3001/api
   ```
3. Install the necessary dependencies by running:
   ```bash
   npm i
   ```

Now the frontend should be ready and running!

---

If you encounter any issues, feel free to reach out. Happy coding!

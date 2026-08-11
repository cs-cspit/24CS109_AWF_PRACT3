# AWF Practical 3

## Student Details

- **Name:** Kashyap Nasit
- **Enrollment No.:** 24CS109
- **Subject:** CSE304 - Full Stack Development
- **Practical:** Task 3

---

## Objective

The objective of this practical is to build a React + Vite web application that fetches and displays GitHub repositories from a GitHub profile. The project demonstrates component-based development, state management, API integration, and user-friendly UI design.

---

## Features

- Fetches GitHub repositories from the GitHub API
- Displays repository name, star count, and direct repository link
- Includes a search bar to filter repositories
- Shows a spinner while data is loading
- Handles errors gracefully with a retry option

---

## Technologies Used

- React.js
- Vite
- JavaScript (ES6)
- HTML5
- CSS3
- Node.js
- npm
- GitHub REST API

---

## Project Structure

```text
project/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ErrorMessage.jsx
│   │   ├── RepoCard.jsx
│   │   └── Spinner.jsx
│   ├── pages/
│   │   └── Projects.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/cs-cspit/24CS109_AWF_PRACT3.git
```

Move into the project directory:

```bash
cd 24CS109_AWF_PRACT3
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the application in your browser at:

```text
http://localhost:5173
```

---

## Output

The application successfully runs on the Vite development server and displays the GitHub repositories of the specified user with search and error-handling functionality.

---

## Author

**Kashyap Nasit**

CSE304 - Full Stack Development

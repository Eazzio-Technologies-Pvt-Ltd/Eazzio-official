# Eazzio Technologies Landing Website

This repository contains the official landing website for **Eazzio Technologies Pvt. Ltd.** It includes a modern, responsive React frontend showcasing the company's software products, and a Node.js backend to handle contact form submissions via email.

## 🚀 Features

### Frontend (React + Vite)
- **Modern Design**: Premium UI built with Vanilla CSS featuring smooth transitions, soft shadows, and a dynamic layout matching the brand's exact colors.
- **Responsive Navigation**: Mobile-friendly navbar and structured routing using `react-router-dom`.
- **Product Showcase**: Detailed pages for Eazzio Payroll, Eazzio Books, Eazzio Reminders, and Eazzio Telecaller.
- **Dynamic Contact Form**: Interactive form with frontend validation that securely connects to the backend API.

### Backend (Node.js + Express)
- **REST API**: Serves a `/api/contact` endpoint to securely receive inquiries from the frontend.
- **Email Integration**: Uses `nodemailer` to automatically forward contact form submissions to the company's designated email address.
- **Secure Configuration**: Uses `.env` variables to keep SMTP credentials hidden from the source code.

## 🛠️ Technology Stack

- **Frontend**: React.js, Vite, Vanilla CSS, Lucide React (Icons), React Router
- **Backend**: Node.js, Express.js, Nodemailer, CORS, Dotenv

## 📂 Project Structure

```
d:\Eazzio-official\
│
├── frontend/                 # React Application
│   ├── src/
│   │   ├── assets/           # Images and Logos (e.g., logo.png)
│   │   ├── components/       # Reusable UI components (Navbar, Footer, ProductCard)
│   │   ├── data/             # Static product data (products.js)
│   │   ├── pages/            # Page components (Home, About, Products, Contact)
│   │   ├── App.jsx           # Main routing component
│   │   ├── index.css         # Global design system & theme variables
│   │   └── main.jsx          # React entry point
│   └── package.json
│
└── backend/                  # Node.js API Server
    ├── controllers/          # Business logic for routes
    ├── routes/               # API route definitions
    ├── utils/                # Helper functions (e.g., sendEmail.js)
    ├── server.js             # Express application entry point
    ├── .env                  # Environment variables (SMTP settings)
    └── package.json
```

## ⚙️ Setup & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- An SMTP server/account (like Brevo, SendGrid, or Gmail App Passwords) for sending emails.

### 1. Backend Setup
Navigate to the backend directory:
```bash
cd backend
```
Install the required dependencies:
```bash
npm install
```
Configure your environment variables. Copy the example file and update it with your actual SMTP credentials:
```bash
cp .env.example .env
```
*(Open `.env` and fill in `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `FROM_EMAIL`, and `TO_EMAIL`)*

Start the backend server in development mode:
```bash
npm run dev
```
*The backend API will run on `http://localhost:5000`.*

### 2. Frontend Setup
Open a new terminal window and navigate to the frontend directory:
```bash
cd frontend
```
Install the required dependencies:
```bash
npm install
```
Start the frontend development server:
```bash
npm run dev
```
*The frontend website will run on `http://localhost:5173` (or similar port provided by Vite).*

## 📧 Testing the Contact Form
1. Ensure both the frontend and backend servers are running.
2. Navigate to the **Contact Us** page on the frontend.
3. Fill out the form and click "Send Message".
4. Check the backend terminal logs to confirm the email was sent, and verify the inbox of your `TO_EMAIL` address.

## 📄 License
Copyright © Eazzio Technologies Pvt. Ltd. All rights reserved.

# ☕ Cafe Management System

A Node.js and MySQL web application for managing cafe operations including orders, menu items, and inventory.

## ✨ Features

- **Order Management**: Create and track customer orders
- **Menu Management**: Add, edit, and categorize menu items
- **Inventory Tracking**: Monitor ingredient stock levels
- **User Authentication**: Secure login system for staff
- **Sales Dashboard**: View order history and reports

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MySQL (v5.7 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AmirouzZ/Cafe-managment-system_Node.js-MySQL.git
cd Cafe-managment-system_Node.js-MySQL
```

2. Install dependencies:
```bash
npm install
```

3. Set up MySQL database:
```bash
mysql -u root -p -e "CREATE DATABASE cafe_management;"
```

4. Configure environment variables:
```bash
cp .env.example .env
# Edit .env with your database credentials
```

5. Start the application:
```bash
npm start
```

6. Access the application at `http://localhost:3000`

## 📁 Project Structure

```
├── config/          # Database configuration
├── controllers/     # Route controllers
├── models/          # Database models
├── routes/          # Express routes
├── middlewares/     # Middlewares
└── app.js           # Main application file
```

**⭐ If you find this project useful, please give it a star!**

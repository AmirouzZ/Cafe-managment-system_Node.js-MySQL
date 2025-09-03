# ☕ Cafe Management System - Node.js & MySQL

A complete web-based management system for cafes and restaurants built with Node.js and MySQL.

## 🚀 Features

- **Order Management** - Create and track customer orders
- **Inventory Control** - Manage stock levels and ingredients
- **Menu Management** - Categorize and update menu items
- **User Authentication** - Role-based access control
- **Sales Reporting** - View sales data and analytics
- **Table Management** - Manage restaurant tables and reservations

## 📦 Installation

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

6. Access at: `http://localhost:3000`

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Template Engine:** EJS
- **Authentication:** Session-based
- **Styling:** CSS, Bootstrap

## 📁 Project Structure

```
/
├── config/          # Database configuration
├── controllers/     # Business logic
├── models/          # Data models
├── routes/          # Application routes
├── public/          # Static assets
├── views/           # EJS templates
├── middleware/      # Custom middleware
└── utils/           # Utility functions
```

## 🌟 Key Functionalities

- Real-time order processing
- Inventory management with low stock alerts
- Employee management system
- Sales reports and analytics
- Receipt generation
- Table occupancy tracking

## 📄 License

MIT License - feel free to use this project for learning or commercial purposes.

## 👤 Developer

**AmirouzZ** - [GitHub Profile](https://github.com/AmirouzZ)

---

**⭐ If you find this project useful, please give it a star on GitHub!**

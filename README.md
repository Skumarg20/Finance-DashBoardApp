# **Finance Dashboard App**

## **Overview**
The **Finance Dashboard App** is a modern financial management tool that enables users to track their income, expenses, and financial trends through interactive charts and visualizations. Built using cutting-edge web technologies, the app provides **real-time data updates, intuitive UI components, and detailed financial insights**.

## **Tech Stack**

### **Frontend**
- **Vite + React.js**: Fast and optimized frontend development.
- **Redux Toolkit**: Efficient state management for seamless data flow.
- **Recharts.js**: Beautiful and interactive data visualization.
- **Tailwind CSS (or Styled Components)**: Responsive and modern UI design.

### **Backend**
- **Node.js + Express.js**: Handles API requests and business logic.
- **MongoDB + Mongoose**: NoSQL database for financial transactions and user data.

## **Features**

### **2. Financial Data Management**
- Add, edit, and delete financial transactions.
- Categorize expenses and income sources.
- Track balances and spending trends.

### **3. Interactive Dashboard**
- **Dynamic charts** for financial analysis using Recharts.js.
- Monthly and yearly spending trends.
- Expense breakdown by category.

### **4. Real-Time Updates**
- Automatic data updates without refreshing.
- **Redux Toolkit** ensures smooth state synchronization.

### **5. Responsive UI**
- Works seamlessly on **desktop, tablet, and mobile** devices.

## **Installation and Setup**

### **1. Clone the repository**
```sh
git clone https://github.com/your-username/finance-dashboard.git
cd finance-dashboard
```

### **2. Install dependencies**
#### **Frontend**
```sh
cd client
npm install
```

#### **Backend**
```sh
cd server
npm install
```

### **3. Environment Variables**
Create a `.env` file in the `server` directory and add the following:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### **4. Run the Application**
#### **Backend**
```sh
cd server
npm start
```

#### **Frontend**
```sh
cd client
npm run dev
```

## **API Endpoints**
| Method | Endpoint          | Description |
|--------|------------------|-------------|
| GET    | /kpi/kpis | Get all Kpis |
| GET   | /product/products |  Get all products |
| GET   | /transaction/transactions|  Get all transactions |


## **Folder Structure**
```
finance-dashboard/
│-- client/       # Frontend (React + Vite)
│-- server/       # Backend (Node.js + Express)
│-- models/       # Mongoose Models
│-- routes/       # Express Routes
│-- controllers/  # Business Logic
│-- config/       # Database and JWT Config
│-- public/       # Static Assets
│-- .env          # Environment Variables
│-- README.md     # Documentation
```

## **Contributing**
Contributions are welcome! Feel free to fork the repository and submit a pull request.

## **License**
This project is licensed under the **MIT License**.

---

### **Contact**
If you have any questions, feel free to reach out:
- **Email**: sahnjeev.kumar12@gmail.com
- **GitHub**: [your-username](https://github.com/Skumarg20)
- **LinkedIn**: [your-profile](https://linkedin.com/in/skumarg20)

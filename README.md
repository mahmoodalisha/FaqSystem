# FAQ System

A **FAQ System** built using **Express.js** for the backend and **React.js** for the frontend. It allows users to view frequently asked questions and admins to manage FAQs efficiently. The backend uses Redis for caching and supports multilingual translations.

## Features
- **RESTful API** for FAQ management
- **Redis caching** for optimized performance
- **MongoDB storage** for FAQs
- **Multilingual support** (English, Hindi, Bengali)
- **React frontend** for user-friendly interactions

---

## Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)

### 1. Clone the repository
```sh
 git clone https://github.com/mahmoodalisha/FaqSystem.git
 cd faq-system
```

### 2. Backend Setup
```sh
 npm install
```

#### 3. Set up environment variables
Create a `.env` file and add:
```sh
PORT=8000
MONGO_URI=your_mongodb_connection_string
REDIS_HOST=localhost
REDIS_PORT=6379
```

#### 4. Start the Backend Server
```sh
 npm start
```

### 5. Frontend Setup
```sh
 cd frontend
 npm install
 npm start
```

---

## API Usage

### Base URL: `http://localhost:3000/api/faqs`

#### **Get All FAQs**
```http
GET /api/faqs
```
**Response:**
```json
[
  {
    "_id": "64a57b3e5",
    "question": "How do I reset my password?",
    "answer": "Go to settings and click on 'Reset Password'."
  }
]
```

#### **Create an FAQ (Admin only)**
```http
POST /api/faqs
```
**Request Body:**
```json
{
  "question": "How do I contact support?",
  "answer": "You can email us at support@example.com."
}
```



## Contribution Guidelines
- Fork the repository.
- Create a feature branch: `git checkout -b feature-name`.
- Commit changes: `git commit -m 'Add feature-name'`.
- Push to GitHub: `git push origin feature-name`.
- Open a Pull Request.



## Contact
If you have any questions, feel free to reach out!
- **GitHub**: [mahmoodalisha](https://github.com/mahmoodalisha)
- **Email**: mahmoodalisha35@gmail.com


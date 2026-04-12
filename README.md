# 📚 E-School Online Courses Data

This project provides a structured JSON dataset for an **E-School Online Learning Platform**. It includes detailed information about available courses such as pricing, instructors, duration, and images — ideal for frontend development, API simulation, or UI design.

---
## Live Demo : [Click Here](https://e-school-courese.netlify.app/)
---

## 🚀 Features

- 📖 12 Online Courses
- 👨‍🏫 Instructor Information
- 💰 Course Pricing
- ⏳ Duration & Start Dates
- 🪑 Available Seats
- 🖼️ Course Thumbnail Images
- 🛒 Buy Now Option (Boolean flag)

---

## 🧾 Data Structure

Each course object contains the following fields:

| Field            | Type    | Description                          |
|------------------|--------|--------------------------------------|
| id               | number | Unique course ID                     |
| courseName       | string | Name of the course                   |
| availableSeats   | number | Number of seats available            |
| classStarts      | string | Start date of the class              |
| buyNow           | boolean| Indicates purchase availability      |
| designation      | string | Level (Beginner/Intermediate/Advanced) |
| price            | number | Course price                         |
| instructor       | string | Name of the instructor               |
| duration         | string | Course duration (e.g., 6 weeks)      |
| image            | string | Course image URL                     |

---
## 💡 Use Cases

- ⚛️ React / Next.js UI development
- 🔌 Mock API for frontend testing
- 🎨 UI/UX design practice
- 📊 Data visualization projects
---
## 📌 Future Improvements

- ⭐ Add ratings and reviews
- 👥 Add enrolled students count
- 🔍 Search and filter functionality
- 🌐 Backend API integration
---

## 📦 Example Data

```json
{
  "id": 1,
  "courseName": "Introduction to English Literature",
  "availableSeats": 25,
  "classStarts": "2026-05-01",
  "buyNow": true,
  "designation": "Beginner",
  "price": 49,
  "instructor": "Dr. Sarah Ahmed",
  "duration": "6 weeks",
  "image": "https://source.unsplash.com/400x300/?literature,books"
}

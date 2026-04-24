# CMSC 100 – Web Programming: Final Project

**University of the Philippines Los Baños**
College of Arts and Sciences, Institute of Computer Science
2nd Semester, 2025–2026

---

## Project Theme: Farm-to-Table E-Commerce Website

"Farm-to-table" means a social movement emphasizing a direct link between consumers and farmers as the source of food. The task involves developing an e-commerce website that will be used by the **Department of Agriculture (DA)** to facilitate transactions between farmers and customers directly.

The DA will have the capability to compile a catalog of items for sale in the public market. The website must be intuitive, incorporating UI/UX design that represents both the agriculture sector and the e-commerce industry.

**Team size:** 4 members

---

## Technology Stack

| Layer    | Technology                        |
|----------|-----------------------------------|
| Frontend | React JS + Tailwind CSS           |
| Backend  | Node JS + Express JS              |
| Database | MongoDB                           |

---

## GitHub Guidelines

- Your lab instructor will create a GitHub Classroom assignment. Only **1 group member** should accept the assignment, then add groupmates as collaborators.
- Follow the standard commit message conventions shared in Google Classroom.
- **Minimum 5 significant GitHub commits per member.**
- Add a `README.md` outlining project features, screenshots, usage guidelines, and how to run.
- The final submitted project must be in a **single branch of a single repository**. Modules that are "working separately" or "not connected" will not be accepted.

---

## Functional Specifications

### 1. User Types and Accounts

#### Customers (Registered Users)
- Register using an email address (no OTP/verification required; username must be in email format).
- Upon sign-up, users are automatically assigned as **customer** users.
- Customers can make purchases from the shop.
- The general public cannot access the website unless registered.
- Customers can **login/logout**; authentication must be implemented.
- Customers **cannot** view the admin dashboard or any admin-exclusive routes/endpoints.

#### Department of Agriculture (Admin/Merchant)
- Has only **one pre-built user account** — no registration needed.
- Manages the entire catalog of items available in the public market.
- Oversees e-commerce management: user accounts, product listings, order fulfillment, and sales reports.

---

### 2. E-Commerce Management (Admin/Merchant)

#### a. Dashboard
- Render all management modules from a central dashboard.

#### b. User Account Management
- View the list of registered users and report the total count.

#### c. Product Listings
- Create and manage a product catalog with the following fields:

  | Field              | Details                                      |
  |--------------------|----------------------------------------------|
  | Product Name       | String                                       |
  | Product Type       | Crops or Poultry                             |
  | Product Price      | Variable (Float)                             |
  | Product Description| String                                       |
  | Quantity           | Variable (Int); decreases upon order confirm |

- List products in **ascending or descending** order by: Name, Type, Price, or Quantity.

#### d. Order Fulfillment
- After a customer creates an order, the merchant must **confirm** it.
- Once confirmed, the order is final and ready for delivery.

#### e. Sales Reports
- List of products sold with sales income per product and total sales amount.
- Filter sales summary by: **Weekly**, **Monthly**, and **Annual**.

---

### 3. Shop (Customer Users)

#### a. Product Listings
- List products in **ascending or descending** order by: Name, Type, Price, or Quantity.

#### b. Shopping Cart
- Delete items from the cart.
- Display total item count in the cart.
- Display total price of items in the cart.

#### c. Order Management
- Orders confirm items purchased from the shopping cart.
- **Default and only payment mode: Cash-on-Delivery.**
- Customers may **cancel an order** only if it has not yet been confirmed by the merchant.

---

## Database Structure

### User
| Field       | Type   | Notes    |
|-------------|--------|----------|
| First Name  | String |          |
| Middle Name | String | Optional |
| Last Name   | String |          |
| User Type   | String |          |
| Email       | String |          |
| Password    | String |          |

### Products
| Field               | Type   | Notes                  |
|---------------------|--------|------------------------|
| Product ID          | String |                        |
| Product Name        | String |                        |
| Product Description | String |                        |
| Product Type        | Int    | 1 = Crop / 2 = Poultry |
| Product Quantity    | Int    |                        |
| Price               | Float  |                        |

### Order Transaction
| Field          | Type   | Notes                                                     |
|----------------|--------|-----------------------------------------------------------|
| Transaction ID | String | ID for each record                                        |
| Product ID     | String | Reference to product                                      |
| Order Quantity | Int    | Decreases product quantity upon confirmation              |
| Order Status   | Int    | 0 = Pending / 1 = Completed / 2 = Canceled               |
| Email          | String | Reference to user                                         |
| Date Ordered   | Date   |                                                           |
| Time           | Time   |                                                           |

---

## Project Milestones

| Dates           | Milestone                                              |
|-----------------|--------------------------------------------------------|
| Apr 13–17       | Milestone 1 – Wireframe, MongoDB setup, API setup      |
| Apr 20–24       | Milestone 2 – Routing, Endpoints (Backend), Frontend   |
| Apr 27–May 1    | Milestone 3 – Integrated Frontend + Backend            |
| May 4–8         | Buffer Week                                            |
| May 11–13       | Final Presentation                                     |

---

## Grading Scheme

### Score Breakdown

| Component                        | Points |
|----------------------------------|--------|
| **Functional Specifications**    | **50** |
| &nbsp;&nbsp;Design               | 10     |
| &nbsp;&nbsp;User Types & Accounts| 10     |
| &nbsp;&nbsp;E-Commerce Management| 10     |
| &nbsp;&nbsp;Shop                 | 20     |
| **Milestone Presentations**      | **20** |
| **Final Presentation**           | **30** |
| &nbsp;&nbsp;Code Demo & Walkthrough | 20  |
| &nbsp;&nbsp;Q&A Responses        | 10     |

### Grade Formula

```
Student Grade = ((Functional Specifications + Milestones) × Peer Evaluation) + Presentation
```

---

## Bonus Points *(Choose 1, max +5 pts)*

1. **Shopping Cart Persistence** – If you implement data persistence for the shopping cart (not just UI rendering), **+5 points** are added to your total score.

2. **Customer Profile** – If customers can view their purchase history and update their personal information, **+5 points** are added to your total score.
# Express Server API & Database

This is a **Node.js Express** server that provides a paginated API for fetching products using **PostgreSQL** with `pg-promise`.

## API Endpoints

### Get Paginated Products

```http
GET /api/v1/products?limit=10&skip=0
```

#### Query Parameters:

| Parameter | Type  | Description                    |
| --------- | ----- | ------------------------------ |
| `limit`   | `int` | Number of products per request |
| `skip`    | `int` | Offset for pagination          |

#### Response:

```json
{
  "success": true,
  "products": [
    { "id": 1, "name": "Product A", "price": 10,... },
    { "id": 2, "name": "Product B", "price": 15 ,...}
  ],
  "total": 50,
  "limit": 10,
  "skip": 2
}
```

# Product API - Get Single Product

## Overview

This API provides details of a single product when a valid product ID is provided.

## Endpoint

### **GET** `/api/v1/product/:id`

#### **Description**

Fetches the details of a product based on the given `id`.

#### **Parameters**

| Parameter | Type   | Required | Description                    |
| --------- | ------ | -------- | ------------------------------ |
| `id`      | String | Yes      | Unique identifier of a product |

#### **Request Example**

```http
GET /api/v1/product/12345
```

#### **Response Example**

```json
{
 "id": 1,
 "title": "Essence Mascara Lash Princess",
 "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
 "category": "beauty",
 "price": "9.99",
 "discount_percentage": "7.17",
 "rating": "4.94",
 "stock": 5,
 "brand": "Essence",
 "width": "23.17",
 "height": "14.43",
 "item_depth": "28.01",
 "warranty_information": "1 month warranty",
 "shipping_information": "Ships in 1 month",
 "availability_status": "Low Stock",
 "return_policy": "30 days return policy",
 "thumbnail_url": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
 "created_at": "2024-05-23T03:26:21.000Z",
 "updated_at": "2024-05-23T03:26:21.000Z"
},
```

### `products` Table

| Column                 | Type            | Description              |
| ---------------------- | --------------- | ------------------------ |
| `id`                   | `SERIAL`        | Primary Key              |
| `title`                | `VARCHAR(255)`  | Product Title            |
| `description`          | `TEXT`          | Product Description      |
| `category`             | `VARCHAR(100)`  | Product Category         |
| `price`                | `DECIMAL(10,2)` | Product Price            |
| `discount_percentage`  | `DECIMAL(5,2)`  | Discount Percentage      |
| `rating`               | `DECIMAL(3,2)`  | Product Rating           |
| `stock`                | `INTEGER`       | Stock Quantity           |
| `brand`                | `VARCHAR(255)`  | Product Brand            |
| `width`                | `DECIMAL(10,2)` | Product Width            |
| `height`               | `DECIMAL(10,2)` | Product Height           |
| `item_depth`           | `DECIMAL(10,2)` | Product Depth            |
| `warranty_information` | `TEXT`          | Warranty Details         |
| `shipping_information` | `TEXT`          | Shipping Details         |
| `availability_status`  | `VARCHAR(50)`   | Stock Availability       |
| `return_policy`        | `TEXT`          | Return Policy            |
| `thumbnail_url`        | `TEXT`          | Thumbnail Image URL      |
| `created_at`           | `TIMESTAMP`     | Timestamp of creation    |
| `updated_at`           | `TIMESTAMP`     | Timestamp of last update |

## Technologies Used

- **PostgreSQL & pg-promise** (Database)
- **Node.js & Express** (Backend Framework)

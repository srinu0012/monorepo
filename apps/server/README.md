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
    { "id": 1, "name": "Product A", "price": 10 },
    { "id": 2, "name": "Product B", "price": 15 }
  ],
  "total": 50,
  "limit": 10,
  "skip": 2
}
```

## Database Tables

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

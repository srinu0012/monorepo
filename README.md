# pnpm Monorepo - Express API & Database

This is a **pnpm-managed monorepo** containing an **Express.js** server and a **React.js** client, utilizing **PostgreSQL** as the database.

## Monorepo Structure

```
monorepo1/
├── apps/
│   ├── client/  # React frontend
│   ├── server/  # Express backend
│
├── packages/
│   ├── shared-types/  # Common types for both client and server
│
├── package.json  # Root configuration
├── pnpm-workspace.yaml  # pnpm workspace settings
```

## Package Management

This project uses **pnpm workspaces** to manage dependencies and shared packages efficiently.

### Install Dependencies

```sh
pnpm install
```

### Start the Development Servers

```sh
pnpm start
```

This runs both client and server concurrently.

### Start Server Only

```sh
pnpm server:start
```

### Start Client Only

```sh
pnpm client:start
```

### Build the Server

```sh
pnpm server:build
```

### Build the Client

```sh
pnpm client:build
```

### Build the @types/shared package

```sh
pnpm @types/shared:build
```

### Build Both Client & Server & @types/shared

```sh
pnpm build
```

### Lint Code

```sh
pnpm lint
```

## Technologies Used

- **pnpm & pnpm workspaces** (Monorepo Management)
- **PostgreSQL & pg-promise** (Database)
- **Node.js & Express** (Backend Framework)
- **React.js & Vite** (Frontend Framework)

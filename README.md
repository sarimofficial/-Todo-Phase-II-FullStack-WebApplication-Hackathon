# Evolution of Todo

Full-stack todo application built with Python FastAPI backend and Next.js frontend.

## Architecture Overview

This is a monorepo with separate backend and frontend applications:

- **Backend**: Python FastAPI REST API with Neon PostgreSQL
- **Frontend**: Next.js (App Router) with React and TypeScript
- **Database**: Neon Serverless PostgreSQL

## Quick Start

### Prerequisites

1. Python 3.11+
2. Node.js 18+
3. Neon PostgreSQL account

### Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv .venv

# Activate (Windows)
.venv\Scripts\activate
# OR (Linux/Mac)
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Copy environment file
cp .env.example .env

# Edit .env with your Neon PostgreSQL connection string
# DATABASE_URL=postgresql://neondb_owner:your_password@ep-twilight-breeze-ah8ijng4-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require

# Run database migrations
alembic upgrade head

# Start development server
uvicorn src.api.main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Copy environment file
cp ../.env.example .env

# Edit .env with API URL
# NEXT_PUBLIC_API_URL=http://localhost:8000/api

# Start development server
npm run dev
```

### Using Docker Compose (Optional)

```bash
# Copy environment file
cp .env.example .env

# Build and start with Docker Compose
docker-compose up --build
```

## API Endpoints

### Authentication

- `POST /api/auth/signup` - Register new user
- `POST /api/auth/signin` - Authenticate user
- `POST /api/auth/signout` - Sign out user

### Todos

- `GET /api/todos` - Get all todos for authenticated user
- `POST /api/todos` - Create new todo
- `GET /api/todos/{id}` - Get specific todo
- `PUT /api/todos/{id}` - Update todo
- `DELETE /api/todos/{id}` - Delete todo
- `PATCH /api/todos/{id}/complete` - Toggle completion status

## Features

### Implemented in Phase II

#### Authentication
- [x] User registration with email and password
- [x] User authentication (sign in/sign out)
- [x] JWT-based session management
- [x] Email format validation
- [x] Password requirements (minimum 8 characters)
- [x] Duplicate email prevention

#### Todo Management
- [x] Create todos with title and optional description
- [x] View all todos for authenticated user
- [x] View specific todo details
- [x] Update todo (title and description)
- [x] Delete todos with confirmation
- [x] Toggle todo completion status
- [x] User data isolation (users see only their todos)

### User Stories

1. **User Sign Up (P1)** - Create account
2. **User Sign In (P1)** - Access account
3. **Create Todo (P1)** - Add new tasks
4. **View Todos (P1)** - See all tasks
5. **Mark Complete (P2)** - Toggle completion
6. **Edit Todo (P2)** - Update task details
7. **Delete Todo (P2)** - Remove tasks

## Out of Scope

- Password reset
- Email verification
- Social login
- Todo categories/tags
- Due dates and reminders
- Search and filtering
- Bulk operations
- Undo functionality
- User profile management
- Settings/preferences pages

## Development

- Backend: `backend/`
- Frontend: `frontend/`
- Documentation: `specs/1-phase2-fullstack/`

## Technology Stack

### Backend
- Python 3.11+
- FastAPI 0.104+
- SQLModel 0.0.14+
- Pydantic 2.5+
- Alembic 1.13+
- psycopg2 2.9+
- Uvicorn 0.24+

### Frontend
- Next.js 14+
- React 18+
- TypeScript 5.0+
- Tailwind CSS 3.4+

### Database
- Neon Serverless PostgreSQL

## Authentication

JWT-based authentication using Python `jose` library with HTTP-only cookies.

## License

MIT

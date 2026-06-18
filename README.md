# Async Job Queue & Notification System

A backend system that handles notification delivery asynchronously using a queue-based architecture. Built with Node.js, BullMQ, Redis, and Docker.

The core idea is simple — when a user triggers a notification, the API doesn't process it immediately. Instead, it pushes the job into a Redis-backed queue and returns a response right away. A background worker picks it up and handles the actual delivery independently.

---

## How It Works

```
Client → Express API → BullMQ Queue (Redis) → Worker → Notification Service
```

The API and the worker are completely decoupled. The API only cares about accepting requests and queuing jobs. The worker only cares about processing them. This means the system stays responsive under load and failed jobs can be retried without affecting the API.

---

## Tech Stack

- **Node.js & Express** — HTTP API layer
- **BullMQ** — Job queue management
- **Redis** — Queue storage and state
- **Nodemailer** — Email delivery
- **Docker & Docker Compose** — Containerized services

---

## API

### Create a job

```
POST /api/v1/jobs/mail
```

```json
{
  "to": "test@example.com"
}
```

Returns a `jobId` you can use to track the job:

```json
{
  "statusCode": 201,
  "message": "successfully add the job",
  "data": {
    "jobId": "2"
  },
  "success": true
}
```

---

### Check job status

```
GET /api/v1/jobs/:jobId
```

```json
{
  "statusCode": 200,
  "message": "Job status fetched successfully",
  "data": {
    "id": "2",
    "state": "active",
    "attemptsMade": 0,
    "processedOn": 1781785914162
  },
  "success": true
}
```

A job moves through these states: `waiting` → `active` → `completed` (or `failed`).

---

## Queue Behaviour

**Retries** — If a job fails, BullMQ retries it automatically up to 3 times before marking it as failed.

**Delays** — Jobs can be scheduled to run after a delay instead of immediately.

**Priority** — Jobs with a higher priority value are picked up by the worker first.

---

## Running Locally

```bash
# Install dependencies
npm install

# Start Redis
docker compose up redis

# Start the API
npm run dev

# Start the worker (separate terminal)
npm run worker
```

Or run everything together with Docker:

```bash
docker compose up --build
```

---

## What I Learned

This project gave me hands-on experience with event-driven backend design — specifically how to offload work from the request lifecycle using a producer-consumer pattern. Working with BullMQ and Redis taught me how real-world job queues handle retries, delays, and concurrency. Containerizing the API and worker as separate services also gave me a clearer picture of how microservices communicate in production.
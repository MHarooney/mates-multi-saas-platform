# Architecture Overview

## Tech Stack
- **Frontend**: Vue3.js (with Pinia for state management and Vue Router for routing)
- **Backend**: PHP Laravel (with multi-tenancy support using `stancl/tenancy`)
- **Database**: PostgreSQL (one database per tenant)
- **AI/Server Integrations**: Python scripts (for AWS, Azure, Google Cloud, etc.)
- **CI/CD**: GitHub Actions (for automated testing, building, and deployment)
- **Hosting**: Dockerized deployment (with Docker Compose for local development)

## Multi-Tenancy Architecture
- **Database-per-Tenant**: Each tenant has its own PostgreSQL database.
- **Shared Application Code**: The Laravel backend serves all tenants, but data is isolated.
- **Tenant Identification**: Tenants are identified by subdomains (e.g., `tenant1.mates.com`).

## System Components
1. **Frontend**:
   - Vue3.js SPA (Single Page Application)
   - Communicates with the Laravel backend via REST API.

2. **Backend**:
   - Laravel handles tenant creation, authentication, and API endpoints.
   - Multi-tenancy is managed using the `stancl/tenancy` package.

3. **Database**:
   - PostgreSQL is used for all tenants.
   - Each tenant has a separate database for data isolation.

4. **AI/Server Integrations**:
   - Python scripts handle integrations with third-party services (AWS, Azure, etc.).
   - AI models are deployed as part of the Python scripts.

5. **CI/CD**:
   - GitHub Actions automates testing, building Docker images, and deployment.

## Flow Diagrams
Refer to the following Mermaid diagrams for visual representation:

### Multi-Tenant Flow
```mermaid
flowchart TD
    A[Customer Visits Website] --> B[Sign Up / Login]
    B --> C{Is New Customer?}
    C -->|Yes| D[Choose System Type (LMS, POS, HR, etc.)]
    C -->|No| E[Access Existing System]
    D --> F[Enter Payment Details]
    F --> G[Create Tenant Database]
    G --> H[Deploy System]
    H --> I[Redirect to Tenant Dashboard]
    I --> J[Customer Manages System]
    J --> K[Admin Monitors Stats]
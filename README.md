\## Project Overview

This project demonstrates a complete automated software delivery process following DevOps best practices.  

The main goal is not the application itself, but the \*\*CI/CD pipelines, containerization, and Kubernetes deployment\*\* around it.



The project covers multiple phases of the Software Development Life Cycle (SDLC) and shows how code moves from a Git repository to a running application in Kubernetes.



---



\## Technologies Used



\- Git \& GitHub (Source Control)

\- GitHub Actions (CI/CD Pipelines)

\- Branching strategy with Pull Requests

\- Docker (Containerization)

\- GitHub Container Registry (Image storage)

\- Kubernetes (Container orchestration)

\- Infrastructure as Code (YAML manifests)

\- Security \& Quality checks (CI validation concepts)



\## The repository contains



\- Simple javascript code with unit test

\- CI Pipeline (validation on Pull Requests)

\- CD Pipeline (build \& push Docker image)

\- Docker Image stored in GHCR

\- Kubernetes Deployment (local cluster)

\- Application exposed via Kubernetes Service

\- The pipelines are fully automated and defined as code.



---



\## Continuous Integration (CI)

The CI pipeline is triggered on Pull Requests and is responsible for:



\- Validating code changes

\- Running quality and security checks

\- Ensuring the codebase stays in a deployable state



This ensures early feedback and prevents problematic code from reaching the main branch.



---



\## Continuous Delivery (CD)

The CD pipeline is triggered on push to the `master` branch and performs:



\- Docker image build

\- Image tagging (`latest` and commit SHA)

\- Push of the image to GitHub Container Registry (GHCR)



At the end of the CD pipeline, a deployable Docker image is available.



---



\## Sonar Pipeline (CD)

The sonar pipeline is triggered on push to the `master` branch and performs:



\- Sonar analyze



With this pipeline we check our code for any bugs or problems



---





\## Kubernetes Deployment

The application is deployed to Kubernetes using \*\*Infrastructure as Code\*\*:



\- 'deployment.yaml'

&nbsp; - Defines the application Deployment

&nbsp; - Uses 2 replicas for high availability

&nbsp; - Pulls the image from GHCR



\- 'service.yaml'

&nbsp; - Exposes the application using a `NodePort` Service

&nbsp; - Allows access to the application from the local machine



The Kubernetes deployment is demonstrated locally using Docker Desktop with Kubernetes enabled.



---



\## How to Run the Project

Prerequisites:

\- Docker Desktop with Kubernetes enabled

\- kubectl configured



Steps:

```bash

kubectl apply -f deployment.yaml

kubectl apply -f service.yaml


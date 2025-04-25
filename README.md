![Project Banner](/public/1.png)

---

# 🔥 Project Setup Guide

This project uses several APIs and services such as **Vapi**, **Google Generative AI**, and **Firebase**. To get started, create a `.env.local` file in the root of your project and fill in the following environment variables:

---

## 🔐 Environment Variables

```env
# VAPI (Voice Assistant API)
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=

# Google Generative AI
GOOGLE_GENERATIVE_AI_API_KEY=

# Base URL (typically for development)
NEXT_PUBLIC_BASE_URL="http://localhost:3000"

# Firebase Configuration (Client Side)
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# Firebase Admin SDK (Server Side)
FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=

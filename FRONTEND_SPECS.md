# Second Brain Frontend Specifications

This document outlines the frontend implementation of the Second Brain workspace, including branding revisions and feature activations. It is intended to guide the backend integration team (Antigravity).

## 1. Project Overview
A sophisticated, AI-driven workspace for managing notes, research, and neural connections. Built with a high-performance, dark-themed aesthetic inspired by Vercel and Linear.

### Tech Stack
- **Framework:** React 18 (Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Material Symbols Outlined
- **Fonts:** Inter
- **Navigation:** React Router DOM

## 2. Branding & Design System
The brand identity has been updated to a professional blue-themed grayscale aesthetic.

### Visual Identity
- **Primary Brand Color:** `#1c60f2` (Blue)
- **Background:** `zinc-950` (Black)
- **Secondary Surfaces:** `zinc-900` / `zinc-800`
- **Typography:** Inter (Variable weights 300-900)
- **Theme:** Strict Dark Mode (default)

### Key Assets
- **Logo:** `src/assets/logo_dark.png`
- **Favicon:** `public/favicon.png`
- **Avatars:** `src/assets/avatar.png`

## 3. Activated Features & Pages

### A. AI Chat (Home)
**Location:** `/` (`src/pages/ChatPage.tsx`)
- **Messaging Interface:** Supports user and assistant roles with specific message bubbles.
- **Context Sidebar:** Shows related resources, neural connection previews, and tags associated with the current conversation.
- **Interaction Points:**
  - Message input (textarea)
  - Suggestion chips
  - Resource links

### B. Library
**Location:** `/library` (`src/pages/LibraryPage.tsx`)
- **Document Management:** Grid view of research papers, notes, and PDFs.
- **Categorization:** Tabs for "All", "Recent", "Projects", and "Archived".

### C. Neural Map
**Location:** `/neural-map` (`src/pages/NeuralMapPage.tsx`)
- **Visualization:** Interactive workspace for mapping connections between knowledge nodes.
- **Note:** Currently implements the UI shell and placeholder for the graph visualization engine.

### D. API Management
**Location:** `/api-management` (`src/pages/APIPage.tsx`)
- **Key Metrics:**
  - Total Requests (Daily/Monthly)
  - Latency (Avg ms)
  - Cost (MTD)
- **Key Management:** List of active keys with status (active/inactive), creation dates, and last usage.
- **Analytics:** Usage trend chart (SVG-based implementation).

### E. Advanced Settings
**Location:** Modal (`src/components/modals/SettingsModal.tsx`)
- **Sections:** Account, General, API, Security, Platform.

## 4. Backend Integration Points (Antigravity)

### API Endpoints Needed (Recommended)
1.  **Chat Service:** `POST /api/chat` for sending messages and receiving streamed assistant responses.
2.  **Library Service:** `GET /api/library` to fetch documents and notes.
3.  **Neural Map Service:** `GET /api/map/connections` to provide graph data (nodes and edges).
4.  **Metrics Service:** `GET /api/metrics` to populate the API Management dashboard stats and usage trends.
5.  **Key Service:** CRUD operations for API keys via `/api/keys`.

### UI Integration Requirements
- **Theme Toggle:** Ensure backend preferences for theme are synced (if applicable).
- **Authentication:** Bearer token implementation for all protected views.

---
*Created by Jules for the Second Brain Team.*

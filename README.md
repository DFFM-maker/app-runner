# 🧠 Second Brain Dashboard

A high-performance, AI-driven personal knowledge management dashboard. Built with a focus on speed, minimalist aesthetics, and seamless AI integration via the Model Context Protocol (MCP).

![Status](https://img.shields.io/badge/Status-Development-blue-600?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-black?style=flat-square)
![Style](https://img.shields.io/badge/Style-Linear/Vercel-white?style=flat-square)

## ✨ Overview

Second Brain is a desktop-first web application designed to centralize documents and interact with them through an advanced AI chat interface. The UI follows the **Vercel/Linear design language**: dark mode by default, high-contrast typography, and subtle micro-interactions.

## 🚀 Tech Stack

- **Framework:** React 18 with Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Protocol:** MCP (Model Context Protocol) for external tool integration

## 📂 Project Structure

```text
src/
├── components/
│   ├── ui/             # Atomic components (Buttons, Inputs, Modals)
│   ├── layout/         # Sidebar, ChatInterface, Topbar
│   └── chat/           # Message bubbles, Citations, InputZone
├── hooks/              # Custom hooks for MCP and state management
├── lib/                # Utility functions and API clients
└── assets/             # Static resources and global styles
🛠 Installation & Setup
Clone the repository:

git clone https://github.com/your-username/second-brain.git
cd second-brain
Install dependencies:

npm install
Environment Setup: Create a .env file in the root and add your MCP configuration:

VITE_MCP_SERVER_URL=https://stitch.googleapis.com/mcp
VITE_GOOGLE_API_KEY=YOUR_API_KEY_HERE
Run development server:

npm run dev
📡 MCP Configuration (Antigravity/Stitch)
This project supports the Model Context Protocol. To connect your local environment with the Stitch server, ensure your configuration matches:

{
  "mcpServers": {
    "stitch": {
      "serverUrl": "https://stitch.googleapis.com/mcp",
      "headers": {
        "X-Goog-Api-Key": "YOUR_API_KEY"
      }
    }
  }
}
🗓 Roadmap
 Initial Repository Setup & Tech Stack Selection
 Core UI Implementation (Sidebar & Chat Interface)
 Integration with MCP Server for live data retrieval
 Advanced File Management & Markdown support
 Usage Analytics & API Management Dashboard
🎨 Design Principles
Dark Mode First: Deep blacks (#000000) and Zinc grays for depth.
Minimalist UI: Removing clutter to focus on content and conversation.
Performance: Instant feedback on interactions using Framer Motion.
Accessibility: High contrast ratios and keyboard-friendly navigation.
Built with ❤️ for the future of knowledge management.


---

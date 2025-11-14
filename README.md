# Small Claims Court Statement Generator

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-blue?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Rendered_With-Vite-blue?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green.svg)

A modern, privacy-focused web application designed to empower individuals by simplifying the creation of a structured Statement of Claim for Small Claims Court in the United States.

---

### [➡️ Live Demo (Placeholder) ⬅️](https://example.com/)

---

![Small Claims Generator Screenshot](https://example.com/screenshot.png) <!-- Replace with an actual screenshot -->

## Abstract

Navigating the legal system can be a daunting and expensive process. This tool aims to lower the barrier to justice by providing an intuitive, free-to-use platform for generating a foundational legal document. By handling all data processing on the client-side, it guarantees user privacy while delivering a clean, professional, and accessible experience. The application is complemented by a comprehensive guide to the small claims process, making it a valuable resource for anyone seeking to resolve civil disputes.

## ✨ Key Features

-   **Intuitive Document Generation**: A guided form captures all necessary details—Plaintiff, Defendant, claim specifics—and instantly generates a formatted legal template.
-   **Client-Side Privacy**: All data is processed in the browser. No information is ever transmitted to or stored on a server, ensuring 100% user privacy.
-   **Immersive User Experience**: A unique, animated galaxy background and a modern, responsive interface create a calm and professional environment.
-   **In-Depth Educational Content**: A collapsible, 3500+ word SEO-optimized article provides a comprehensive guide to the small claims process, from pre-filing demand letters to understanding court procedures.
-   **Action-Oriented UI**: Features one-click "Copy Text" functionality and a simulated "Download DOCX" button for a seamless workflow.
-   **SEO Optimized**: Built with best practices for search engine visibility, including full JSON-LD schema for rich search results.

## 🛠️ Technology Stack

-   **Framework**: React 18+ (with Functional Components & Hooks)
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS for a utility-first, responsive design.
-   **Animation**: HTML5 Canvas with `requestAnimationFrame` for a performant, animated background.

## 📂 File Structure

The project follows a logical and scalable structure, separating concerns for maintainability.

```
/
├── public/
│   └── favicon.svg           # Application favicon
├── src/
│   ├── components/
│   │   ├── Layout.tsx        # Main layout: header, footer, background, modals
│   │   ├── SmallClaimsGenerator.tsx # The core form and output generation UI
│   │   └── Starfield.tsx     # The animated canvas background component
│   ├── lib/
│   │   └── SmallClaimsTemplate.ts # Business logic for text generation and template
│   ├── utils/
│   │   └── SeoArticle.tsx    # The collapsible 3500-word SEO article component
│   ├── App.tsx               # Main application component, orchestrates the page
│   └── index.tsx             # The React root renderer
├── index.html                # The HTML entry point with SEO metadata
└── README.md                 # This file
```

## 🚀 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```
2.  **Install dependencies:**
    ```sh
    npm install
    ```
3.  **Start the development server:**
    ```sh
    npm run dev
    ```
4.  Open your browser and navigate to `http://localhost:5173` (or the port specified in your console).

## 📝 How to Use the Generator

1.  **Complete the Form**: Accurately fill in all fields for the Plaintiff (you), the Defendant (the party you are suing), and the claim details.
2.  **Be Detailed**: In the "Reason for Claim" section, provide a clear and concise summary of your case. Include important dates, figures, and a chronological account of events.
3.  **Generate**: Click the **"Generate Statement of Claim"** button.
4.  **Review Carefully**: The generated legal text will appear in the output panel. Read through it meticulously to verify all information is correct.
5.  **Copy and Finalize**: Use the "Copy Text" button to copy the document. Paste it into a dedicated word processor (like Microsoft Word or Google Docs) to make final adjustments, print, and sign.

---

> ### **⚠️ IMPORTANT LEGAL DISCLAIMER ⚠️**
>
> **This tool is provided for informational and template-generating purposes only. It is NOT a substitute for professional legal advice from a qualified attorney.**
>
> The document generated is a basic template and may not meet the specific procedural or formatting requirements of your local jurisdiction. Legal rules and filing procedures vary significantly between states and counties.
>
> You are **solely responsible** for ensuring the accuracy and legal sufficiency of your documents and for complying with all court rules. The creators of this tool are not liable for any errors, omissions, or for the outcome of any legal action you may take.
>
> **Always consult with a licensed attorney for guidance on your specific legal situation.**

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/hsinidev/small-claims-generator/issues) (placeholder).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details (placeholder).

## 👤 Author

**HSINI MOHAMED**

-   **GitHub**: [@hsinidev](https://github.com/hsinidev)
-   **Website**: [doodax.com](https://doodax.com)

# **Frontend Architecture Validation and Hackathon Pre-Setup**

## **1\. Executive Summary**

This document outlines the architecture and pre-setup requirements for the upcoming pilot hackathon. The stack utilizes Visual Studio Code, GitHub Copilot, shadcn/ui and Tailwind CSS. By employing a purely Token-Driven User Interface workflow with zero static mockups 1, the hackathon will validate the velocity, scalability, and technical viability of this stack for large-scale enterprise website development.

## **2\. Architecture and AI Synergy**

The toolchain is explicitly engineered to minimize AI hallucination by providing a highly constrained, context-rich local environment.

| Architectural Component | Synergistic Mechanism with AI Tools | Objective Engineering Outcome |
| :---- | :---- | :---- |
| **Local Context via shadcn/ui** | Unlike traditional component libraries distributed as compiled packages in node\_modules, shadcn/ui exports raw component source code directly into the local repository. This allows the AI to natively index the exact implementation, prop interfaces, and dependencies.2 | GitHub Copilot gains complete visibility into the component architecture, eliminating syntax hallucinations. The AI can read, manipulate, and assemble logic using the exact dialect of the codebase.3 |
| **Tailwind CSS Standardization** | Tailwind CSS replaces arbitrary CSS authoring with a strict, finite dictionary of predefined utility classes. By ingesting the custom tailwind.config.js, the AI understands the exact boundaries of the project's design system.4 | Drastically reduces visual regression and CSS generation errors. The AI is constrained to a deterministic styling vocabulary, preventing the generation of decoupled, unmaintainable CSS rules or arbitrary values.4 |
| **Accessibility via Radix UI** | Radix UI supplies headless primitives that encapsulate highly complex WCAG logic, including ARIA attribute state management and keyboard focus trapping.5 | The AI is completely relieved of the burden of assembling invisible accessibility state logic. Developers can instruct the AI to build complex layouts, mathematically guaranteed that structural inclusivity is preserved.5 |

## **3\. Hackathon Pre-Setup**

The participants must be insulated from boilerplate setup. The following is a suggested list of steps to prepare a frictionless starter repository.

* **Scaffolding:** Initialize the base framework (Next.js). Enforce global TypeScript for deterministic type safety (enhancing Copilot autocomplete) and strict linting/formatting rules.3  
* **shadcn/ui Integration:** Execute the base setup and structure the component directory into logical tiers (e.g., components/ui/ for raw primitives, components/blocks/ for complex compositions) to optimize the AI's local context retrieval.6  
* **Design Token Injection:** Map the design team's tokens directly into the codebase. Define base semantic tokens (colors, typography, radii) as CSS variables in the global stylesheet and map them into tailwind.config.js.7 This ensures all AI-generated code is automatically brand-compliant.  
* **Tooling & Guidelines:** Configure the VS Code workspace (.vscode/settings.json) to enable optimal AI features.8 Crucially, create a .github/prompts directory containing persistent AI instructions that force Copilot to act as a senior architect, use only local components, and strictly apply Tailwind classes.9

### **3.1 Hackathon repository setup todo list**

**Initialize Next.js with App Router & Strict TypeScript**

* Set up the latest Next.js version using the App Router.  
* Enable strict mode in tsconfig.json to ensure maximum type safety and better AI code completion.  
  **Initialize shadcn/ui with CSS Variables**  
* Run the shadcn/ui CLI and ensure components.json is configured to use CSS variables for styling.  
  **Pre-install Core Component Suite**  
* Add the following essential components to the repository: Button, Card, Table, Dialog, Input, Form, Sidebar, Badge, and Typography.  
  **Configure Global Styles (mia-care.io Branding)**  
* Update globals.css with the official mia-care.io brand color palette and design tokens using CSS variables.  
  **Map Semantic Tokens in tailwind.config.js**  
* Ensure the Tailwind configuration is synchronized with the CSS variables to provide meaningful utility class names (e.g., bg-brand-primary).  
  **Set up Code Quality Tools & Git Hooks**  
* Configure Biome (or ESLint/Prettier) for consistent formatting.  
* Implement a pre-commit hook (using Husky or similar) to automatically validate code before every commit.  
  **Verify "Fresh Install" Stability**  
* Ensure that running npm run dev works perfectly immediately after a fresh clone, with no missing dependencies or environment errors.

## **4\. Design Integration (Token-Driven Workflow)**

Participants will operate as AI orchestrators rather than syntax authors, focusing on product speed and architecture.

* **Absence of Mockups:** No static visual mockups (e.g., Figma) will be provided.1 Because design tokens are pre-injected into the CSS and Tailwind config, the AI's structural output is mathematically guaranteed to be visually on-brand.7  
* **Execution via AI:** Developers will use natural language (via Copilot Chat) to instruct the AI to assemble the pre-existing shadcn/ui components located in the starter repo.10 The UI automatically inherits brand directives, eliminating the need for manual CSS tweaking.

#### **Bibliography**

1. Building AI-driven workflows powered by Claude Code and other tools | UX Collective, [https://uxdesign.cc/designing-with-claude-code-and-codex-cli-building-ai-driven-workflows-powered-by-code-connect-ui-f10c136ec11f](https://uxdesign.cc/designing-with-claude-code-and-codex-cli-building-ai-driven-workflows-powered-by-code-connect-ui-f10c136ec11f)  
2. I don't understand, why so many people use Shadcn ui? \- Reddit, [https://www.reddit.com/r/reactjs/comments/1oeobkr/i\_dont\_understand\_why\_so\_many\_people\_use\_shadcn\_ui/](https://www.reddit.com/r/reactjs/comments/1oeobkr/i_dont_understand_why_so_many_people_use_shadcn_ui/)  
3. Structuring Your Codebase for AI Tools: 2025 Developer Guide \- Propel Code, [https://www.propelcode.ai/blog/structuring-codebases-for-ai-tools-2025-guide](https://www.propelcode.ai/blog/structuring-codebases-for-ai-tools-2025-guide)  
4. Tailwind CSS Best Practices & Design System Patterns \- DEV Community, [https://dev.to/frontendtoolstech/tailwind-css-best-practices-design-system-patterns-54pi](https://dev.to/frontendtoolstech/tailwind-css-best-practices-design-system-patterns-54pi)  
5. Introduction to shadcn/ui: Build Beautiful, Accessible React Components | by Sikandar Dev, [https://medium.com/@the.sikandar.dev/introduction-to-shadcn-ui-build-beautiful-accessible-react-components-46dfa3474295](https://medium.com/@the.sikandar.dev/introduction-to-shadcn-ui-build-beautiful-accessible-react-components-46dfa3474295)  
6. Shadcn UI Best Practices for 2026 | by Vaibhav Gupta | Write A Catalyst \- Medium, [https://medium.com/write-a-catalyst/shadcn-ui-best-practices-for-2026-444efd204f44](https://medium.com/write-a-catalyst/shadcn-ui-best-practices-for-2026-444efd204f44)  
7. Building a Scalable Design System with Shadcn/UI, Tailwind CSS, and Design Tokens, [https://shadisbaih.medium.com/building-a-scalable-design-system-with-shadcn-ui-tailwind-css-and-design-tokens-031474b03690](https://shadisbaih.medium.com/building-a-scalable-design-system-with-shadcn-ui-tailwind-css-and-design-tokens-031474b03690)  
8. GitHub Copilot in VS Code settings reference, [https://code.visualstudio.com/docs/copilot/reference/copilot-settings](https://code.visualstudio.com/docs/copilot/reference/copilot-settings)  
9. Dear LLM, here's how my design system works | by Oleksandra Huba | UX Collective, [https://uxdesign.cc/dear-llm-heres-how-my-design-system-works-b59fb9a342b7](https://uxdesign.cc/dear-llm-heres-how-my-design-system-works-b59fb9a342b7)  
10. Efficient Vibe Coding Guide with VS Code and GitHub Copilot | Jimmy Song, [https://jimmysong.io/blog/vs-code-copilot-vibe-coding-guide/](https://jimmysong.io/blog/vs-code-copilot-vibe-coding-guide/)
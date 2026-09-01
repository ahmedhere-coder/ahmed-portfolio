# Ahmed Nadeem — Portfolio

## What It Does and Who It Is For

This is my personal portfolio website. It presents my projects, project evidence, CV, contact options, and links to the real work behind each project.

It is mainly for internship recruiters, hiring managers, and other people who want to review what I have built and contact me about an opportunity or collaboration.

Live site: https://ahmed-nadeem.vercel.app/

## Setup

### Requirements

- Node.js
- npm
- Git

### Run Locally

```bash
git clone https://github.com/ahmedhere-coder/ahmed-portfolio.git
cd ahmed-portfolio
npm install
npm run dev
```

Open the local address shown by Vite in the terminal.

### Production Build

```bash
npm run build
```

The live site is deployed on Vercel from the GitHub repository.

## Usage Examples

### Review the Portfolio

1. Open the site.
2. Use the navigation or scroll through the page.
3. Open the project links to view GitHub repositories, build posts, or live project/company pages.
4. Use the CV, LinkedIn, GitHub, email, or scheduling links when needed.

### Send a Message

1. Scroll to the contact form.
2. Choose a reason for contacting me.
3. Enter a message, name, and valid email address.
4. Optionally enter a company or organization.
5. Submit the form.
6. A successful submission shows a confirmation message. The form is handled through Formspree.

## Architecture

```text
Visitor
  ↓
Browser
  ↓
React portfolio UI
  ├── Project / CV / LinkedIn / GitHub / Calendly links
  └── Contact form → Formspree → Email inbox

GitHub repository
  ↓
Vercel build and deployment
  ↓
Live HTTPS portfolio
  ↓
Vercel Web Analytics
```

The frontend is built with React and Vite. Vercel hosts the live site, Formspree handles contact-form delivery, and Vercel Web Analytics records site traffic.

## V2 Evaluation Results

For this README, **V2** means the hardened version of the portfolio after the initial working release and later mobile, form, launch, and QA improvements.

| Evaluation | Result |
|---|---|
| Real-phone mobile test | Passed. The final site was checked on a physical phone and remained usable without major layout or navigation problems. |
| Navigation and external links | Passed. Navigation, project links, CV, GitHub, LinkedIn, email, and scheduling links were checked. |
| Contact form | Passed. A valid submission reached the inbox and displayed the success state. Invalid email format was rejected by form validation. |
| Input and layout hardening | Passed. Long or unusual form input did not break the form layout during testing. |
| Launch checks | Passed. The page title and custom favicon are live, social-share metadata is installed, and Vercel Analytics is recording visits and page views. |
| Peer hardening review | No additional must-fix issue was identified. Text density in some sections was recorded as a possible future improvement. |

## Limitations

- Contact-form delivery depends on the external Formspree service being available.
- Search-engine indexing and ranking are controlled by the search engine and may take time to update.
- Some portfolio actions open external services or project links, so their availability is outside the portfolio itself.

## AI Transparency

AI tools were used as development assistants during the portfolio build for planning, copy refinement, code generation and debugging, responsive improvements, and QA suggestions.

I reviewed the content and code changes, tested the site on desktop and a real phone, checked the navigation and external links, tested the contact form, and verified the final deployment and launch features myself.

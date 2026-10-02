# Aries AI Automation Portfolio Specification

## Goal
Build a professional portfolio for AI Automation Specialist, Automation VA, and CRM automation roles. The site must present evidence of system design, workflow automation, API/webhook usage, database-backed operations, AI-assisted classification/generation, human-in-the-loop approval, and vertical business automation.

## Positioning
Do not position this as a web developer portfolio. Position it as an automation systems portfolio.

Primary headline:
I build automation systems that connect AI, CRM, APIs, and operations.

## Project hierarchy
1. DentalFlow SaaS, flagship build
2. AI Procurement & Approval System, full case study
3. AI Booking Agent, full case study
4. AI Content Operations & Approval Pipeline, case study
5. AI Inbox Triage Assistant, supporting project
6. Roofing Lead & Sales Automation, compact vertical case study
7. Autonomous Multi-Agent CRM Blueprint, architecture blueprint only until implemented

## Important honesty rule
Do not represent blueprints as deployed systems. Label the multi-agent CRM as architecture blueprint until the CrewAI build is implemented. Label upgraded stacks as planned rebuilds where appropriate.

## Sanitization rule
Never publish workflow exports, API keys, credential IDs, webhook URLs, Google Sheet IDs, email addresses, real client/patient data, or database IDs. Show simplified diagrams and screenshots only after sanitization.

## Visual style
Dark, technical, polished, and recruiter-readable. Avoid overloaded n8n canvas screenshots as the main visual. Use simplified architecture diagrams first, then optional screenshots inside deeper case-study pages.

## Site pages
- Home
- Projects overview
- Individual case-study pages
- Stack page
- About / resume page
- Contact CTA

## Case study structure
Each project page should include:
- Business problem
- Solution overview
- Workflow diagram
- Tool stack
- Architecture pattern
- Implementation details
- Reliability and safety considerations
- What I built / configured
- Future improvements

## Next implementation priorities
1. Convert this starter into full Next.js pages.
2. Add dynamic project routes under app/projects/[slug]/page.tsx.
3. Add project detail content from sanitized workflow evidence.
4. Add downloadable sanitized case-study PDFs later.
5. Add optional Loom walkthrough links when recorded.

# Aries AI Automation & SaaS Systems Portfolio Specification

## Goal
Build a professional portfolio for clients and employers that presents AI automation, production-oriented SaaS architecture, and a progression toward full-stack AI systems. Show system design, workflow automation, API integrations, database-backed operations, human oversight, reliability, and engineering evidence.

## Positioning
Position Aries as an AI Automation & SaaS Systems Builder progressing from workflow automation toward full-stack AI and SaaS development. Keep the focus on operational problems, engineering decisions, and evidence.

Primary headline:
Building reliable AI systems, from workflow automation to production-oriented SaaS.

## Project hierarchy
1. DentalFlow SaaS, flagship build
2. Social Presence Automation, engineering build
3. ClinicFlow Operations Prototype, deployed prototype
4. AI Procurement & Approval System
5. AI Booking Agent
6. AI Content Operations & Approval Pipeline
7. AI Inbox Triage Assistant
8. Roofing Lead & Sales Automation
9. Autonomous Multi-Agent CRM Blueprint, architecture blueprint only until implemented

## Project maturity and limits

- **DentalFlow:** active flagship build; staging and deployment hardening are ongoing. Production Verified: No.
- **Social Presence Automation:** core ingestion and review controls are described as implemented and tested; media processing and publishing remain incomplete. Production Verified: No.
- **ClinicFlow:** synthetic, frontend operational prototype for workflow exploration, with no live clinical integrations or medical decision-making. Production Verified: No.

Keep these states distinct:

| State | Meaning |
| --- | --- |
| Designed | Requirements, architecture, or constraints are described. |
| Built | Implementation exists for the stated scope. |
| Tested | Specific behavior has verification evidence; coverage remains bounded. |
| Deployed | A build is available in an environment, including a demonstration environment. |
| Production Verified | Production operational behavior has been verified for the stated scope. |

A local build or deployed prototype does not establish production verification. Describe reported evidence and its limits without implying broader testing or deployment.

## Important honesty rule
Do not represent blueprints as deployed systems. Label the multi-agent CRM as architecture blueprint until the CrewAI build is implemented. Label upgraded stacks as planned rebuilds where appropriate.

## Sanitization rule
Never publish workflow exports, API keys, credential IDs, webhook URLs, Google Sheet IDs, email addresses, real client/patient data, or database IDs. Show simplified diagrams and screenshots only after sanitization.

Do not expose personal phone numbers, exact database definitions or policies, migration internals, proprietary implementation details, private repository names, or private filesystem paths.

## Codex engineering method

Requirements -> Acceptance criteria -> Architecture -> Implementation -> Testing -> Evidence review -> Correction -> Regression -> Deployment verification.

Codex assists implementation, inspection, and debugging. Aries remains responsible for requirements, architecture, security boundaries, validation, evidence review, and deployment decisions. Treat AI output as untrusted input; use deterministic validation and authorization for consequential actions. Diagnose failures from evidence and verify root-cause fixes with relevant regression checks.

## Visual style
Dark, technical, polished, and recruiter-readable. Avoid overloaded n8n canvas screenshots as the main visual. Use simplified architecture diagrams first, then optional screenshots inside deeper case-study pages.

## Site sections and pages
- Home
- Projects overview
- Individual case-study pages
- Tools and stack section
- Building with Codex engineering-method section
- About / builder section
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

## Ongoing priorities
1. Keep case-study claims aligned with their current maturity and verification evidence.
2. Maintain sanitized engineering summaries in the evidence hub.
3. Review supporting materials for disclosure and accuracy before publication.

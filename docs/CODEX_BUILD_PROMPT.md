# Codex Build Prompt

You are building a professional portfolio website for Jette Aries Portilla, an AI Automation Specialist. Start from this repository.

## Non-negotiables
- Use Next.js App Router, TypeScript, and Tailwind CSS.
- Keep project data in `data/projects.ts` and render it dynamically.
- Do not hardcode duplicate project cards.
- Do not expose secrets, workflow IDs, credential IDs, webhook URLs, emails, or real client/patient data.
- Do not claim unfinished blueprint projects are deployed builds.
- Avoid generic developer portfolio wording. This is an automation systems portfolio.

## Main design goal
A recruiter or client should understand within 30 seconds that Aries can design and build automation systems involving n8n, Make.com, Supabase, GoHighLevel, APIs, AI models, Gmail, Calendar, Telegram, Slack, Notion, Airtable, Cal.com, Apify, and CrewAI.

## Build tasks
1. Add responsive header/navigation.
2. Add `/projects/[slug]` dynamic case-study pages.
3. Add section filters by maturity and orchestration style.
4. Improve diagrams or replace SVG placeholders with polished reusable components.
5. Add `StackStrategy` section explaining why each project uses different tools.
6. Add `EvidenceLevel` badges: Flagship build, Full case study, Supporting project, Architecture blueprint.
7. Add CTA buttons: View case studies, Download resume, Contact.
8. Add SEO metadata for each project.
9. Run `npm run build` and fix all TypeScript/lint errors.

## Tone
Clear, credible, precise, and professional. Avoid hype.

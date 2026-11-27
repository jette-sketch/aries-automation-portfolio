import type { projects } from './projects';

export type MilestoneStatus = 'documented' | 'built' | 'reported-tested' | 'demo-deployed' | 'open' | 'planned';
export type Milestone = { title: string; status: MilestoneStatus; detail: string };
export type ProjectSlug = (typeof projects)[number]['slug'];

const m = (title: string, status: MilestoneStatus, detail: string): Milestone => ({ title, status, detail });

// Public milestone summaries, bounded by the existing case studies.
// "Reported tested" does not mean independently retested for this portfolio.
export const roadmaps = {
  'dentalflow-saas': [
    m('Workflow prototype', 'built', 'Initial n8n and Google ecosystem workflows covered clinic intake, scheduling and communications.'),
    m('Database-backed architecture', 'built', 'Substantial implementation exists with PostgreSQL as the authoritative data layer and explicit tenant and role boundaries.'),
    m('Reliability evidence', 'reported-tested', 'Earlier targeted security, transaction and concurrency evidence is documented, alongside the November offline archive review. This is not complete security acceptance.'),
    m('Native security acceptance', 'open', 'Resolve outstanding security findings and prove the remediation on an isolated native database.'),
    m('Release qualification', 'planned', 'Complete environment separation, migration, monitoring and recovery checks before production verification.')
  ],
  'webhook-payload-validator': [
    m('Validation contract', 'documented', 'Define required fields, allowed event types and freshness rules.'),
    m('Deterministic validator', 'built', 'Implement structured validation errors and process-local duplicate warnings using Node.js built-in modules.'),
    m('Utility test suite', 'reported-tested', 'The project handoff reports passing validation and duplicate-warning tests.'),
    m('Production ingress controls', 'planned', 'Add sender authentication, signature verification and persistent atomic deduplication.'),
    m('Integration qualification', 'planned', 'Test restart, concurrency and isolated provider integration before production use.')
  ],
  'ai-autopilot-supervisor': [
    m('Supervision design', 'documented', 'Define bounded attempts, isolated candidate tests, evidence recording and terminal outcomes.'),
    m('Synthetic repair and resume', 'reported-tested', 'The handoff reports a successful bounded synthetic repair and controlled resume.'),
    m('Artifact reconciliation', 'open', 'Independently reconcile source and runtime artifact identities.'),
    m('Recovery and isolation', 'planned', 'Qualify unexpected interruptions, duplicate supervisors, exhausted attempts and lifecycle termination.'),
    m('Expanded execution', 'planned', 'Separate qualification is required before real repository or live provider execution.')
  ],
  'social-presence-automation': [
    m('Ingestion and audit', 'built', 'Typed candidate intake and atomic candidate/audit persistence are implemented.'),
    m('Review and policy checks', 'reported-tested', 'The case study documents testing of duplicates, concurrency, structured AI assessment and disclosure policy.'),
    m('Media processing', 'open', 'Develop media processing and watermark handling.'),
    m('Publishing boundary', 'open', 'Complete controlled downstream progression with explicit authorization.'),
    m('Production qualification', 'planned', 'Verify end-to-end publishing behavior before claiming a production system.')
  ],
  'clinicflow-operations-prototype': [
    m('Field discovery', 'documented', 'Map walk-in registration, queue numbers, service routing and staff status needs.'),
    m('Interactive prototype', 'built', 'Build synthetic registration, queue, public preview, follow-up, analytics and guided demo surfaces.'),
    m('Demo deployment', 'demo-deployed', 'The frontend-only interactive prototype is deployed with synthetic data.'),
    m('Workflow exploration', 'open', 'Continue exploring the reception workflow with the existing interactive prototype.')
  ],
  'ai-procurement-approval-system': [
    m('Request and policy model', 'documented', 'Define required fields, policy thresholds and authorized approval paths.'),
    m('Portfolio build', 'built', 'Production-style portfolio build illustrates intake, AI recommendations, human approval and reporting; live integration is not established.'),
    m('Policy governance', 'planned', 'Move approval thresholds into governed policy tables.'),
    m('Reporting and versions', 'planned', 'Improve spend exception dashboards, request versions and reviewer notes.')
  ],
  'ai-booking-agent': [
    m('Conversation and state design', 'documented', 'Define booking intent, required scheduling details and explicit confirmation.'),
    m('Portfolio implementation', 'built', 'The portfolio implementation demonstrates the integration pattern; provider integrations remain build targets.'),
    m('Booking safeguards', 'planned', 'Strengthen validation, availability checks and human fallback paths.'),
    m('State and calendar rules', 'planned', 'Reduce session drift and expand availability and buffer constraints.')
  ],
  'ai-content-operations-approval-pipeline': [
    m('Brief and approval model', 'documented', 'Define brief fields, revision states and human approval boundaries.'),
    m('Portfolio implementation', 'built', 'Demonstrates the Notion, Gemini, Make, Slack and document archive integration pattern, not a deployed client workflow.'),
    m('Draft guardrails', 'planned', 'Strengthen style and brand rules for generated drafts.'),
    m('Revision and reporting', 'planned', 'Improve approval metadata, revision traceability, reporting and scheduling.')
  ],
  'ai-inbox-triage-assistant': [
    m('Triage and review design', 'documented', 'Define classification, reply-needed decisions and draft-only human review.'),
    m('Portfolio implementation', 'built', 'Demonstrates mailbox triage, structured action queue and scheduling-link draft patterns without claiming a deployed client workflow.'),
    m('Classification improvements', 'planned', 'Strengthen domain-specific routing and historical priority labeling.'),
    m('Exception handling', 'planned', 'Improve treatment of ambiguous or repetitive messages while preserving review.')
  ],
  'roofing-lead-sales-automation': [
    m('Lead intake design', 'documented', 'Define emergency, standard and staff-review lead paths.'),
    m('Unpublished CRM draft', 'built', 'A saved GoHighLevel intake draft is reported; the broader integration stack is a design target.'),
    m('Routing qualification', 'open', 'Complete stage and urgency rules, ownership, booking, notifications and synthetic lead tests.'),
    m('Construction CRM expansion', 'planned', 'Add estimating and bidding after intake qualification; expand routing and reporting.')
  ],
  'autonomous-multi-agent-crm': [
    m('Architecture blueprint', 'documented', 'Define bounded research, evidence, qualification, human approval and audit responsibilities.'),
    m('Intake dependency', 'open', 'Qualify the roofing intake workflow before implementing its agent-assisted expansion.'),
    m('Agent contracts', 'planned', 'Define ownership, scoped tools, retry limits and estimating/bidding requirements.'),
    m('CRM integration', 'planned', 'Implement and validate scoring, approved-record persistence and CRM sync rules.')
  ],
  'autom8urbiz-governance': [
    m('Governance design', 'documented', 'Separate agent proposal, owner approval, bounded execution and audit.'),
    m('Synthetic governance proof', 'reported-tested', 'The handoff reports passing in-memory behavior and static SQL checks, not native enforcement.'),
    m('Database qualification', 'open', 'Verify native permissions, transactions, identity binding and concurrency in isolation.'),
    m('External action boundary', 'planned', 'Qualify revocation, rollback and durable execution before evaluating external effects.')
  ],
  'secretaryflow': [
    m('Discovery and architecture', 'documented', 'Document personal task capture, reminder design, security boundaries and acceptance criteria.'),
    m('Foundation inspection', 'open', 'Inspect isolated infrastructure and provider privacy/eligibility before implementation.'),
    m('Authorized implementation', 'planned', 'Implement authorization, durable ingress and reminder lifecycle only after approval.'),
    m('Synthetic pilot qualification', 'planned', 'Qualify a synthetic deployment before a controlled personal pilot.')
  ]
} satisfies Record<ProjectSlug, readonly Milestone[]>;

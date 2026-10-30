export const projects = [
  {
    slug: 'dentalflow-saas',
    title: 'DentalFlow SaaS',
    maturity: 'flagship build',
    summary: 'DentalFlow is an evolving multi-tenant clinic operations platform that began as workflow automation and is being hardened into a database-backed SaaS architecture with explicit tenant isolation, authorization, reliability controls, and human-supervised AI.',
    stack: ['Supabase/PostgreSQL', 'n8n', 'Google integrations', 'External APIs'],
    pattern: 'Multi-tenant SaaS architecture with database-enforced rules and workflow orchestration',
    status: 'Active flagship development with staging and deployment hardening in progress.',
    credibilityNote: 'Production verification is not yet claimed.',
    highlights: [
      'Supabase/PostgreSQL as the authoritative operational data layer',
      'Tenant isolation and role-based authorization',
      'Transactional reliability and human-supervised AI'
    ],
    businessProblem: 'Clinic requests, scheduling, communications, and follow-up can span disconnected tools, making operational state and staff handoffs difficult to coordinate.',
    solutionOverview: 'DentalFlow is evolving from connected workflows into a multi-tenant system where Supabase/PostgreSQL holds authoritative operational state, deterministic rules protect consequential actions, and n8n coordinates external integrations.',
    workflowSequence: [
      'Receive an operational request',
      'Interpret and validate the request',
      'Apply access and business rules',
      'Coordinate integrations and communications',
      'Provide operator visibility and follow-up'
    ],
    keyAutomations: [
      'Intake and request routing',
      'Scheduling and appointment communications',
      'Operational follow-up and reporting'
    ],
    aiUsage: [
      'AI assists with classification and interpretation of requests.',
      'Model output is untrusted input: deterministic validation and authorization precede consequential actions, with human review where needed.'
    ],
    safetyNotes: [
      'Tenant isolation and role-based access are explicit architecture concerns.',
      'Human oversight and deterministic rules govern consequential actions.',
      'Reliability controls address failures, retries, and state integrity.'
    ],
    nextImprovements: [
      'Continue broader security and reliability testing.',
      'Harden environment separation, migration readiness, monitoring, and recovery.',
      'Verify production operational behavior before claiming production readiness.'
    ],
    implementationNotes: [
      'Keep operational state authoritative in Supabase/PostgreSQL rather than spreadsheets.',
      'Place critical invariants close to the data and make human review explicit.'
    ],
    engineering: {
      evolution: [
        { title: 'Workflow Prototype', detail: 'Initial intake, scheduling, communications, and operational automation used n8n and the Google ecosystem.' },
        { title: 'Authoritative Data Layer', detail: 'Operational state moved toward Supabase/PostgreSQL as the system of record instead of spreadsheets.' },
        { title: 'Tenant & Access Enforcement', detail: 'Tenant isolation, authentication, RBAC, and database-level authorization became explicit concerns.' },
        { title: 'Reliability Hardening', detail: 'Transactional operations, auditability, retry awareness, authorization tests, rollback verification, and concurrency testing were introduced.' },
        { title: 'Staging & Deployment Readiness', detail: 'Environment separation, persistent orchestration state, migration readiness, monitoring, recovery, and production verification are being hardened.' }
      ],
      evidence: [
        'Authenticated tenant-isolation paths tested',
        'Least-privilege authorization behavior tested',
        'Privileged mutations protected by transactional database enforcement',
        'Rollback behavior verified for failed protected operations',
        'Concurrent mutation and invariant protection tested',
        'Audit events used for successful state-changing operations',
        'Staging orchestration state survived restart, validating persistence'
      ],
      loop: ['Requirement', 'Acceptance Criteria', 'Architecture', 'Codex-Assisted Implementation', 'Automated / Targeted Testing', 'Evidence Review', 'Root-Cause Fix', 'Regression Test', 'Staging / Deployment Verification'],
      lessons: [
        { title: 'Critical invariants belong close to the data.', detail: 'Workflow success alone does not protect authorization, tenant isolation, or state integrity.' },
        { title: 'Sequential success does not prove concurrency safety.', detail: 'Important mutation paths require race-condition and retry testing.' },
        { title: 'AI proposes; deterministic rules authorize and execute.', detail: 'Model output is untrusted input and is validated before consequential actions.' },
        { title: 'Deployment evidence matters.', detail: 'A successful build does not establish production verification; persistence, recovery, monitoring, configuration, and operational behavior also need validation.' }
      ],
      currentState: [
        { label: 'Designed', detail: 'Substantial architecture complete' },
        { label: 'Built', detail: 'Substantial implementation exists' },
        { label: 'Tested', detail: 'Core security and reliability paths have verified evidence; broader testing continues' },
        { label: 'Staging', detail: 'Active staging and deployment hardening' },
        { label: 'Production verified', detail: 'No' }
      ]
    },
    diagram: 'dentalflow-saas.svg'
  },
  {
    slug: 'social-presence-automation',
    title: 'Social Presence Automation',
    maturity: 'engineering build',
    summary: 'A reliability-focused content operations system that combines deterministic ingestion, transactional auditability, policy-controlled AI assessment, and explicit human or system authorization boundaries before consequential actions.',
    stack: ['TypeScript', 'PostgreSQL', 'AI assessment', 'Deterministic policy engine'],
    pattern: 'Deterministic content operations with AI-assisted assessment and policy enforcement',
    status: 'Active engineering build. Core ingestion and review controls are implemented and tested; downstream media processing and publishing remain under development.',
    credibilityNote: 'This case study describes verified engineering behavior from an active portfolio build and does not claim a completed production publishing system.',
    highlights: [
      'Typed and validated candidate ingestion',
      'Idempotent duplicate handling and atomic audit recording',
      'Structured AI assessment with strict validation',
      'Deterministic disclosure and IP policy controls'
    ],
    businessProblem: 'Content automation becomes risky when duplicate events, malformed payloads, unvalidated AI output, sensitive data, disclosure obligations, or publishing actions are handled implicitly. The system makes each boundary explicit: validate, persist, assess, verify, authorize, and execute.',
    solutionOverview: 'A typed ingestion boundary validates candidate content before persistence. PostgreSQL records candidate state with immutable audit evidence in a transaction, while idempotency and explicit conflict handling keep retries from creating duplicate consequences. AI supports assessment; deterministic validation, disclosure policy, and authorization govern progression.',
    workflowSequence: [
      'Receive candidate through a typed ingestion boundary',
      'Validate input deterministically before persistence',
      'Persist candidate state and audit evidence atomically',
      'Assess content and validate structured model output',
      'Evaluate sensitive-data, disclosure, and IP policy',
      'Authorize controlled progression; downstream publishing remains future work'
    ],
    keyAutomations: [
      'Idempotent candidate creation with explicit identity conflict handling',
      'Atomic candidate state and audit persistence',
      'Structured AI assessment with strict schema validation',
      'Deterministic disclosure and IP policy review'
    ],
    aiUsage: [
      'AI may assess content, classify context or risk, and return structured recommendations.',
      'Model output is untrusted input: schema validation, deterministic policy, and authorization precede any consequential downstream action.'
    ],
    safetyNotes: [
      'Sensitive-data scanning runs independently of model opinion; disclosure and IP policy are evaluated deterministically.',
      'Policy failure blocks progression rather than guessing, and review state with audit evidence is persisted transactionally.',
      'AI cannot authorize, override policy, bypass validation, or publish based on its recommendation.'
    ],
    nextImprovements: [
      'Develop downstream media processing and watermark handling.',
      'Continue controlled progression toward publishing; automated publishing is not complete.'
    ],
    implementationNotes: [
      'Retries should repeat intent, not duplicate consequences.',
      'Describe reliability principles without exposing private implementation details.'
    ],
    social: {
      evidence: [
        'Valid candidate ingestion tested',
        'Malformed candidate rejection tested',
        'Duplicate ingestion resolves idempotently',
        'Conflicting reuse of the same ingestion identity fails explicitly',
        'Candidate state and audit event commit atomically',
        'Concurrent duplicate requests produce one canonical candidate',
        'Structured assessment validation tested',
        'Sensitive-data and disclosure-policy paths tested'
      ],
      aiFlow: ['AI assessment', 'Strict schema validation', 'Deterministic policy evaluation', 'Authorization', 'Downstream action'],
      lessons: [
        { title: 'Idempotency is a correctness property.', detail: 'Retries must not create duplicate business consequences.' },
        { title: 'Audit evidence should be atomic with the state change.', detail: 'A successful state mutation without corresponding audit evidence creates an observability and accountability gap.' },
        { title: 'AI output is untrusted input.', detail: 'Schema, values, policy, authorization, and consequences must be validated independently.' },
        { title: 'Publishing is an execution boundary.', detail: 'Content generation or assessment does not imply permission to publish.' }
      ],
      currentState: [
        { label: 'Designed', detail: 'Core architecture and policy boundaries defined' },
        { label: 'Built', detail: 'Candidate ingestion, persistence/audit controls, and review controls implemented' },
        { label: 'Tested', detail: 'Core ingestion, duplicate/concurrency, and review-policy paths have verified evidence' },
        { label: 'In progress', detail: 'Media processing, watermark handling, and downstream publishing workflow' },
        { label: 'Production verified', detail: 'No' }
      ],
      codexNote: 'Codex was used to accelerate implementation and inspection, while acceptance criteria, deterministic validation, transactional behavior, concurrency tests, and policy enforcement were used to establish correctness.'
    },
    diagram: 'social-presence-automation.svg'
  },
  {
    slug: 'clinicflow-operations-prototype',
    title: 'ClinicFlow Operations Prototype',
    maturity: 'deployed prototype',
    summary: 'An interactive clinic-operations prototype informed by field discovery of a walk-in-heavy reception workflow, translating paper intake, queue-number issuance, service routing, and status progression into a staff and queue-management experience.',
    stack: ['TypeScript', 'React UI', 'Browser-local state', 'Deployed web prototype'],
    pattern: 'Field discovery to operational prototype',
    status: 'Frontend-only operational prototype deployed for workflow exploration with synthetic demo data.',
    credibilityNote: 'This is not a clinical system or a production-verified deployment. It uses synthetic data and has no live clinic integrations.',
    highlights: [
      'Reception registration with deterministic queue-number issuance',
      'Field-informed reception and service routing',
      'First-come queue progression with fictional service and provider routing',
      'Public queue view using queue numbers',
      'Administrative follow-ups and browser-local Analytics',
      'Interactive Guided Demo'
    ],
    businessProblem: 'Walk-in reception depends on manual intake, queue numbers, and routing visits to the appropriate service or provider.',
    solutionOverview: 'A frontend-only interactive prototype translates the field-informed reception workflow into registration, deterministic queue numbers, first-come progression, fictional service and provider routing, a privacy-safe public queue preview, administrative follow-ups, browser-local Analytics, and an interactive Guided Demo.',
    workflowSequence: ['Walk-in arrival', 'Reception registration', 'Queue number issued', 'Service / provider routing', 'Waiting queue', 'Called / in service', 'Completed', 'Administrative follow-up if needed'],
    keyAutomations: ['Reception registration and deterministic queue-number issuance', 'First-come queue progression with fictional service/provider routing', 'Privacy-safe public queue preview showing queue numbers', 'Administrative follow-ups and browser-local Analytics', 'Interactive Guided Demo'],
    aiUsage: [],
    safetyNotes: ['Intended for synthetic demo use only; the prototype is frontend-only and stores demo state in the browser.', 'The public queue preview shows queue numbers rather than names.', 'This is not a clinical system or production-verified deployment; it makes no medical decisions and has no live clinic integrations.'],
    nextImprovements: ['Continue workflow exploration with the interactive prototype.'],
    implementationNotes: ['Frontend-only operational prototype for synthetic demo use; not production verified.'],
    clinic: {
      observations: [
        { observed: 'Patients register through a manual name-list process.', requirement: 'Fast staff-assisted walk-in registration.' },
        { observed: 'Reception issues queue numbers.', requirement: 'Deterministic queue-number generation and visible queue state.' },
        { observed: 'One reception flow may route different visit types.', requirement: 'Service/provider routing at intake.' },
        { observed: 'Staff need to know who is waiting, next, called, or completed.', requirement: 'Explicit operational status progression.' },
        { observed: 'Waiting patients need visibility without exposing names publicly.', requirement: 'Public queue view displays queue numbers rather than patient names.' }
      ],
      surfaces: [
        { title: 'Registration', detail: 'Fast staff-assisted walk-in registration using synthetic patient records and fictional service/provider options.' },
        { title: 'Patient Queue', detail: 'Deterministic queue numbers progress in first-come order through operational statuses.' },
        { title: 'Dashboard', detail: 'Staff visibility into current operational state.' },
        { title: 'Follow-ups', detail: 'Administrative reminder and follow-up interface only.' },
        { title: 'Public Queue Preview', detail: 'Queue-number-based waiting display without exposing patient names.' },
        { title: 'Analytics', detail: 'Browser-local operational summaries based on synthetic demo state.' },
        { title: 'Guided Demo', detail: 'Interactive walkthrough of registration, queue progression, follow-up, and Analytics.' }
      ],
      delivery: [
        { title: 'Observe', detail: 'Understand reception behavior and constraints through field observation.' },
        { title: 'Model', detail: 'Translate steps, actors, statuses, and routing into explicit requirements.' },
        { title: 'Prototype', detail: 'Build registration, queue, dashboard, follow-up, browser-local Analytics, and Guided Demo experiences.' },
        { title: 'Test the flow', detail: 'Use synthetic records to exercise registration and queue progression.' },
        { title: 'Deploy', detail: 'Publish an interactive web prototype for workflow review and demonstration.' }
      ],
      currentState: [
        { label: 'Discovered', detail: 'Core walk-in and reception workflow mapped from field observations.' },
        { label: 'Designed', detail: 'Operational intake, queue, routing, and staff-state model represented.' },
        { label: 'Built', detail: 'Interactive registration, queue, dashboard, and administrative follow-up prototype.' },
        { label: 'Deployed prototype', detail: 'Interactive demo is deployed for workflow exploration.' },
        { label: 'Production verified', detail: 'No' }
      ]
    },
    diagram: 'clinicflow-operations-prototype.svg'
  },
  {
    slug: 'ai-procurement-approval-system',
    title: 'AI Procurement & Approval System',
    maturity: 'production-style build',
    summary: 'Production-style procurement workflow design for validating requests, producing AI-assisted risk recommendations, routing human approvals, recording decisions in Supabase, and preparing spend reports.',
    stack: [
      'n8n',
      'Jotform',
      'Supabase',
      'OpenAI or Groq',
      'Slack',
      'Gmail',
      'Jotform Sign',
      'Looker Studio or Metabase'
    ],
    pattern: 'AI decision support with human approval and analytics',
    status: 'Production-style portfolio build; no live client deployment is claimed.',
    credibilityNote: 'Production-style describes the design standard, not a claim of production deployment.',
    highlights: [
      'Form intake and normalization',
      'Required field validation',
      'AI procurement classification',
      'Approval routing by policy rules',
      'External charts and dashboards for spend/reporting'
    ],
    businessProblem:
      'Purchase requests often arrive with inconsistent descriptions, missing fields, and different cost or risk profiles. Without explicit policy thresholds and an auditable approval path, similar requests can be routed inconsistently or remain unresolved.',
    solutionOverview:
      'The design validates and normalizes Jotform submissions, uses AI to recommend request categories and risk indicators, then applies configured policy thresholds to select a human approver. Supabase stores request and decision events; reporting reads from those records without making approval decisions.',
    workflowSequence: [
      'Collect request and validate required fields',
      'Classify risk and approval threshold',
      'Route to internal approver path',
      'Log and finalize decision state',
      'Publish reporting and follow-up actions'
    ],
    keyAutomations: [
      'Request intake and required-field validation',
      'AI-based cost, risk, and policy classification',
      'Approval path routing and escalation',
      'Decision logging with structured status tracking',
      'Dashboard-ready reporting for spend and policy visibility'
    ],
    aiUsage: [
      'Extract the request purpose, category, and cost or risk indicators from the submitted fields, returning a structured recommendation and rationale.',
      'Compare the supplied details with configured policy guidance and flag missing or conflicting information for the approver.',
      'Use deterministic threshold rules and an authorized human decision for routing and approval; the model cannot approve or reject a purchase.'
    ],
    safetyNotes: [
      'Validate request identifiers, amounts, and required fields before model processing; send incomplete submissions back for correction.',
      'Version policy thresholds and record the policy version, recommendation, approver, decision, and timestamp with each approval event.',
      'Minimize vendor and requester details sent to the model, and keep reporting exports separate from the operational approval record.'
    ],
    nextImprovements: [
      'Move approval logic into policy tables with better governance.',
      'Broaden dashboard coverage for spend exception reporting.',
      'Improve request versioning and reviewer note tracking.'
    ],
    implementationNotes: [
      'Use explicit policy tables for approval thresholds rather than embedding logic only in the workflow layer.',
      'Keep human sign-off mandatory for final decisions and preserve a clear audit trail for each approver action.',
      'Separate the operational record from analytics exports so reporting remains lightweight and reviewable.'
    ],
    diagram: 'ai-procurement-approval.svg'
  },
  {
    slug: 'ai-booking-agent',
    title: 'AI Booking Agent',
    maturity: 'portfolio implementation',
    summary: 'Portfolio design for a conversational booking assistant that extracts request details, checks Cal.com availability, confirms booking intent, and stores session state in Supabase.',
    stack: ['Make.com', 'OpenAI', 'Cal.com', 'Supabase', 'Telegram', 'Gmail'],
    pattern: 'AI conversation to operational booking action',
    status: 'Portfolio implementation; integrations are represented as a build target, not a client deployment.',
    credibilityNote: 'Built as a portfolio implementation to demonstrate the automation architecture, data flow, and integration pattern.',
    highlights: [
      'Conversation-driven booking flow',
      'OpenAI intent and entity extraction',
      'Cal.com availability and booking',
      'Supabase state and contact records',
      'Telegram and Gmail confirmation loop'
    ],
    businessProblem:
      'A booking conversation can omit the service, preferred time, or time zone. Staff must resolve those gaps, check live availability, and confirm the final details before creating a reservation; treating free text as a complete booking can create avoidable errors.',
    solutionOverview:
      'The portfolio design turns a chat request into structured service, date, time, time-zone, and contact fields. It asks about missing details, checks Cal.com as the availability source, and creates a booking only after the requester confirms the offered slot. Supabase tracks conversation state; Telegram or Gmail carries the resulting confirmation.',
    workflowSequence: [
      'Capture message and extract booking intent',
      'Validate customer and scheduling details',
      'Check provider availability',
      'Create booking record and confirmation',
      'Store state and follow-up messages'
    ],
    keyAutomations: [
      'Natural-language request parsing and entity extraction',
      'Availability and booking validation',
      'Customer/session state persistence',
      'Confirmation messages through chat and email',
      'Fallback handling for edge-case or unsupported booking requests'
    ],
    aiUsage: [
      'Identify booking intent and extract the requested service, date, time, time zone, and contact details from the message.',
      'Normalize date and time expressions, then ask a focused follow-up when a required field is missing or ambiguous.',
      'Prepare a concise confirmation summary for the requester; Cal.com, not the model, determines availability and creates the reservation.'
    ],
    safetyNotes: [
      'Recheck Cal.com availability immediately before booking and use an idempotency key so retries do not create duplicate reservations.',
      'Show the service, date, time, and time zone back to the requester and require explicit confirmation before creating the booking.',
      'Store only the contact and session fields needed to complete the request; restrict access to message logs and set a retention period.'
    ],
    nextImprovements: [
      'Add stronger booking validation and human fallback paths.',
      'Reduce state drift between conversation sessions and booking records.',
      'Expand retrieval of calendar availability constraints and buffer rules.'
    ],
    implementationNotes: [
      'Treat AI as a front-end interpreter, not as the source of truth for scheduling state.',
      'Persist session context with clear retries and guardrails for ambiguous or incomplete booking requests.',
      'Keep availability and booking actions in the scheduling platform, with the assistant layered above it.'
    ],
    diagram: 'ai-booking-agent.svg'
  },
  {
    slug: 'ai-content-operations-approval-pipeline',
    title: 'AI Content Operations & Approval Pipeline',
    maturity: 'portfolio implementation',
    summary: 'Portfolio design for a human-reviewed content workflow that tracks briefs in Notion, uses Gemini for structured drafts, routes review through Slack, and archives approved documents in Google Drive.',
    stack: ['Notion', 'Gemini', 'Make.com', 'Slack', 'Google Docs', 'Google Drive'],
    pattern: 'Human-in-the-loop AI content operations',
    status: 'Portfolio implementation; not presented as a deployed client workflow.',
    credibilityNote: 'Built as a portfolio implementation to demonstrate the automation architecture, data flow, and integration pattern.',
    highlights: [
      'Notion content database and status lifecycle',
      'Gemini draft generation',
      'Slack review with approval or revision routing',
      'Revision loop control',
      'Google Docs/Drive output archive'
    ],
    businessProblem:
      'Briefs, drafts, reviewer comments, and approval state can become disconnected across documents and chat. That makes it difficult to identify the current version, distinguish requested edits from approval, and confirm which material is cleared for publication.',
    solutionOverview:
      'The design treats the Notion record as the brief and workflow state, asks Gemini to draft against its structured fields, and uses Make.com to route the draft and review decision through Slack. An authorized human approval moves the selected version to Google Docs and Drive; revisions remain linked to their source brief.',
    workflowSequence: [
      'Store content brief and approval state',
      'Generate draft with AI support',
      'Route draft for review in chat or task channel',
      'Approve, revise, or reject the draft',
      'Archive final output and update status'
    ],
    keyAutomations: [
      'Content intake and status tracking in a database',
      'AI draft generation and rewrite support',
      'Approval or revision routing through a collaboration channel',
      'Version lifecycle handling and archive updates',
      'Output delivery to document and drive storage'
    ],
    aiUsage: [
      'Generate a first draft from approved brief fields, following the requested format, audience, and tone constraints.',
      'Revise specific passages in response to reviewer comments and flag missing source facts rather than inventing them.',
      'Keep approval state under the control of an authorized reviewer; AI drafts and suggestions never publish or approve content.'
    ],
    safetyNotes: [
      'Use distinct draft, revision, approved, and rejected states; only an authenticated reviewer action can set approval.',
      'Retain the source brief and each generated revision with clear version links, and restrict document access to intended reviewers.',
      'Send only approved brief fields to Gemini, and block publishing or archiving when the Slack event is ambiguous or cannot be tied to an authorized reviewer.'
    ],
    nextImprovements: [
      'Add tighter style and brand guardrails for generated drafts.',
      'Improve approval metadata and revision tracing across cycles.',
      'Connect outputs to broader operational reporting and scheduling.'
    ],
    implementationNotes: [
      'Treat approval status as an explicit workflow state, not as a side effect of message reactions alone.',
      'Use structured content fields and versioning so AI revisions remain traceable and reviewable.',
      'Keep final publishing decisions in a human-controlled approval checkpoint.'
    ],
    diagram: 'content-ops-approval.svg'
  },
  {
    slug: 'ai-inbox-triage-assistant',
    title: 'AI Inbox Triage Assistant',
    maturity: 'portfolio implementation',
    summary: 'Portfolio design for Gmail triage that classifies message intent, urgency, and reply need, records a review queue in Airtable, and prepares draft replies with Cal.com links for relevant meeting requests.',
    stack: ['Make.com', 'Gmail', 'OpenAI', 'Airtable', 'Cal.com'],
    pattern: 'AI productivity automation with scheduling handoff',
    status: 'Portfolio implementation; not presented as a deployed client workflow.',
    credibilityNote: 'Built as a portfolio implementation to demonstrate the automation architecture, data flow, and integration pattern.',
    highlights: [
      'Unread email monitoring',
      'AI categorization and reply-needed detection',
      'Airtable action queue',
      'Cal.com booking link insertion for meeting requests',
      'Draft-first safety model'
    ],
    businessProblem:
      'Shared inboxes mix routine updates, time-sensitive requests, and meeting inquiries. Without consistent labels and an action queue, staff must repeatedly scan messages and can overlook a request or send an incomplete reply.',
    solutionOverview:
      'The design reads messages from an authorized Gmail mailbox, produces a structured triage record in Airtable, and prepares a reply draft for staff review. For meeting requests, it can add a Cal.com link to the draft; it does not book a meeting or send email automatically.',
    workflowSequence: [
      'Monitor for new or unread messages',
      'Classify sender intent and urgency',
      'Create a structured triage record',
      'Prepare draft reply or booking action',
      'Queue for human review or delivery'
    ],
    keyAutomations: [
      'Inbox monitoring and message parsing',
      'Intent classification and action detection',
      'Structured record creation for triaged requests',
      'Draft response preparation and scheduling link insertion',
      'Queue management for follow-up review'
    ],
    aiUsage: [
      'Classify the message intent, urgency, and whether a reply or meeting follow-up appears necessary, with a reason attached to the label.',
      'Extract the sender’s request and relevant dates into a concise Airtable record; mark uncertain or incomplete cases for staff review.',
      'Draft a reply using facts present in the message and add a scheduling link only when a meeting is requested; never infer commitments or send the draft.'
    ],
    safetyNotes: [
      'Grant Gmail access only to the mailbox and operations required; keep outbound permissions disabled if the workflow only needs to create drafts.',
      'Minimize message content sent to the model and define retention and access controls for message text stored in Airtable.',
      'Require staff to verify recipients, facts, and any proposed meeting link before sending; route low-confidence and sensitive messages to manual review.'
    ],
    nextImprovements: [
      'Strengthen domain-specific routing and classification rules.',
      'Improve historical triage patterns and priority labeling.',
      'Add better exception handling for ambiguous or repetitive email traffic.'
    ],
    implementationNotes: [
      'Keep a human approval checkpoint for messages that request operational action.',
      'Normalize the incoming email data before deciding whether to draft or route a reply.',
      'Avoid auto-sending outbound messages without a clear approval and safety review layer.'
    ],
    diagram: 'ai-inbox-triage.svg'
  },
  {
    slug: 'roofing-lead-sales-automation',
    title: 'Roofing Lead & Sales Automation',
    maturity: 'portfolio implementation',
    summary: 'Portfolio design for roofing lead intake that normalizes webhook submissions, recommends job type and urgency, routes records through GoHighLevel, and prepares follow-up and reporting data.',
    stack: ['GoHighLevel', 'n8n', 'Supabase', 'OpenAI', 'Gmail', 'Looker Studio'],
    pattern: 'Vertical CRM and sales automation',
    status: 'Portfolio implementation; not presented as a deployed client workflow.',
    credibilityNote: 'Built as a portfolio implementation to demonstrate the automation architecture, data flow, and integration pattern.',
    highlights: [
      'Webhook-based lead capture',
      'AI urgency and job-type classification',
      'GHL pipeline update',
      'Emergency versus standard routing',
      'Monthly performance reporting'
    ],
    businessProblem:
      'Roofing inquiries may describe routine repairs, active leaks, or storm damage in unstructured language. If urgency, service area, and contact permission are not captured consistently, teams can misroute urgent work or follow up without the information needed to qualify a lead.',
    solutionOverview:
      'The design normalizes webhook submissions, asks AI to suggest a job category and urgency from the supplied details, and applies explicit routing rules before updating the GoHighLevel pipeline. Follow-up eligibility is checked separately, while Supabase retains structured event data for operational review and reporting.',
    workflowSequence: [
      'Capture lead and normalize source data',
      'Classify urgency and job type',
      'Update CRM and routing state',
      'Trigger follow-up sequence and notifications',
      'Report performance and backlog trends'
    ],
    keyAutomations: [
      'Webhook-based lead capture',
      'AI classification of service need and urgency',
      'CRM state updates and sales pipeline routing',
      'Follow-up and email sequencing',
      'Lead reporting and operational visibility'
    ],
    aiUsage: [
      'Extract the described roofing issue and service need, returning a suggested job category and urgency with the source details that support it.',
      'Flag missing service-area, damage, or contact information instead of filling gaps or estimating cost, arrival time, or repair scope.',
      'Summarize lead context for sales staff; explicit business rules and human review determine emergency routing and follow-up.'
    ],
    safetyNotes: [
      'Treat an AI urgency label as a triage signal, not a dispatch decision; send potential emergencies to a human queue and make no response-time or service guarantees.',
      'Check contact permission and opt-out status before starting a follow-up sequence; record the rule that allowed the sequence.',
      'Limit CRM and model access to the lead fields needed for routing, and log routing changes without exposing unnecessary personal details.'
    ],
    nextImprovements: [
      'Add richer sales stage and close-probability logic.',
      'Expand regional and service-type routing rules.',
      'Improve performance dashboards for lead quality and follow-up speed.'
    ],
    implementationNotes: [
      'Use the CRM as the operational source of truth while keeping a separate reporting layer for summaries and trend analysis.',
      'Model urgent and non-urgent service requests separately to avoid misrouting high-priority leads.',
      'Keep sales handoff logic visible and easy to revise when the team changes its service rules.'
    ],
    diagram: 'roofing-lead-sales.svg'
  },
  {
    slug: 'autonomous-multi-agent-crm',
    title: 'Autonomous Multi-Agent CRM',
    maturity: 'architecture blueprint',
    summary: 'Architecture blueprint for prospect research and CRM qualification using CrewAI, Apify, OpenAI, Telegram review, and Supabase audit records; not a deployed system.',
    stack: ['CrewAI OSS', 'FastAPI', 'OpenAI', 'Apify', 'Telegram', 'Supabase'],
    pattern: 'Multi-agent research and qualification system',
    status: 'Architecture blueprint only; no deployed production system is claimed.',
    credibilityNote: 'Architecture blueprint only. Included to demonstrate system design direction, not a deployed production system.',
    highlights: [
      'CrewAI orchestration',
      'Apify prospect research',
      'OpenAI qualification and opportunity analysis',
      'Telegram human approval',
      'Supabase audit and prospect records'
    ],
    businessProblem:
      'Prospect research can produce duplicate lookups, inconsistent qualification notes, and recommendations that are difficult to trace to their sources. An agent-based design needs clear task boundaries and a review gate before any prospect record or outreach action is approved.',
    solutionOverview:
      'This blueprint separates source gathering, evidence summarization, and qualification into bounded CrewAI roles. Apify gathers permitted source data; OpenAI compares cited facts with an explicit qualification rubric and returns a rationale and uncertainties. A reviewer accepts, edits, or rejects the result in Telegram before an approved record is written to Supabase with its source and review history.',
    workflowSequence: [
      'Research prospect and gather external context',
      'Analyze opportunity fit and qualification factors',
      'Queue human review for approval or revision',
      'Persist approved records and audit metadata',
      'Re-run the cycle with richer context over time'
    ],
    keyAutomations: [
      'Prospect research and enrichment',
      'AI qualification and opportunity analysis',
      'Review and approval checkpoints for human validation',
      'Structured persistence and audit recording',
      'Multi-step orchestration across data and messaging tools'
    ],
    aiUsage: [
      'Summarize prospect facts from retrieved sources and retain source references and retrieval dates alongside each claim.',
      'Assess the available evidence against explicit qualification criteria and return per-criterion reasoning, missing evidence, and uncertainty.',
      'Coordinate bounded research and analysis tasks; agents do not send outreach or persist an accepted CRM record without human review.'
    ],
    safetyNotes: [
      'Use only permitted sources, preserve provenance and retrieval timestamps, and avoid collecting personal data that is not needed for qualification.',
      'Require a human to verify evidence and approve or edit each result; the blueprint does not authorize automated outreach or unreviewed CRM writes.',
      'Define agent input/output contracts, scoped credentials, retry limits, and run logs so tool calls and persistence decisions can be reviewed.'
    ],
    nextImprovements: [
      'Build the core orchestration layer and data model first.',
      'Set explicit agent ownership and retry behavior.',
      'Add richer prospect scoring and CRM sync rules once the architecture is implemented.'
    ],
    implementationNotes: [
      'Use this as an architecture blueprint until the data model and approval rules are validated in a real environment.',
      'Keep each agent responsible for a narrow task and maintain explicit message payload contracts between them.',
      'Preserve a human review gate before any operational record is accepted into the CRM workflow.'
    ],
    diagram: 'multi-agent-crm-blueprint.svg'
  }
] as const;

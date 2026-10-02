export const projects = [
  {
    slug: 'dentalflow-saas',
    title: 'DentalFlow SaaS',
    maturity: 'flagship build',
    summary: 'Multi-tenant dental clinic build covering patient intake, message classification, provider-aware scheduling, appointment communications, follow-up, access controls, and lifecycle records in Supabase.',
    stack: [
      'Supabase',
      'n8n',
      'Google Apps Script',
      'Google Calendar',
      'Gmail',
      'Telegram',
      'Groq',
      'Google Sheets'
    ],
    pattern: 'Multi-tenant SaaS automation architecture',
    status: 'Flagship build; active portfolio development.',
    credibilityNote: 'Flagship portfolio build; active development does not imply a client deployment.',
    highlights: [
      'Clinic-level tenant isolation and role-based access',
      'Provider-aware appointment scheduling',
      'Classification of patient intent, visit type, and urgency',
      'Appointment communications and post-visit follow-up',
      'Supabase operational records with Sheets reserved for exports'
    ],
    businessProblem:
      'Appointment requests, provider calendars, and follow-up records can be spread across forms, inboxes, calendars, and spreadsheets. Staff then have to reconcile availability and patient state manually, increasing the risk of booking conflicts and missed follow-up.',
    solutionOverview:
      'The active build is designed to route each request through clinic-scoped intake, classify its intent and urgency, check provider and appointment constraints, and record lifecycle state in Supabase. Calendar updates and patient communications follow validated state changes; ambiguous scheduling cases remain with clinic staff.',
    workflowSequence: [
      'Capture request and normalize lead metadata',
      'Classify intent, urgency, and appointment type',
      'Enforce scheduling and access rules',
      'Send confirmations and reminders',
      'Track lifecycle updates and follow-up actions'
    ],
    keyAutomations: [
      'Lead intake and patient categorization',
      'Dentist-aware appointment planning and double-booking prevention',
      'Confirmation and reminder cycles across calendar and communication tools',
      'Review and follow-up automation for completed bookings and missed interactions',
      'Access-controlled record lifecycle enforcement through Supabase'
    ],
    aiUsage: [
      'Extract appointment intent, urgency, and requested visit category from inbound messages into normalized routing fields.',
      'Summarize the request for staff, while deterministic clinic rules and calendar state govern provider eligibility and availability.',
      'Send missing or low-confidence details to clarification or staff review instead of inferring booking information.'
    ],
    safetyNotes: [
      'Derive clinic tenancy from trusted workflow context and enforce clinic isolation with Supabase row-level policies and role-based write permissions.',
      'Send the model only scheduling fields needed for classification; exclude clinical notes and apply a defined retention policy to message content.',
      'Recheck provider availability when committing a booking, use idempotency controls for retries, and route conflicts to staff.'
    ],
    nextImprovements: [
      'Expand patient lifecycle states and escalation triggers.',
      'Connect more clinic-specific policy rules into a central decision matrix.',
      'Add tighter reporting on missed and reopened opportunities.'
    ],
    implementationNotes: [
      'Keep the operational data model canonical in Supabase and avoid using spreadsheets as the system of record.',
      'Treat scheduling logic and human approval rules as explicit business rules instead of hidden workflow assumptions.',
      'Sanitize patient information and limit workflow visibility to role-based access boundaries.'
    ],
    diagram: 'dentalflow-saas.svg'
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

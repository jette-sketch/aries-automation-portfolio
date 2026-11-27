import type { ProjectSlug } from './projectRoadmaps';

export type NodeSpec = readonly [title: string, kind: string, detail: string];
export type ScenarioSpec = readonly [label: string, input: string, events: readonly string[], outcome: 'completed' | 'review' | 'blocked', result: string];
export type WorkflowSpec = {
  nodes: readonly NodeSpec[];
  gate: number;
  exception: readonly [title: string, detail: string];
  normal: ScenarioSpec;
  alternate: ScenarioSpec;
};

// Scripted, synthetic examples of intended behavior. Never connect to external services.
export const projectWorkflows = {
  "dentalflow-saas": {
    "nodes": [
      [
        "Clinic request",
        "Trigger",
        "Receive a synthetic scheduling or operational request."
      ],
      [
        "Validate intent",
        "Validation",
        "Check structured fields and required scheduling context."
      ],
      [
        "Access & booking rules",
        "Decision",
        "The database must enforce tenant scope, authorization and booking invariants."
      ],
      [
        "Coordinate integrations",
        "Action",
        "Only an authorized operation can proceed to external coordination."
      ],
      [
        "Operator follow-up",
        "Output",
        "Expose the resulting state and follow-up requirement."
      ]
    ],
    "gate": 2,
    "exception": [
      "Reject unsafe request",
      "A cross-tenant request must not reach the mutation or communication boundary."
    ],
    "normal": [
      "Authorized booking",
      "Clinic A staff · Clinic A patient · available slot",
      [
        "Sample request received.",
        "Required fields validated.",
        "Simulated tenant and booking checks allow the request.",
        "Sample coordination step reached.",
        "Sample confirmed state shown to operator."
      ],
      "completed",
      "Illustrative authorized path completed. No actual booking or notification."
    ],
    "alternate": [
      "Cross-tenant request",
      "Clinic A staff · Clinic B patient",
      [
        "Sample request received.",
        "Required fields validated.",
        "Tenant mismatch detected.",
        "Request denied; downstream actions skipped."
      ],
      "blocked",
      "Cross-tenant operation blocked in this simulation. Native acceptance remains open."
    ]
  },
  "webhook-payload-validator": {
    "nodes": [
      [
        "Webhook event",
        "Trigger",
        "Receive a synthetic event object."
      ],
      [
        "Required fields",
        "Validation",
        "Check payload shape and nested required fields."
      ],
      [
        "Event & timestamp",
        "Decision",
        "Check event allowlist and freshness."
      ],
      [
        "Duplicate cache",
        "Validation",
        "Check the advisory process-local duplicate cache, not durable idempotency."
      ],
      [
        "Validation result",
        "Output",
        "Return structured validation errors or warnings."
      ]
    ],
    "gate": 2,
    "exception": [
      "Reject invalid event",
      "Unsupported or stale events fail validation; the utility does not authenticate the sender."
    ],
    "normal": [
      "Valid event",
      "event=lead.created · fresh timestamp · required fields present",
      [
        "Synthetic payload received.",
        "Required fields present.",
        "Event type and timestamp accepted.",
        "No sample duplicate warning.",
        "Structured valid result displayed."
      ],
      "completed",
      "Simulated validation result: valid. No webhook was sent."
    ],
    "alternate": [
      "Stale timestamp",
      "event=lead.created · expired timestamp",
      [
        "Synthetic payload received.",
        "Required fields present.",
        "Timestamp outside allowed window.",
        "Structured invalid result returned."
      ],
      "blocked",
      "Stale event rejected in the walkthrough."
    ]
  },
  "ai-autopilot-supervisor": {
    "nodes": [
      [
        "Synthetic failure",
        "Trigger",
        "Start with a disposable synthetic test failure."
      ],
      [
        "Reserve attempt",
        "Decision",
        "Require an available attempt within the configured budget."
      ],
      [
        "Candidate repair",
        "Action",
        "Use a predefined synthetic candidate rather than running a live agent."
      ],
      [
        "Isolated retest",
        "Validation",
        "Illustrate deterministic tests in an isolated repair scenario."
      ],
      [
        "Record & terminate",
        "Output",
        "Record a terminal result and preserve the evidence boundary."
      ]
    ],
    "gate": 1,
    "exception": [
      "Budget exhausted",
      "Stop without generating or executing another candidate."
    ],
    "normal": [
      "Repair within budget",
      "Disposable fixture · one attempt available",
      [
        "Synthetic failure detected.",
        "Sample attempt reserved.",
        "Predefined repair candidate selected.",
        "Scripted retest passes.",
        "Sample evidence and terminal result recorded."
      ],
      "completed",
      "Illustrative bounded repair completed. No code or agent executed."
    ],
    "alternate": [
      "No attempts left",
      "Disposable fixture · attempt budget exhausted",
      [
        "Synthetic failure detected.",
        "No remaining attempts.",
        "Further repair denied."
      ],
      "blocked",
      "Attempt budget exhausted; no additional candidate run."
    ]
  },
  "social-presence-automation": {
    "nodes": [
      [
        "Candidate intake",
        "Trigger",
        "Receive a sample content candidate."
      ],
      [
        "Validate fields",
        "Decision",
        "Reject invalid required fields before candidate persistence."
      ],
      [
        "Candidate & audit",
        "Action",
        "Illustrate atomic persistence and duplicate handling."
      ],
      [
        "Assess & validate",
        "Validation",
        "Model output must pass structured validation and deterministic policy."
      ],
      [
        "Authorized review",
        "Review",
        "Progress only to authorized review, not automatic publication."
      ]
    ],
    "gate": 1,
    "exception": [
      "Reject malformed candidate",
      "No candidate or associated state-change audit is created for this invalid input."
    ],
    "normal": [
      "Ready for review",
      "Synthetic candidate · required fields present",
      [
        "Sample candidate received.",
        "Input checks pass.",
        "Sample candidate and audit recorded together.",
        "Sample assessment and policy checks pass.",
        "Queued for authorized review."
      ],
      "review",
      "Ready for human review. No publishing occurred."
    ],
    "alternate": [
      "Missing field",
      "Synthetic candidate · required source field absent",
      [
        "Sample candidate received.",
        "Required field absent.",
        "Candidate rejected before persistence."
      ],
      "blocked",
      "Validation failed; candidate persistence and downstream review skipped."
    ]
  },
  "clinicflow-operations-prototype": {
    "nodes": [
      [
        "Walk-in arrival",
        "Trigger",
        "Start with a fictional reception visit."
      ],
      [
        "Registration",
        "Decision",
        "Require the fields needed to route a sample visit."
      ],
      [
        "Queue number",
        "Action",
        "Issue an illustrative deterministic queue number."
      ],
      [
        "Route & call",
        "Action",
        "Progress through fictional service and queue states."
      ],
      [
        "Completion",
        "Output",
        "Show sample completion and administrative follow-up."
      ]
    ],
    "gate": 1,
    "exception": [
      "Return to reception",
      "Incomplete registration needs staff correction before queue issuance in this illustrative scenario."
    ],
    "normal": [
      "Complete walk-in",
      "Fictional visitor · service selected",
      [
        "Sample walk-in arrives.",
        "Registration complete.",
        "Demo queue number assigned.",
        "Sample service routing and call shown.",
        "Demo visit marked completed."
      ],
      "completed",
      "Synthetic reception journey complete. No clinical action or real patient record."
    ],
    "alternate": [
      "Incomplete registration",
      "Fictional visitor · missing service",
      [
        "Sample walk-in arrives.",
        "Required service missing.",
        "Return to staff registration."
      ],
      "review",
      "Staff correction required. This exception is illustrative, not a verified prototype feature."
    ]
  },
  "ai-procurement-approval-system": {
    "nodes": [
      [
        "Purchase request",
        "Trigger",
        "Collect a fictional purchase request."
      ],
      [
        "Validate & classify",
        "Validation",
        "Check fields and prepare a sample risk recommendation."
      ],
      [
        "Approval policy",
        "Decision",
        "Apply configured thresholds and require an authorized human decision."
      ],
      [
        "Decision record",
        "Action",
        "Illustrate logging the human-approved decision."
      ],
      [
        "Spend reporting",
        "Output",
        "Show a sample reporting record; reporting never authorizes purchases."
      ]
    ],
    "gate": 2,
    "exception": [
      "Approval withheld",
      "A model recommendation does not authorize a purchase. Stop before finalization."
    ],
    "normal": [
      "Human-approved request",
      "Synthetic request · policy match · reviewer approves",
      [
        "Sample purchase request received.",
        "Fields and risk classification checked.",
        "Sample authorized reviewer approves.",
        "Illustrative decision record created.",
        "Sample reporting entry displayed."
      ],
      "completed",
      "Illustrative approval recorded. No purchase or payment occurred."
    ],
    "alternate": [
      "Reviewer declines",
      "Synthetic request · policy requires human approval · declined",
      [
        "Sample purchase request received.",
        "Fields and risk classification checked.",
        "Reviewer declines request.",
        "Approval withheld; purchase progression blocked."
      ],
      "blocked",
      "Human decision prevents finalization. No purchase occurred."
    ]
  },
  "ai-booking-agent": {
    "nodes": [
      [
        "Booking message",
        "Trigger",
        "Capture a fictional booking message."
      ],
      [
        "Extract & confirm details",
        "Validation",
        "Validate service, date, time and timezone; resolve ambiguities."
      ],
      [
        "Availability & consent",
        "Decision",
        "Require provider availability and explicit requester confirmation."
      ],
      [
        "Booking record",
        "Action",
        "Illustrate the booking creation boundary."
      ],
      [
        "Confirmation",
        "Output",
        "Show an example confirmation and session state."
      ]
    ],
    "gate": 2,
    "exception": [
      "Offer another slot",
      "Do not create a reservation when the requested slot is unavailable."
    ],
    "normal": [
      "Available slot",
      "Sample consultation · confirmed time · slot available",
      [
        "Sample booking message received.",
        "Required details clarified.",
        "Sample slot available and requester confirms.",
        "Illustrative booking record created.",
        "Sample confirmation shown."
      ],
      "completed",
      "Illustrative booking completed. No real calendar event was created."
    ],
    "alternate": [
      "Slot unavailable",
      "Sample consultation · requested slot unavailable",
      [
        "Sample booking message received.",
        "Required details clarified.",
        "Requested slot is unavailable.",
        "Alternative slot required; no booking created."
      ],
      "review",
      "Return to scheduling selection. No reservation made."
    ]
  },
  "ai-content-operations-approval-pipeline": {
    "nodes": [
      [
        "Content brief",
        "Trigger",
        "Start with a fictional structured brief."
      ],
      [
        "Draft content",
        "Action",
        "Use a predefined example draft, not a live model."
      ],
      [
        "Reviewer decision",
        "Decision",
        "Only the authorized reviewer approves the selected version."
      ],
      [
        "Archive version",
        "Action",
        "Illustrate preserving the approved document and version link."
      ],
      [
        "Update status",
        "Output",
        "Show the resulting approval state; no automatic publishing."
      ]
    ],
    "gate": 2,
    "exception": [
      "Revision requested",
      "Return the draft for revision; it is not approved for archival as final."
    ],
    "normal": [
      "Draft approved",
      "Sample brief · revision v2 · reviewer approves",
      [
        "Sample brief loaded.",
        "Predefined draft prepared.",
        "Sample reviewer approves v2.",
        "Approved version represented in archive.",
        "Sample status updated."
      ],
      "completed",
      "Illustrative approved version archived. No real document or post created."
    ],
    "alternate": [
      "Revision needed",
      "Sample brief · reviewer requests edits",
      [
        "Sample brief loaded.",
        "Predefined draft prepared.",
        "Reviewer requests edits.",
        "Revision required; final archive skipped."
      ],
      "review",
      "Draft returned for revision, not publication."
    ]
  },
  "ai-inbox-triage-assistant": {
    "nodes": [
      [
        "Inbox message",
        "Trigger",
        "Receive a fictional incoming message."
      ],
      [
        "Intent & urgency",
        "Validation",
        "Classify the sample intent and detect reply need."
      ],
      [
        "Review eligibility",
        "Decision",
        "Ambiguous or sensitive messages require manual review."
      ],
      [
        "Prepare draft",
        "Action",
        "Illustrate a draft response with scheduling link only if relevant."
      ],
      [
        "Human queue",
        "Review",
        "Provide a structured review entry; never auto-send."
      ]
    ],
    "gate": 2,
    "exception": [
      "Manual triage",
      "Uncertain or sensitive information is routed to staff without generating an unreviewed reply."
    ],
    "normal": [
      "Meeting inquiry",
      "Fictional sender · asks for a meeting",
      [
        "Sample email received.",
        "Meeting request identified.",
        "Sample message eligible for draft preparation.",
        "Illustrative scheduling-link draft prepared.",
        "Queued for staff review."
      ],
      "review",
      "Draft ready for review. No email sent."
    ],
    "alternate": [
      "Ambiguous request",
      "Fictional sender · unclear and sensitive request",
      [
        "Sample email received.",
        "Intent ambiguous.",
        "Manual-review rule triggered.",
        "Queued for manual triage without draft."
      ],
      "review",
      "Manual triage required. No email sent."
    ]
  },
  "roofing-lead-sales-automation": {
    "nodes": [
      [
        "Lead capture",
        "Trigger",
        "Receive a fictional roofing inquiry."
      ],
      [
        "Urgency suggestion",
        "Validation",
        "Extract service need and urgency as a triage signal."
      ],
      [
        "Routing rule",
        "Decision",
        "Use explicit emergency versus standard rules; staff owns dispatch."
      ],
      [
        "Standard follow-up",
        "Action",
        "Illustrate CRM routing and permitted estimate follow-up."
      ],
      [
        "Review pipeline",
        "Output",
        "Show the sample lead status and reporting context."
      ]
    ],
    "gate": 2,
    "exception": [
      "Emergency staff alert",
      "Route possible emergency to staff; skip standard follow-up and make no dispatch guarantee."
    ],
    "normal": [
      "Standard estimate",
      "Fictional lead · routine roof inspection · contact permitted",
      [
        "Sample inquiry captured.",
        "Routine estimate suggested.",
        "Standard routing rule selected.",
        "Sample follow-up path displayed.",
        "Sample pipeline state shown."
      ],
      "completed",
      "Standard lead path illustrated. No CRM update or message sent."
    ],
    "alternate": [
      "Active roof leak",
      "Fictional lead · active leak",
      [
        "Sample inquiry captured.",
        "Potential emergency suggested.",
        "Emergency routing rule selected.",
        "Staff alert path shown; routine sequence skipped."
      ],
      "review",
      "Human dispatch review required. No alert sent or dispatch promised."
    ]
  },
  "autonomous-multi-agent-crm": {
    "nodes": [
      [
        "Research input",
        "Trigger",
        "Use fictional prospect facts from a permitted sample source."
      ],
      [
        "Qualification",
        "Validation",
        "Compare sample facts to a rubric with provenance and uncertainty."
      ],
      [
        "Human approval",
        "Decision",
        "Require a reviewer to accept or edit the proposed result."
      ],
      [
        "Approved record",
        "Action",
        "Illustrate persistence of an approved record and audit metadata."
      ],
      [
        "CRM handoff",
        "Output",
        "Show the planned approved record handoff; no outreach."
      ]
    ],
    "gate": 2,
    "exception": [
      "Evidence review",
      "Insufficient evidence or rejected approval prevents accepted-record persistence."
    ],
    "normal": [
      "Reviewer accepts",
      "Synthetic prospect · complete sample evidence · approved",
      [
        "Sample research input loaded.",
        "Sample rubric evaluated.",
        "Reviewer accepts the result.",
        "Illustrative approved record prepared.",
        "Sample CRM handoff displayed."
      ],
      "completed",
      "Blueprint walkthrough only. No prospect lookup, CRM write or outreach occurred."
    ],
    "alternate": [
      "Insufficient evidence",
      "Synthetic prospect · missing source support",
      [
        "Sample research input loaded.",
        "Evidence gap flagged.",
        "Reviewer withholds approval.",
        "Returned for evidence review."
      ],
      "review",
      "No accepted record or outreach."
    ]
  },
  "autom8urbiz-governance": {
    "nodes": [
      [
        "Action proposal",
        "Trigger",
        "An agent proposes a fictional scoped action."
      ],
      [
        "Contract validation",
        "Validation",
        "Check proposed action against the defined scope."
      ],
      [
        "Owner authorization",
        "Decision",
        "Require owner approval and check prior execution before allowing an effect."
      ],
      [
        "Bounded effect",
        "Action",
        "Illustrate an approved synthetic effect."
      ],
      [
        "Audit outcome",
        "Output",
        "Show the sample action lifecycle evidence."
      ]
    ],
    "gate": 2,
    "exception": [
      "Deny execution",
      "No approved scope means no consequential effect."
    ],
    "normal": [
      "Owner-approved action",
      "Synthetic action · in scope · approved · unused identity",
      [
        "Sample proposal received.",
        "Action contract matches scope.",
        "Sample owner approval and identity accepted.",
        "Illustrative bounded effect reached.",
        "Sample audit outcome shown."
      ],
      "completed",
      "Synthetic governance path only; native database enforcement is not qualified."
    ],
    "alternate": [
      "Approval missing",
      "Synthetic action · in scope · no owner approval",
      [
        "Sample proposal received.",
        "Action contract matches scope.",
        "Owner approval missing.",
        "Execution denied."
      ],
      "blocked",
      "No effect executed; no external tool invoked."
    ]
  },
  "secretaryflow": {
    "nodes": [
      [
        "Personal task",
        "Trigger",
        "Receive a fictional non-confidential reminder request."
      ],
      [
        "Interpret & validate",
        "Validation",
        "Convert sample intent into a proposed task and schedule."
      ],
      [
        "Confirm intent",
        "Decision",
        "Require clarification for ambiguous or consequential changes."
      ],
      [
        "Persist & schedule",
        "Action",
        "Illustrate authoritative task state and reminder scheduling."
      ],
      [
        "Reminder outcome",
        "Output",
        "Show a sample reminder and delivery outcome without contacting anyone."
      ]
    ],
    "gate": 2,
    "exception": [
      "Ask for clarification",
      "Keep ambiguous requests uncommitted until the user confirms the intended task and time."
    ],
    "normal": [
      "Clear reminder",
      "Sample personal task · explicit date and time · confirmed",
      [
        "Sample request captured.",
        "Task and time validated.",
        "Sample intent confirmed.",
        "Illustrative task and reminder schedule recorded.",
        "Sample reminder outcome displayed."
      ],
      "completed",
      "Architecture walkthrough only. No task stored or real reminder sent."
    ],
    "alternate": [
      "Ambiguous time",
      "Sample personal task · unclear date or time",
      [
        "Sample request captured.",
        "Ambiguous time flagged.",
        "Confirmation cannot be established.",
        "Clarification required; scheduling skipped."
      ],
      "review",
      "No reminder scheduled. Foundation and implementation remain open."
    ]
  }
} satisfies Record<ProjectSlug, WorkflowSpec>;

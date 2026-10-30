# Social Presence Automation

**Maturity:** Active engineering build; core ingestion and review controls are described as implemented and tested.

**Production Verified: No.** Downstream media processing and publishing remain incomplete.

[Portfolio case study](https://aries-automation-portfolio.vercel.app/projects/social-presence-automation) | [Evidence index](README.md)

## Deterministic ingestion and auditability

The public case study describes a typed ingestion boundary that validates candidate content before persistence. PostgreSQL records candidate state and immutable audit evidence in a transaction.

| Boundary | Publicly reported behavior |
| --- | --- |
| Input validation | Valid candidate ingestion tested; malformed candidates rejected. |
| Duplicate handling | Duplicate ingestion resolves idempotently; concurrent duplicate requests produce one canonical candidate. |
| Identity conflicts | Conflicting reuse of an ingestion identity fails explicitly. |
| State and audit | Candidate state and its audit event commit atomically. |
| Structured AI assessment | Assessment output is subject to strict schema validation, with validation paths reported as tested. |
| Disclosure/IP policy | Sensitive-data scanning and disclosure-policy paths are reported as tested; policy evaluation remains deterministic. |

The guiding principle is that retries repeat intent without duplicating consequences. Audit evidence should accompany the state change atomically.

## AI trust boundary

AI can assess content and return recommendations. Its output is untrusted input:

AI assessment -> Strict schema validation -> Deterministic policy evaluation -> Authorization -> Downstream action

Validation covers schema, values, business rules, authorization, and consequences. Sensitive-data scanning operates independently of model opinion. Policy failure blocks progression; AI cannot authorize, override policy, bypass validation, or publish based on a recommendation.

The flow describes an authorization boundary, not evidence of completed publishing. Media processing, watermark handling, and downstream publishing remain in progress.

## Codex's role and evidence limits

The public Codex note describes assistance with implementation and inspection. Acceptance criteria, deterministic validation, transactional behavior, concurrency tests, and policy enforcement establish the stated correctness boundary. The cross-project method includes regression testing and evidence review.

The public evidence covers core ingestion, duplicate/concurrency, and review-policy paths. It does not claim exhaustive adversarial testing or a completed production publishing system. No test counts or new verification results are added here.

## Factual sources

- [Project data](../../data/projects.ts), `social-presence-automation`: `solutionOverview`, `workflowSequence`, `safetyNotes`, `social.evidence`, `social.aiFlow`, `social.lessons`, `social.currentState`, and `social.codexNote`.
- [Case-study template](../../app/projects/%5Bslug%5D/page.tsx): ingestion, evidence, AI boundary, disclosure/IP review, and Codex sections.
- [Building with Codex component](../../components/BuildingWithCodex.tsx): Social Presence example and AI validation principle.
- [Conceptual architecture diagram](../../public/diagrams/social-presence-automation.svg).

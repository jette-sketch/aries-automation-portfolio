# Building with Codex

Codex is an engineering collaborator within a controlled workflow. Aries defines requirements, acceptance criteria, architecture, security boundaries, and validation; reviews evidence; and makes deployment decisions.

[Portfolio engineering method](https://aries-automation-portfolio.vercel.app/#building-with-codex) | [Evidence index](README.md)

## Core engineering loop

Requirement -> Acceptance Criteria -> Architecture -> Codex-Assisted Implementation -> Automated/Targeted Testing -> Evidence Review -> Root-Cause Fix -> Regression Test -> Deployment Verification

| Phase | Purpose |
| --- | --- |
| Define | Establish requirements, acceptance criteria, architecture, and constraints before implementation. |
| Build & Verify | Use Codex for implementation support, run automated or targeted tests, and review evidence against acceptance criteria. |
| Correct & Ship | Fix the root cause, run relevant regressions, and verify staging or deployment behavior. |

Implementation is not considered complete because the code looks correct or compiles. Verification depth follows scope and risk, including integration behavior, runtime checks, responsive review, and deployment checks where applicable. Production verification remains distinct from local build success or deployment availability.

## Diagnose failures from evidence

Fail -> Inspect evidence -> Identify the failing layer -> Form a hypothesis -> Test -> Fix the root cause -> Retest -> Run relevant regression

The documented method uses observed failures to guide investigation and correction. Codex assists inspection and debugging; reviewed results determine whether the acceptance criteria have been met.

## Keep the AI boundary explicit

LLM output is untrusted input. Validate schema, values, business rules, authorization, and consequences. Deterministic rules stay in deterministic code; human review remains where judgment is required.

For consequential actions: AI proposes -> Validation -> Authorization -> Execution.

## Across the projects

- [DentalFlow](dentalflow.md): authoritative data, tenant/access enforcement, reliability hardening, and staging readiness.
- [Social Presence Automation](social-presence.md): deterministic ingestion, idempotency, atomic audit behavior, structured AI validation, and disclosure/IP policy enforcement.
- [ClinicFlow](clinicflow.md): translating field observations into requirements, queue behavior, operational states, synthetic-data safeguards, and a guided demonstration.

## Model routing as an efficiency practice

The portfolio presents model routing as a practical response to complexity, cost, and risk:

| Work scope | Portfolio routing example |
| --- | --- |
| Routine / mechanical | GPT-6 Luna |
| Engineering implementation | GPT-6.1 Terra |
| Complex / high-risk | GPT-6.1 Sol |

Higher-risk work can include security, architecture, database invariants, concurrency, migrations, and deployment-critical decisions. This is a workflow choice, not a benchmark or a claim of measured superiority. Model selection does not replace evidence review or Aries's responsibility for decisions.

## Factual sources and limits

- [Building with Codex component](../../components/BuildingWithCodex.tsx): phases, responsibilities, project examples, verification, failure handling, AI boundary, and routing table.
- [Project data](../../data/projects.ts): DentalFlow's `engineering.loop` and `engineering.lessons`; Social Presence's `social.codexNote` and `social.lessons`.
- [Case-study template](../../app/projects/%5Bslug%5D/page.tsx): DentalFlow's Codex process and Social Presence's Codex note.

This page documents the public engineering method. It adds no new test results and does not claim that Codex independently designed, authorized, or verified the systems.

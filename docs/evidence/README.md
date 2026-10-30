# Engineering Evidence

This hub connects the public portfolio's engineering decisions, reported verification, and current limitations. It summarizes the existing case studies; it does not publish the underlying project implementations or independently reproduce their tests.

## Evidence before completion

Code that looks correct or compiles is one signal. Completion depends on evidence appropriate to the change: targeted tests, regression checks, integration behavior, runtime and responsive review, and deployment verification where applicable. Aries defines requirements and acceptance criteria, reviews evidence, and remains responsible for deployment decisions.

## Evidence pages

| Page | Public maturity label | Focus |
| --- | --- | --- |
| [DentalFlow](dentalflow.md) | Flagship build | Evolution toward SaaS, access enforcement, reliability, and staging readiness |
| [Social Presence Automation](social-presence.md) | Engineering build | Deterministic ingestion, transactional audit behavior, and controlled AI assessment |
| [ClinicFlow Operations Prototype](clinicflow.md) | Deployed prototype | Field discovery, walk-in operations, and a synthetic browser-local demonstration |
| [Building with Codex](building-with-codex.md) | Engineering method | Requirements, implementation, diagnosis, correction, and verification |

## Distinct engineering states

| State | Meaning in this hub |
| --- | --- |
| Designed | Requirements, architecture, or constraints are described. |
| Built | Implementation exists for the stated scope. |
| Tested | Specific behavior has reported verification evidence; coverage and limitations still matter. |
| Deployed | A build is available in an environment, including a demonstration environment. |
| Production Verified | Operational behavior has been verified in production for the stated scope. A local build or deployed demo alone does not establish this state. |

These labels are not interchangeable. All three project case studies currently state **Production Verified: No**. Reported project verification is attributed to the public case-study content; these documents add no new test results or deployment certifications.

## Sanitization and disclosure

Publish only concepts and evidence summaries already supported by the cited public portfolio content. Keep credentials, integration endpoints, resource identifiers, personal phone numbers, and patient/customer/client records out of this hub. Examples must be synthetic.

Exact database definitions, database routines, access policies, migration internals, raw workflow exports, and proprietary implementation details remain outside the disclosure boundary. Avoid private repository names or filesystem paths. Do not add test counts, performance metrics, or outcome claims without a public factual source.

## Public sources

- [Project data](../../data/projects.ts): maturity, status, evidence summaries, and limitations for the three projects.
- [Building with Codex component](../../components/BuildingWithCodex.tsx): responsibility, verification, failure handling, and model routing.
- [Live portfolio](https://aries-automation-portfolio.vercel.app/).

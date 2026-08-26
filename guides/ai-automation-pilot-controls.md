# AI automation pilot controls for tax and accounting firms

This worksheet is a vendor-neutral starting point for a firm testing an AI-enabled workflow such as lead intake, appointment scheduling, document-request drafting, or internal knowledge retrieval. It is not a certification, legal opinion, tax advice, security assessment, or approval to process any particular data.

Use it alongside the firm's own policies, client commitments, and appropriate technical, legal, compliance, insurance, and tax advisers. A product listing in this repository does not establish that a product is suitable for any of these uses.

## Before a pilot: define a narrow, reviewable use case

Record the following before enabling a workflow:

| Field | Record |
| --- | --- |
| Intended task | One specific task, such as drafting a client follow-up or routing a new inquiry. |
| Firm owner | The accountable person who may pause or end the pilot. |
| Users and audience | Staff roles, clients, prospects, or other people who may receive or rely on an output. |
| Permitted inputs | The exact data types and systems allowed for the pilot. |
| Prohibited inputs | Data, documents, credentials, or decisions that are out of scope. |
| Required human review | Who reviews the output, when, and before which action. |
| Escalation path | What happens when the system is uncertain, fails, or receives a sensitive request. |
| Pilot boundary | Start date, end date, participant limit, and rollback approach. |

If the firm cannot state the permitted inputs and human-review point plainly, the use case is not yet bounded enough to pilot.

## Test representative work before relying on it

Build a small test set from firm-approved, appropriately handled examples. Include ordinary requests plus exceptions the workflow may encounter. Do not treat a polished demonstration as evidence that the workflow is reliable in the firm's real process.

For each test, retain the date, reviewer, expected outcome, actual output, whether a person intervened, and the final disposition.

| Test scenario | Expected safe behavior | Observed behavior | Reviewer | Result / follow-up |
| --- | --- | --- | --- | --- |
| Routine, in-scope request | Completes or drafts the intended next step. |  |  |  |
| Missing or ambiguous information | Requests clarification or routes to a person. |  |  |  |
| Sensitive client request | Follows the firm's approved escalation path. |  |  |  |
| Out-of-scope tax, legal, or financial question | Does not present an unreviewed professional conclusion; routes appropriately. |  |  |  |
| Service failure or unavailable system | Uses the documented fallback without losing the request. |  |  |  |

## Evaluate controls and operating readiness

The questions below help a firm document its own evaluation. They do not prove that a vendor, model, or workflow meets a requirement.

| Area | Questions to answer with current evidence |
| --- | --- |
| Purpose and limits | Is the task, intended user, and prohibited use explicit? |
| Data handling | What data enters the workflow, where does it go, who can access it, and how can it be removed or exported? |
| Human oversight | Which outputs require review, who is accountable, and how is a risky response prevented or corrected? |
| Accuracy and reliability | What tests were run, what failures occurred, and what threshold is acceptable for this bounded task? |
| Client communication | Is it clear when the client is interacting with automation, and is there a practical route to a person? |
| Security and access | What identity, permission, logging, device, and incident-response controls must the firm validate? |
| Vendor and change management | Where are the current terms, product documentation, support path, and material-change notices recorded? |
| Exit and continuity | How can the firm pause the workflow, preserve needed records, and recover when the tool is unavailable or replaced? |

## Approve, extend, or stop deliberately

At the pilot's end, record one decision: **adopt for the defined use case**, **extend with a specific control or test**, or **stop**. Record the evidence, unresolved risks, named owner, next review date, and conditions that would trigger reassessment. Do not convert a limited pilot into broader use without repeating the scope and evidence review.

## Primary-source references

- NIST describes its [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) as voluntary guidance for incorporating trustworthiness considerations into AI design, development, use, and evaluation. Its [Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf) discusses risk-management actions across governance, mapping, measurement, and management.
- The IRS points tax professionals to [Publication 4557, Safeguarding Taxpayer Data](https://www.irs.gov/pub/irs-pdf/p4557.pdf) and related resources for protecting taxpayer information. This worksheet does not replace those materials or establish compliance.

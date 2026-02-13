# Product Requirements Document (PRD): The Prism

## 1. Objective
Reduce "Time-to-Insight" for user feedback from 48 hours to <5 seconds using Generative AI.

## 2. Success Metrics
* **Latency:** < 3 seconds per transaction.
* **Accuracy:** > 90% correct classification of "High Urgency" items.
* **Cost:** < $0.01 per 1,000 feedbacks processed (using Gemini Flash).

## 3. Functional Requirements
* **FR-01:** System must accept text input via Webhook.
* **FR-02:** System must strip PII (Personally Identifiable Information) before sending to LLM.
* **FR-03:** LLM must output valid JSON. If JSON parsing fails, system defaults to "Low Urgency" to prevent crash.

## 4. Prompt Engineering
**System Prompt:**
"You are a Senior UX Researcher. Analyze the user feedback... [See full prompt in workflow]"

**Risk Mitigation:**
* *Hallucination:* Mitigated by setting temperature to 0.2.
* *Formatting Error:* Mitigated by post-processing Code Node.

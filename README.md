# 💎 The Prism: AI-Driven Customer Insight Engine

> **Live Status:** [Active Prototype]
> **Role:** Product Manager & Engineer
> **Tech Stack:** n8n, Google Gemini 1.5 Flash, Notion API, Tally Forms

## 🚀 The Problem
Product teams often drown in unstructured user feedback (support tickets, surveys, emails). Manual tagging is:
1.  **Slow:** Takes days to process thousands of responses.
2.  **Biased:** Humans tag inconsistently based on mood.
3.  **Lossy:** Critical bugs get buried in "feature requests."

## 💡 The Solution
**The Prism** is an automated ETL (Extract, Transform, Load) pipeline that ingests raw feedback in real-time, uses an LLM to "reason" about the content, and routes it instantly.

**Key Capabilities:**
* **Sentiment Analysis:** Classifies feedback as Positive, Neutral, Negative, or Toxic.
* **Urgency Routing:** Automatically detects "High Urgency" bugs (crashes, data loss) and alerts Slack.
* **Structured Storage:** Converts messy text into a clean Notion Database for roadmap planning.

## 🏗️ Architecture

### The Logic Flow:
1.  **Ingest:** Webhook triggers on new Tally form submission.
2.  **Analyze:** Google Gemini 1.5 Flash (chosen for low latency <2s) processes text.
3.  **Sanitize:** Custom JS script strips Markdown and enforces JSON schema.
4.  **Route:**
    * `High Urgency` → 🚨 Slack Alert + Archive to Notion.
    * `Low Urgency` → 🗄️ Archive to Notion only.

## 💻 How to Run This
1.  **Install n8n:** Self-hosted or Cloud.
2.  **Import Workflow:** Download `workflows/main_workflow.json` and import into n8n.
3.  **Credentials Needed:**
    * Google Gemini API Key (AI Studio)
    * Notion Integration Token
    * Tally API Token

## 🧠 Model Prompt Strategy
I used **Few-Shot Prompting** (implicitly via system instructions) to ensure strict JSON output.
* *See `docs/PRD.md` for full prompt engineering details.*



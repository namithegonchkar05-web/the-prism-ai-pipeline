/**
 * Post-Processing Script for Gemini 1.5 Flash
 * Removes markdown formatting (```json) often added by LLMs.
 */

for (const item of items) {
  try {
    let aiResponse = item.json.text || item.json.content || "";
    
    // Regex to clean markdown
    aiResponse = aiResponse.replace(/```json/g, "").replace(/```/g, "").trim();
    
    const data = JSON.parse(aiResponse);
    Object.assign(item.json, data);
    
  } catch (error) {
    item.json.error = error.message;
    item.json.urgency = "Low"; // Fallback safety
  }
}
return items;

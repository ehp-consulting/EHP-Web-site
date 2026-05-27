const { GoogleGenAI } = require('@google/genai');
async function test() {
  try {
    const ai = new GoogleGenAI({ apiKey: undefined });
    await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: [{ text: 'test' }] }
    });
    console.log("Success");
  } catch (e) {
    console.log("Error:", e.message);
  }
}
test();

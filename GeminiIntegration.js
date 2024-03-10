const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
async function geminiChat(message, history = []) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    try {

        const chat = model.startChat({
            history,
            generationConfig: {
                maxOutputTokens: 100,
            },
        });

        console.log(`asking about ${message}........`)

        const result = await chat.sendMessage(message);
        const response = await result.response;
        const text = response.text();
        
        console.log(text);

        return { text, history };

        console.log("Got it")
    } catch (error) {
        console.log(error);
    }
}


export default geminiChat;
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("userInput");

// Auto focus input when page loads (better mobile UX)
window.onload = () => {
    userInput.focus();
    showBotMessage("Hello 👋 I am the College Enquiry Bot. Ask me about admission, courses, fees, or contact details.");
};

// Send message on Enter key (mobile + desktop)
userInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    let input = userInput.value.trim().toLowerCase();

    if (input === "") return;

    showUserMessage(input);
    userInput.value = "";

    showTypingIndicator();

    setTimeout(() => {
        removeTypingIndicator();
        const response = getBotResponse(input);
        showBotMessage(response);
    }, 600); // Simulates thinking time
}

// Display user message
function showUserMessage(message) {
    const div = document.createElement("div");
    div.className = "user";
    div.innerHTML = `<b>You:</b> ${message}`;
    chatBox.appendChild(div);
    scrollChat();
}

// Display bot message
function showBotMessage(message) {
    const div = document.createElement("div");
    div.className = "bot";
    div.innerHTML = `<b>Bot:</b> ${message}`;
    chatBox.appendChild(div);
    scrollChat();
}

// Typing indicator
function showTypingIndicator() {
    const div = document.createElement("div");
    div.className = "bot";
    div.id = "typing";
    div.innerHTML = "Bot is typing...";
    chatBox.appendChild(div);
    scrollChat();
}

function removeTypingIndicator() {
    const typing = document.getElementById("typing");
    if (typing) typing.remove();
}

// Auto scroll with smooth behavior
function scrollChat() {
    chatBox.scrollTo({
        top: chatBox.scrollHeight,
        behavior: "smooth"
    });
}

// Bot logic (rule-based)
function getBotResponse(input) {
    if (input.includes("admission")) {
        return "Admissions are open from June to August. You can apply online through the official college website.";
    } 
    else if (input.includes("courses")) {
        return "We offer BSc IT, BCA, BCom, and MSc IT programs.";
    } 
    else if (input.includes("fees")) {
        return "The annual fee for BSc IT is approximately ₹45,000.";
    } 
    else if (input.includes("timing") || input.includes("hours")) {
        return "College timings are from 9:30 AM to 4:30 PM, Monday to Friday.";
    } 
    else if (input.includes("contact")) {
        return "You can contact us at contact@college.edu or call +91 98765 43210.";
    } 
    else if (input.includes("hello") || input.includes("hi")) {
        return "Hello! 😊 How can I help you today?";
    } 
    else {
        return "Sorry, I didn't understand that. Please ask about admission, courses, fees, or contact.";
    }
}

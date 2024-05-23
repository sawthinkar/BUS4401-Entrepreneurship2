// Initial questions to be embedded
const initialQuestions = [
    "How can we improve our mobile banking app for the Karen community?",
    "What kind of loan services would benefit you the most?",
    "What traditional banking services are missing from Phlon Bank?",
    "How can Phlon Bank better support Karen entrepreneurs?",
];

// Load questions from local storage or use initial ones
const loadQuestions = () => {
    const storedQuestions = JSON.parse(localStorage.getItem('discussionQuestions')) || initialQuestions;
    return storedQuestions;
};

// Save questions to local storage
const saveQuestions = (questions) => {
    localStorage.setItem('discussionQuestions', JSON.stringify(questions));
};

// Display questions in the comments section
const displayQuestions = () => {
    const commentsSection = document.getElementById('comments-section');
    const questions = loadQuestions();
    commentsSection.innerHTML = '';
    questions.forEach(question => {
        const div = document.createElement('div');
        div.textContent = question;
        commentsSection.appendChild(div);
    });
};

// Add a new question to the comments section
const addQuestion = (question) => {
    const questions = loadQuestions();
    questions.push(question);
    saveQuestions(questions);
    displayQuestions();
};

// Initial setup
document.addEventListener("DOMContentLoaded", () => {
    displayQuestions();
    // Example of how to add a new question
    // addQuestion("What new features would you like to see in our banking app?");
    
    const commentsSection = document.getElementById("comments-section");

    const form = document.createElement("form");
    const textarea = document.createElement("textarea");
    textarea.placeholder = "Share your thoughts...";
    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    
    form.appendChild(textarea);
    form.appendChild(submitButton);
    commentsSection.appendChild(form);

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const comment = textarea.value.trim();
        if (comment) {
            const commentDiv = document.createElement("div");
            commentDiv.textContent = comment;
            commentsSection.appendChild(commentDiv);
            textarea.value = "";
        }
    });
});

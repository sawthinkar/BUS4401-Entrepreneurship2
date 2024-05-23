document.addEventListener("DOMContentLoaded", () => {
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

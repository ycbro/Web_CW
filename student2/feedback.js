document.addEventListener('DOMContentLoaded', function() {
    const ratingStars = document.querySelectorAll(".stars i");
    const goTopButton = document.querySelector('.go-top-button');
    const feedbackForm = document.getElementById('feedback-form-container');
    const feedbackDialog = document.getElementById('feedback-dialog');
    const closeButton = document.querySelector('.close-btn');
    const feedbackResponse = document.getElementById('feedback-response');

    ratingStars.forEach((star, index) => {
        star.addEventListener("click", () => {
            ratingStars.forEach((star, idx) => {
                index >= idx ? star.classList.add("active") : star.classList.remove("active");
            });
        });
    });

    window.addEventListener('scroll', function() {
        goTopButton.style.display = window.scrollY > 200 ? "flex" : "none";
    });

    goTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Form validation
        let isValid = true;
        let messages = [];

        const formData = new FormData(feedbackForm);
        const firstName = formData.get('Firstname');
        const lastName = formData.get('Lastname');
        const email = formData.get('Email');
        const rate = formData.get('rate');
        const visit = formData.get('visit');
        const informative = formData.get('informative');
        const recommend = formData.get('recommend');
        const comments = feedbackForm.querySelector('.txtarea').value;
        const starRating = document.querySelectorAll(".stars i.active").length;

        // Validation checks
        if (!firstName.trim()) messages.push("First name is required.");
        if (!lastName.trim()) messages.push("Last name is required.");
        if (!email.trim()) messages.push("Email is required.");
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) messages.push("Please provide a valid email address.");
        if (!rate) messages.push("Please rate your overall experience.");
        if (!visit) messages.push("Please indicate if this was your first visit.");
        if (!informative) messages.push("Please indicate if the website was informative and easy to navigate.");
        if (!recommend) messages.push("Please indicate if you would recommend our services.");
        if (!comments.trim()) messages.push("Please leave a comment.");

        isValid = messages.length === 0;

        if (!isValid) {
            alert(messages.join("\n"));
            return;
        }
        feedbackResponse.innerHTML = `<div style="font-family: 'Poppins', sans-serif; color: #333;">
                                    <h3 style="color: #4CAF50;">Thank you for your feedback, ${firstName} ${lastName}!</h3>
                                    <p><strong>Email:</strong> <span style="color: #555;">${email}</span></p>
                                    <p><strong>Overall Experience:</strong> <span style="color: #555;">${rate}</span></p>
                                    <p><strong>First Visit:</strong> <span style="color: #555;">${visit}</span></p>
                                    <p><strong>Informative & Easy to Navigate:</strong> <span style="color: #555;">${informative}</span></p>
                                    <p><strong>Would Recommend:</strong> <span style="color: #555;">${recommend}</span></p>
                                    <p><strong>Comments:</strong> <span style="color: #555;">${comments}</span></p>
                                    <p><strong>Star Rating:</strong> <span style="color: #FFD700;">${starRating} out of 5</span></p>
                                  </div>`;
        feedbackDialog.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        feedbackDialog.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === feedbackDialog) {
            feedbackDialog.style.display = 'none';
        }
    });
});
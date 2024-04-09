document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('registration-form');
    const prevBtn = document.querySelector('.btn.prev');
    const nextBtn = document.querySelector('.btn.next');
    const submitBtn = document.querySelector('.btn.submit');
    const formSteps = document.querySelectorAll('.form-step');
    const progressSteps = document.querySelectorAll('.progress-steps li');

    let currentStep = 0;

    // Function to show the current step
    function showStep(stepIndex) {
        formSteps.forEach((step, index) => {
            if (index === stepIndex) {
                step.style.display = 'block';
            } else {
                step.style.display = 'none';
            }
        });

        // Update progress bar
        progressSteps.forEach((step, index) => {
            if (index < stepIndex) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });

        // Show or hide submit button based on step index
        if (stepIndex === formSteps.length - 1) {
            submitBtn.style.display = 'inline-block';
            nextBtn.style.display = 'none';
        } else {
            submitBtn.style.display = 'none';
            nextBtn.style.display = 'inline-block';
        }
    }

    // Show the initial step
    showStep(currentStep);

    // Event listener for the next button
    nextBtn.addEventListener('click', function() {
        if (currentStep < formSteps.length - 1) {
            currentStep++;
            showStep(currentStep);
            prevBtn.disabled = false;
        }
    });

    // Event listener for the previous button
    prevBtn.addEventListener('click', function() {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
            if (currentStep === 0) {
                prevBtn.disabled = true;
            }
        }
    });

    // Event listener for form submission (you can add your form submission logic here)
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted!');
        alert('Form submitted successfully!');
        // Complete the progress bar
        progressSteps[currentStep].classList.add('active');
    });
});

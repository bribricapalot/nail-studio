document.addEventListener('DOMContentLoaded', () => {
    let currentStep = 1;

    const steps = document.querySelectorAll('.step');
    const dots = document.querySelectorAll('.dots i');
    const backBtn = document.getElementById('back');
    const continueBtn = document.getElementById('continue');
    const actionButtons = document.getElementById('action-buttons');
    const stepTitle = document.getElementById('step-title');
    const stepEyebrow = document.getElementById('step-eyebrow');

    const titles = {
        1: 'Select Service',
        2: 'Select Date & Time',
        3: 'Your Information'
    };

    function updateStepUI() {
        // Show active step
        steps.forEach((step) => {
            step.classList.toggle('active', parseInt(step.dataset.step) === currentStep);
        });

        // Update dots progress
        dots.forEach((dot, idx) => {
            dot.classList.toggle('done', idx < currentStep);
        });

        // Update Header Text
        if (currentStep <= 3) {
            stepEyebrow.textContent = `Step ${currentStep} of 3`;
            stepTitle.textContent = titles[currentStep];
        }

        // Toggle Back Button Visibility
        if (currentStep > 1 && currentStep <= 3) {
            backBtn.classList.add('show');
        } else {
            backBtn.classList.remove('show');
        }

        // Button Label
        if (currentStep === 3) {
            continueBtn.textContent = 'Confirm Booking ↗';
        } else {
            continueBtn.textContent = 'Continue →';
        }

        // Hide Buttons on Confirmation
        if (currentStep === 4) {
            actionButtons.style.display = 'none';
            stepEyebrow.style.display = 'none';
            stepTitle.style.display = 'none';
        }
    }

    // Handle Next / Continue
    continueBtn.addEventListener('click', () => {
        if (currentStep === 1) {
            const selectedService = document.querySelector('input[name="service"]:checked');
            if (selectedService) {
                document.getElementById('summary-service').textContent = `${selectedService.value} (${selectedService.dataset.price})`;
            }
        }

        if (currentStep < 4) {
            currentStep++;
            updateStepUI();
        }
    });

    // Handle Back Button
    backBtn.addEventListener('click', () => {
        if (currentStep > 1) {
            currentStep--;
            updateStepUI();
        }
    });

    // Time Slot Selection
    const timeBtns = document.querySelectorAll('.times button');
    timeBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            timeBtns.forEach((b) => b.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });

    // Calendar Day Selection
    const dayBtns = document.querySelectorAll('.days button.available');
    dayBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            dayBtns.forEach((b) => b.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });
});
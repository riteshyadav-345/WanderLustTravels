// Navigation: Show only one section at a time
document.addEventListener('DOMContentLoaded', function () {
    function showSection(sectionId) {
        document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = (section.classList.contains('booking-form') ? 'flex' : 'block');
        }
        window.scrollTo(0, 0);
    }
    // Nav links and all buttons with data-section
    document.querySelectorAll('a[data-section], .main-btn, .book-btn, .btn[data-section]').forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.dataset.section) {
                e.preventDefault();
                showSection(this.dataset.section);
            }
        });
    });

    // Show section if hash is present or else hero at start
    if (window.location.hash && document.getElementById(window.location.hash.substring(1))) {
        showSection(window.location.hash.substring(1));
    } else {
        showSection('hero');
    }
});

// Destination Search Filtering
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('destinationSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            const q = searchInput.value.toLowerCase();
            document.querySelectorAll('.destination-card').forEach(card => {
                const text = card.innerText.toLowerCase();
                card.style.display = text.includes(q) ? '' : 'none';
            });
        });
    }
});

// Booking Form validation and confirmation
document.addEventListener('DOMContentLoaded', function () {
    const bookingBtn = document.getElementById("submitBooking");
    if (bookingBtn) bookingBtn.addEventListener("click", validateBookingForm);

    function validateBookingForm() {
        // Get elements & clear errors
        const name = document.getElementById("name"), nameErr = document.getElementById("nameError");
        const email = document.getElementById("email"), emailErr = document.getElementById("emailError");
        const mobile = document.getElementById("mobile"), mobileErr = document.getElementById("mobileError");
        const age = document.getElementById("age"), ageErr = document.getElementById("ageError");
        const departure = document.getElementById("departure"), depErr = document.getElementById("departureError");
        const returnDate = document.getElementById("returnDate"), retErr = document.getElementById("returnError");
        const destination = document.getElementById("destination"), destErr = document.getElementById("destinationError");
        let isValid = true;

        nameErr.textContent = emailErr.textContent = mobileErr.textContent = ageErr.textContent = depErr.textContent = retErr.textContent = destErr.textContent = "";

        if (name.value.trim() === "") { nameErr.textContent = "Name is required."; isValid = false; }
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email.value.trim() === "") { emailErr.textContent = "Email is required."; isValid = false; }
        else if (!emailPattern.test(email.value.trim())) { emailErr.textContent = "Invalid email format."; isValid = false; }
        const mobilePattern = /^[0-9]{10}$/;
        if (mobile.value.trim() === "") { mobileErr.textContent = "Mobile number is required."; isValid = false; }
        else if (!mobilePattern.test(mobile.value.trim())) { mobileErr.textContent = "Invalid mobile number format."; isValid = false; }
        if (age.value.trim() === "") { ageErr.textContent = "Age is required."; isValid = false; }
        else if (isNaN(age.value) || +age.value <= 0) { ageErr.textContent = "Invalid age."; isValid = false; }
        if (departure.value.trim() === "") { depErr.textContent = "Departure date is required."; isValid = false; }
        if (returnDate.value.trim() === "") { retErr.textContent = "Return date is required."; isValid = false; }
        else if (departure.value && returnDate.value && departure.value > returnDate.value) { retErr.textContent = "Return date must be after departure"; isValid = false; }
        if (destination.value.trim() === "") { destErr.textContent = "Destination is required."; isValid = false; }
        const confirmDiv = document.getElementById("bookingConfirmation");
        if (!isValid) {
            confirmDiv.style.display = "none";
            return;
        }
        confirmDiv.innerHTML = `<h3>Booking Confirmed!</h3>
            <p>Thank you <b>${name.value}</b>. Your trip to <b>${destination.value}</b> from <b>${departure.value}</b> to <b>${returnDate.value}</b> is confirmed.</p>
            <p>A confirmation has been sent to <b>${email.value}</b>.</p>`;
        confirmDiv.style.display = "block";
        document.getElementById('myForm').reset();
    }
});

// Contact Us form confirmation
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('contactName').value;
            const confirmation = document.getElementById('contactConfirmation');
            confirmation.innerHTML = `<h3>Message Sent!</h3><p>Thank you, <b>${name}</b>. We'll get back to you soon.</p>`;
            confirmation.style.display = 'block';
            contactForm.reset();
            setTimeout(() => { confirmation.style.display = 'none'; }, 4000);
        });
    }
});



document.addEventListener('DOMContentLoaded', function () {
    function showOnlyOneSection(sectionId) {
        document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = (section.classList.contains('booking-form') ? 'flex' : 'block');
        }
        window.scrollTo(0, 0);
    }

    // On page load: show hero + destinations + packages stacked
    document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
    ['hero', 'destinations', 'packages'].forEach(id => {
        const sec = document.getElementById(id);
        if (sec) sec.style.display = 'block';
    });

    // Navigation click: show only the clicked section
    document.querySelectorAll('a[data-section], .main-btn, .book-btn, .btn[data-section]').forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.dataset.section) {
                e.preventDefault();
                showOnlyOneSection(this.dataset.section);
            }
        });
    });
});




document.addEventListener('DOMContentLoaded', function () {
    function showOnlyOneSection(sectionId) {
        document.querySelectorAll('.section, .testimonials-section').forEach(sec => sec.style.display = 'none');
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = (section.classList.contains('booking-form') ? 'flex' : 'block');
        }
        window.scrollTo(0, 0);
    }

    // On page load, show hero, destinations, packages, AND testimonials stacked:
    document.querySelectorAll('.section, .testimonials-section').forEach(sec => sec.style.display = 'none');
    ['hero', 'destinations', 'packages'].forEach(id => {
        const sec = document.getElementById(id);
        if (sec) sec.style.display = 'block';
    });
    const testimonials = document.querySelector('.testimonials-section');
    if (testimonials) testimonials.style.display = 'block';

    // Navigation click: show only the clicked section, exclude testimonials nav
    document.querySelectorAll('a[data-section], .main-btn, .book-btn, .btn[data-section]').forEach(link => {
        link.addEventListener('click', function (e) {
            const target = this.dataset.section;
            if (!target) return;
            e.preventDefault();

            // Do NOT show testimonials on nav click even if asked
            if (target === 'testimonials' || target === 'testimonial' || target === 'testimonial-section') {
                return;
            }
            showOnlyOneSection(target);
        });
    });
});







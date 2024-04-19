function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var portfolio = document.getElementById('portfolio').value;
    var favColor = document.getElementById('favColor').value;
    var likeness = document.getElementById('likeness').value;
    var comments = document.getElementById('comments').value;
    var rating = document.getElementById('rating').value;
    var subscribe = document.getElementById('subscribe').checked ? 'Yes' : 'No';

    // Form validation
    if (name === '' || email === '' || portfolio === '' || favColor === '' || likeness === '' || comments === '' || rating === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Save form details to local storage
    localStorage.setItem('feedbackFormDetails', JSON.stringify({
        name: name,
        email: email,
        portfolio: portfolio,
        favColor: favColor,
        likeness: likeness,
        comments: comments,
        rating: rating,
        subscribe: subscribe
    }));

    // Display submitted details
    var detailsDiv = document.createElement('div');
    detailsDiv.innerHTML = `
        <h2>Submitted Details:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Portfolio:</strong> ${portfolio}</p>
        <p><strong>Favorite Color:</strong> <span style="color: ${favColor};">${favColor}</span></p>
        <p><strong>Likeness:</strong> ${likeness}</p>
        <p><strong>Comments:</strong> ${comments}</p>
        <p><strong>Rating:</strong> ${rating}</p>
        <p><strong>Subscribe to Newsletter:</strong> ${subscribe}</p>
    `;

    var submittedDetails = document.getElementById('submittedDetails');
    submittedDetails.innerHTML = '';
    submittedDetails.appendChild(detailsDiv);

    // Reset form after submission
    document.getElementById('feedbackForm').reset();

    // Alert when form submitted
    alert('Form submitted successfully!');
}

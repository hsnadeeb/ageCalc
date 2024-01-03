function calculateAge() {
    const dobInput = document.getElementById('dob');
    const ageOutput = document.getElementById('age');
    const additionalInfoOutput = document.getElementById('additionalInfo');

    const storedDOB = localStorage.getItem('dob');

    if (storedDOB) {
        dobInput.value = storedDOB;
    } else {
        localStorage.setItem('dob', dobInput.value);
    }

    if (dobInput.value !== '') {
        const dob = new Date(dobInput.value);
        const now = new Date();
        const ageInMilliseconds = now - dob;
        const ageInSeconds = ageInMilliseconds / 1000;
        const ageInYears = ageInSeconds / (60 * 60 * 24 * 365.25);

        ageOutput.textContent = `Your age is approximately ${ageInYears.toFixed(9)} years old.`;

        const dayOfWeek = dob.toLocaleDateString('en-US', { weekday: 'long' });
        additionalInfoOutput.textContent = `You were born on a ${dayOfWeek}.`;
    }
}

function resetForm() {
    document.getElementById('dob').value = '';
    document.getElementById('age').textContent = '';
    document.getElementById('additionalInfo').textContent = '';
}


setInterval(calculateAge, 1000);

calculateAge();



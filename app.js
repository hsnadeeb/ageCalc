function calculateAge() {
    const dobInput = document.getElementById('dob');
    const ageOutput = document.getElementById('age');
    const additionalInfoOutput = document.getElementById('additionalInfo');
    const yearsPassedOutput = document.getElementById('yearsPassed');
    const percentagePassedOutput = document.getElementById('percentagePassed');

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

        // Calculate the years passed
        const yearsPassed = now.getFullYear() - dob.getFullYear();
        yearsPassedOutput.textContent = `It has been ${yearsPassed} years since your birth.`;

        // Calculate the percentage of the current year passed
        const currentYearStart = new Date(now.getFullYear(), 0, 1); // January 1 of the current year
        const timePassedInCurrentYear = now - currentYearStart;
        const percentagePassed = (timePassedInCurrentYear / (365.25 * 24 * 60 * 60 * 1000)) * 100;
        percentagePassedOutput.textContent = `The current year is ${percentagePassed.toFixed(9)}% complete.`;
    }
}

function resetForm() {
    document.getElementById('dob').value = '';
    document.getElementById('age').textContent = '';
    document.getElementById('additionalInfo').textContent = '';
    document.getElementById('yearsPassed').textContent = '';
    document.getElementById('percentagePassed').textContent = '';
}

function updateCurrentDateTime() {
    const currentDateTimeOutput = document.getElementById('currentDateTime');
    const now = new Date();


    const options = { 
        timeZone: 'Asia/Kolkata', 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric', 
        timeZoneName: 'short' 
    };

    const formattedDateTime = now.toLocaleString('en-US', options);
    currentDateTimeOutput.textContent = `Current Date and Time (IST): ${formattedDateTime}`;
}


setInterval(calculateAge, 1000);
setInterval(updateCurrentDateTime, 1000);

calculateAge();
updateCurrentDateTime();

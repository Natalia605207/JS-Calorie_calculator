gsap.from("#main", {delay: 0.7, duration: 2.5, y: -150, ease: "back.out(1.7)", opacity: 0})

const calculateButton = document.querySelector("#calculate");
calculateButton.addEventListener('click', calculateCalories);

function calculateCalories (e) {
    e.preventDefault();
    const age = Number(document.querySelector('#age').value);
    const weight = Number(document.querySelector('#weight').value);
    const height = Number(document.querySelector('#height').value);
    const physicalActivityLevel = Number(document.querySelector('#physicalActivityLevel').value);

    const calories = document.querySelector('#calories');
    const resultWindow = document.querySelector('#result');

    if (age == "" || weight == "" || height == "") {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Please fill in your data',
            showConfirmButton: false,
            timer: 1700
            })
    }

    else if (isNaN(age) || isNaN(weight) || isNaN(height)) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Please enter a number',
            showConfirmButton: false,
            timer: 1700
            })
    }

    else if (age < 13 || age > 80) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Your age should be between 13 and 80!',
                showConfirmButton: false,
                timer: 1700
                })
        }
    
    else {
    let bmrMale = (88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * physicalActivityLevel;
    let bmrFemale = (447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * physicalActivityLevel;

    bmrMale = +bmrMale.toFixed();
    bmrFemale = +bmrFemale.toFixed();

    function check () {
        const variants = document.querySelectorAll('.gender');
        if (variants[0].checked) {
            calories.textContent = bmrMale;
        }

        else if (variants[1].checked) {
            calories.textContent = bmrFemale;
        }
    }

    check();

    resultWindow.style.display = 'flex';
}
}

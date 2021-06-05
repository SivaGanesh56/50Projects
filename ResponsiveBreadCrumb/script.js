const prev = document.getElementById('prev');
const next = document.getElementById('next');
const progress = document.querySelector('.progress');
const steps = document.querySelector('ul').childElementCount - 1;


let activeStep = 0;

const WIDTH = 20;

next.addEventListener('click', () => {
    if (activeStep < steps) {
        ++activeStep;
        progress.style.width = `${WIDTH * activeStep}%`;
        prev.disabled = false;
        prev.classList.remove('disable');
        if (activeStep === steps-1) {
            next.disabled = true;
            next.classList.add('disable');
        }
    }
});

prev.addEventListener('click', () => {
    if (activeStep > 0) {
        --activeStep;
        progress.style.width = `${WIDTH * activeStep}%`;
        next.disabled = false;
        next.classList.remove('disable');
    } else {
        prev.disabled = true;
        prev.classList.add('disable');
    }
})

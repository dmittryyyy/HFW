const stepForm = () => {
    const form = document.querySelector('.forms')
    const stepContent = document.querySelectorAll('.content__step');
    const progress = document.querySelector('.steps__chain-success');
    const progressLine = document.querySelector('.steps__chain');
    const steps = document.querySelectorAll('.steps__item');
    const prevBtn = document.querySelector('.buttons__prev');
    const nextBtn = document.querySelector('.buttons__next');
    const finishContent = document.querySelector('.finishPage');
    const finishBtn = document.querySelector('.buttons__btn_finish');

    form.addEventListener('submit', (e) => e.preventDefault());

    let formStep = 0;

    prevBtn.addEventListener('click', () => {
        formStep--
        steps[formStep + 1].classList.remove('steps__item_active');
        updateContentStep();
    })
    nextBtn.addEventListener('click', () => {
        if (formStep < steps.length - 1) {
            formStep++
            updateContentStep();
        }
    })

    const updateContentStep = () => {
        stepContent.forEach((item) => {
            item.classList.contains('content__step_active') && item.classList.remove('content__step_active');
        });

        stepContent[formStep].classList.add('content__step_active');
        steps[formStep].classList.add('steps__item_active');

        if (formStep === 0) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'block';
        }

        if (formStep === stepContent.length - 1) {
            nextBtn.innerHTML = 'Завершить';

            nextBtn.addEventListener('click', () => {
                form.style.display = 'none';
                nextBtn.innerHTML = 'Просто завершить регистрацию';
                prevBtn.style.display = 'none';
                finishContent.style.display = 'block';
                finishBtn.style.display = 'flex';
            });
        } else {
            nextBtn.innerHTML = 'Вперед';
        }

        const lineProgress = document.querySelectorAll('.steps__item_active');
        const result = ((lineProgress.length - 1) / (steps.length - 1) * 100 + '%');

        progress.style.width = result;
        progressLine.style.maxWidth = steps.length;

    }
    updateContentStep();
}

module.exports = stepForm;
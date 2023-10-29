document.addEventListener('DOMContentLoaded', () => {
    const numberElement = document.querySelectorAll('.numCategory');
    const targetElement = document.querySelector('.card');
    const targetNumber = [1000, 100, 2000, 1000];    // final values for each card element
    const incrementInterval = 100;      // increment interval in milliseconds

    const processNextElement = (i) => {
        let tn = targetNumber[i];
        let currentNumber = targetNumber[i] / 2;
        let halfwayNumber = (targetNumber[i]) * 9 / 10;

        const changeContent = () => {
            if (currentNumber < targetNumber[i]) {
                numberElement[i].innerHTML = currentNumber;
                setTimeout(increment, incrementInterval);
            }
            else {
                numberElement[i].innerHTML = targetNumber[i] + ' + ';
                // setTimeout(increment, incrementInterval);
            }
        };

        const increment = () => {
            if (currentNumber > halfwayNumber && (currentNumber < targetNumber[i])) {
                currentNumber += 11;
                changeContent();
            }
            else if (currentNumber < targetNumber[i] && targetNumber[i] >= 1000) {
                currentNumber += 111;
                changeContent(currentNumber, i);
            }
            else if (currentNumber < targetNumber[i] && targetNumber[i] < 1000) {
                currentNumber += 11;
                changeContent(currentNumber, i);
            }
        };

        setTimeout(increment, incrementInterval);
    };
    for (let i = 0; i < targetNumber.length; i++) {
        processNextElement(i);
    };


    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin
        threshold: 0.5, // When 50% of the element is visible, trigger the callback
    };

    // Create the Intersection Observer. This is copied from the chatGpt
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                observer.disconnect();
            }
        });
    }, options);
    observer.observe(targetElement);

});

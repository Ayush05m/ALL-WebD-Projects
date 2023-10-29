document.addEventListener('DOMContentLoaded', () => {
    const numberElement = document.querySelectorAll('.numCategory');
    const targetElement = document.querySelector('.card');
    const targetNumber = [1000, 100, 2000, 1000];    // final values for each card element
    const incrementInterval = 40;      // increment interval in milliseconds
    const animationDuration = 2000;
    const processNextElement = (i) => {
        let tn = targetNumber[i];
        let currentNumber = targetNumber[i] / 5 * 2;
        let halfwayNumber = (targetNumber[i]) * 9 / 10;
        const incrementStep = Math.floor((targetNumber[i] - currentNumber) / (animationDuration / incrementInterval));


        const changeContent = () => {
            if (currentNumber < targetNumber[i]) {
                numberElement[i].innerHTML = currentNumber;
                setTimeout(increment, incrementInterval);
            }
            else {
                numberElement[i].innerHTML = targetNumber[i] + ' + ';
            }
        };

        const increment = () => {
            if (currentNumber > halfwayNumber && (currentNumber < targetNumber[i])) {
                currentNumber += incrementStep;
                changeContent();
            }
            else if (currentNumber < targetNumber[i] && targetNumber[i] >= 1000) {
                currentNumber += incrementStep;
                changeContent(currentNumber, i);
            }
            else if (currentNumber < targetNumber[i] && targetNumber[i] < 1000) {
                currentNumber += incrementStep + 1;
                changeContent(currentNumber, i);
            }
        };

        setTimeout(increment, incrementInterval);
    };
    for (let i = 0; i < targetNumber.length; i++) {
        processNextElement(i);
    };


    function respondToVisibility(element, callback) {
        var options = {
            root: document.documentElement,
        };

        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                callback(entry.intersectionRatio > 0);
            });
        }, options);

        observer.observe(element);
    }

});

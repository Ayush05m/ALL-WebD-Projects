document.addEventListener('DOMContentLoaded', () => {
    const numberElement = document.querySelectorAll('.numCategory');
    const targetElement = document.querySelector('.card');

    const targetNumber = [1000, 100, 2000, 1000];    // final values for each card element
    let incrementInterval = 40;      // increment interval in milliseconds
    const animationDuration = 1500; // animation duration in milliseconds

    const processNextElement = (i) => {
        let tn = targetNumber[i];
        let currentNumber = targetNumber[i] / 5 * 2;
        let halfwayNumber = (targetNumber[i]) * 9 / 10;
        const incrementStep = Math.floor((targetNumber[i] /2) / (animationDuration / incrementInterval)); //calculate increment to end the increment at the time

        // This fuction updates the html element
        const changeContent = () => {
            if (currentNumber < targetNumber[i]) {
                numberElement[i].innerHTML = currentNumber; //update when the current number is less than the target number
                setTimeout(increment, incrementInterval);
            }
            else {
                numberElement[i].innerHTML = targetNumber[i] + ' + '; //update when the current number is greater than or equal to the target number
            }
        };

        // Function decides when and how much to increment 
        const increment = () => {
            if (currentNumber > halfwayNumber && (currentNumber < 9*targetNumber[i]/10)) {
                currentNumber += 11;
                changeContent(); //calling changeContent to update html
            }
            else if (currentNumber > 9*targetNumber[i]/10 ) {
                currentNumber += 1;

                // Change the increment interval according to the value size after 90% completed
                if (targetElement[i] <500){
                    incrementInterval = 10;
                }
                else{
                    incrementInterval = 7;
                }
                changeContent();
            }
            else if (currentNumber < targetNumber[i]) {
                currentNumber += incrementStep;
                changeContent();
            }
        };

        setTimeout(increment, incrementInterval);
    };

    //To run the function of increment for the no. of cards
    for (let i = 0; i < targetNumber.length; i++) {
        processNextElement(i);
    }

});

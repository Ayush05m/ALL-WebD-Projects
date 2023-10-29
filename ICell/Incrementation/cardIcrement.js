// document.addEventListener("DOMContentLoaded", () => {
//     const numberElement = document.querySelectorAll(".numCategory"); //Selecting the array of elements that contains the values
//     const targetNumber = [1000, 100, 2000, 1000]; // final values for each card element
//     const incrementInterval = 5000; // increment interval in milliseconds

//     let i = 0;
//     const processNextElement = () => {

//         const changeContent = () => {
//             if (currentNumber < targetNumber) {
//                 numberElement[i].innerHTML = currentNumber;
//                 setTimeout(increment, incrementInterval);
//                 console.log('change1')
//             }
//             else {
//                 numberElement[i].innerHTML = targetNumber[i] + '+';
//                 i++;
//                 console.log('change2')
//                 processNextElement(i);
//             }
//         };

//         const increment = () => {
//             if (currentNumber > halfwayNumber && (currentNumber < targetNumber[i])) {
//                 currentNumber += 11;
//                 console.log('increment1');
//                 changeContent();
//             }
//             else if (currentNumber < targetNumber[i] && targetNumber[i] >= 1000) {
//                 currentNumber += 111;
//                 console.log('increment2');
//                 changeContent(currentNumber, i);
//             }
//             else if (currentNumber < targetNumber[i] && targetNumber[i] < 1000) {
//                 currentNumber += 11;
//                 console.log('increment3');
//                 changeContent(currentNumber, i);
//             }
//         };

//         let currentNumber = targetNumber[i] / 2;
//         let halfwayNumber = (targetNumber[i]) * 9 / 10;

//         // console.log(currentNumber, halfwayNumber, targetNumber[i]);


//         setTimeout(increment, incrementInterval);
//     }

//     processNextElement(i);

// });

document.addEventListener('DOMContentLoaded', () => {
    const numberElement = document.querySelectorAll('.numCategory');
    const targetNumber = [1000, 100, 2000, 1000];    // final values for each card element
    const incrementInterval = 100;      // increment interval in milliseconds
    let i = 0;

    const processNextElement = (i) => {
        let tn = targetNumber[i];
        let currentNumber = targetNumber[i] / 2;
        let halfwayNumber = (targetNumber[i]) * 9 / 10;
        console.log(tn, currentNumber, halfwayNumber);


        const changeContent = () => {
            console.log(tn, currentNumber, halfwayNumber);
            if (currentNumber < targetNumber[i]) {
                numberElement[i].innerHTML = currentNumber;
                setTimeout(increment, incrementInterval);
                // console.log('if 1')
            }
            else {
                numberElement[i].innerHTML = targetNumber[i] + '+';
                // setTimeout(increment, incrementInterval);
            }
        };

        const increment = () => {
            if (currentNumber > halfwayNumber && (currentNumber < targetNumber[i])) {
                currentNumber += 11;
                console.log('increment1');
                changeContent();
            }
            else if (currentNumber < targetNumber[i] && targetNumber[i] >= 1000) {
                currentNumber += 111;
                console.log('increment2');
                changeContent(currentNumber, i);
            }
            else if (currentNumber < targetNumber[i] && targetNumber[i] < 1000) {
                currentNumber += 11;
                console.log('increment3');
                changeContent(currentNumber, i);
            }
        };

        setTimeout(increment, incrementInterval);
    };
    for (let i = 0; i < targetNumber.length; i++) {
        processNextElement(i);
    };
});
// // variables

// let workTittle = document.getElementById('work');
// let breakTittle = document.getElementById('break');

// let workTime = 25;
// let breakTime = 5;
// let seconds = "00";



// // display
// window.onload = () => {
//     document.getElementById('minutes').innerHTML = workTime;
//     document.getElementById('seconds').innerHTML = seconds;

//     workTittle.classList.add('active');
// }
// let count=0;
// // start timer
// function start() {
//     // change button
    

//     if(count===0){
//         console.log(count);
//         document.getElementById('start').style.display = "none";
//         document.getElementById('reset').style.display = "block";
//         count = 1;
    
//     // change the time
//     seconds = 59;

//     let workMinutes = workTime - 1;
//     let breakMinutes = breakTime - 1;

//     breakCount = 0;

//     // countdown
//     let timerFunction = () => {
//         //change the display
//         document.getElementById('minutes').innerHTML = workMinutes;
//         document.getElementById('seconds').innerHTML = seconds;

//         // start
//         seconds = seconds - 1;

//         if(seconds === 0) {
//             workMinutes = workMinutes - 1;
//             if(workMinutes === -1 ){
//                 if(breakCount % 2 === 0) {
//                     // start break
//                     workMinutes = breakMinutes;
//                     breakCount++

//                     // change the painel
//                     workTittle.classList.remove('active');
//                     breakTittle.classList.add('active');
//                 }else {
//                     // continue work
//                     workMinutes = workTime;
//                     breakCount++

//                     // change the painel
//                     breakTittle.classList.remove('active');
//                     workTittle.classList.add('active');
//                 }
//             }
//             seconds = 59;
//         }
//     }

//     // start countdown
//     setInterval(timerFunction, 1000); // 1000 = 1s
//     }

//     else{
//         console.log(count);
//         document.getElementById('reset').style.display = "none";
//         document.getElementById('start').style.display = "block";
//         count = 0;
//         worktime = 0;
//         breaktime = 0;
//         document.getElementById('minutes').innerHTML = "00";
//         document.getElementById('seconds').innerHTML = "00";

//         workTittle.classList.remove('active');
//         breakTittle.classList.remove('active');

//     }
// }





// variables
let workTittle = document.getElementById('work');
let breakTittle = document.getElementById('break');

let workTime = 25;
let breakTime = 5;
let seconds = "00";

let count = 0;
let timer; // Variable to store setInterval ID

// display
window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTittle.classList.add('active');
};

// start timer
function start() {
    if (count === 0) {
        console.log(count);
        document.getElementById('start').style.display = "none";
        document.getElementById('reset').style.display = "block";
        count = 1;

        // Change the time
        seconds = 59;

        let workMinutes = workTime - 1;
        let breakMinutes = breakTime - 1;
        let breakCount = 0;

        // Countdown
        let timerFunction = () => {
            // Change the display
            document.getElementById('minutes').innerHTML = workMinutes < 10 ? "0" + workMinutes : workMinutes;
            document.getElementById('seconds').innerHTML = seconds < 10 ? "0" + seconds : seconds;

            // Start counting down
            seconds--;

            if (seconds < 0) {
                workMinutes--;
                if (workMinutes < 0) {
                    if (breakCount % 2 === 0) {
                        // Start break
                        workMinutes = breakMinutes;
                        breakCount++;

                        // Change the panel
                        workTittle.classList.remove('active');
                        breakTittle.classList.add('active');
                    } else {
                        // Continue work
                        workMinutes = workTime;
                        breakCount++;

                        // Change the panel
                        breakTittle.classList.remove('active');
                        workTittle.classList.add('active');
                    }
                }
                seconds = 59;
            }
        };

        // Start countdown
        timer = setInterval(timerFunction, 1000); // Store setInterval ID
    } else {
        resetTimer();
    }
}

// reset timer
function resetTimer() {
    console.log(count);
    document.getElementById('reset').style.display = "none";
    document.getElementById('start').style.display = "block";
    count = 0;

    clearInterval(timer); // Clear the timer

    // Reset time
    document.getElementById('minutes').innerHTML = "25";
    document.getElementById('seconds').innerHTML = "00";

    // Reset titles
    workTittle.classList.add('active');
    breakTittle.classList.remove('active');
}







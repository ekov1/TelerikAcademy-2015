////////// @@@ PROBLEMS START HERE @@@ \\\\\\\\\\

/// ----- Problem 1. Odd or Even ----- \\\
// Description: Write an expression that checks if given integer is odd or even.

function checkEvenOrOdd(value) {
    value = parseFloat(value);
    if (value % 2 === 0)
        return "Even";
    else
        return "Odd";
}

/// ----- Problem 2. Divisible by 7 and 5 ----- \\\
// Write a boolean expression that checks for given integer if it can be divided (without remainder) by 7 and 5 in the same time.

function checkWhetherIsDivisibleBy7And5(value) {
    value = parseFloat(value);
    if (value % 7 === 0 && value % 5 === 0) {
        return "divisible";
    } else {
        return "not divisible";
    }
}

/// ----- Problem 3. Rectangle area----- \\\
// Write an expression that calculates rectangle’s area by given width and height.

function calculateRectangleArea(value1, value2) {
    value1 = parseFloat(value1);
    value2 = parseFloat(value2);
    return value1 * value2;
}

/// ----- Problem 4. Third digit----- \\\
// Write an expression that checks for given integer if its third digit (right-to-left) is 7.
function checkIfRightToLeftThirdDigitIs7(value) {
        var current = value.split("").reverse().join("");
        if (current[2] === '7') {
            return "is";
        } else {
            return "is not";
        }
    }
    /// ----- Problem 5. Third bit----- \\\
    /*Write a boolean expression for finding if the bit #3 (counting from 0) of a given integer.
    The bits are counted from right to left, starting from bit #0.
    The result of the expression should be either 1 or 0.*/
function checkThirdBit(value) {
    var inBinary = (value >>> 0).toString(2);
    inBinary = ('0000' + inBinary).slice(-16)
    var reversed = inBinary.split("").reverse().join("");
    return reversed[3];
}

/// ----- Problem 6. Point in Circle----- \\\
//Write an expression that checks if given point P(x, y) is within a circle K(O, 5).
function checkIfValuesAreInCircle(value1, value2) {
    value1 = parseFloat(value1);
    value2 = parseFloat(value2);
    var isInside = (((value1 * value1) + (value2 * value2)) < (5 * 5));
    return isInside;
}


/// ----- Problem 7. Is prime----- \\\
//Write an expression that checks if given positive integer number n (n ≤ 100) is prime.
function checkIfItsPrime(value) {
    value = parseFloat(value);
    var prime;
    if (value < 2) {
        return false;
    } else {
    	prime = true;
    	for(var i = 2; i < value; i++) {
    		if(value % i == 0) {
    			return false;
    		}
    	}
    	return true;
    }
}
/// ----- Problem 8. Trapezoid area----- \\\
//Write an expression that calculates trapezoid's area by given sides a and b and height h.
function calculateTrapezoidArea(value1, value2, value3) {
    return ((parseInt(value1) + parseInt(value2)) / 2) * parseInt(value3);
}

/// ----- Problem 9. Point in Circle and outside Rectangle----- \\\
//Write an expression that checks for given point P(x, y) if it is within the circle K( (1,1), 3) and out of the rectangle R(top=1, left=-1, width=6, height=2).
function pointInCircleAndOutsideOfRect(x, y) {
    var value1 = parseFloat(x);
    var value2 = parseFloat(y);
    var isInTheCircle = (value1 - 1) * (value1 - 1) + (value2 - 1) * (value2 - 1) <= 3;
    var isOutOfTheRectangle = !((value1 >= -1 && value1 <= -1 + 6) && (value2 <= 1 && value2 >= 1 - 2));
    if (isInTheCircle == true && isOutOfTheRectangle == true) {
        return "is";
    }
    else {
        return "is NOT";
    }
}

// --------- Code below is only for showing the functionality via html
var firstTask = document.getElementById('first-task');
firstTask.addEventListener('click', function() {
    if (resultContainerFirstTask.style.display == "block") {
        resultContainerFirstTask.style.display = "none";
    } else {
        resultContainerFirstTask.style.display = "block";
    }
})
var firstTaskViewCodeButton = document.getElementById('first-task-view-code');
var firstTaskCode = document.getElementById('first-task-code');
firstTaskViewCodeButton.addEventListener('click', function() {
    if (firstTaskCode.style.display == "block") {
        firstTaskCode.style.display = "none";
    } else {
        firstTaskCode.style.display = "block";
    }
});
var inputValue;
var resultContainerFirstTask = document.getElementById('result-container-first-task');
var checkButton = document.getElementById('check-whether-is-even-or-not');
checkButton.addEventListener('click', function() {
    inputValue = document.getElementById('odd-or-even').value;
    var result = checkEvenOrOdd(inputValue);
    var resultElement = document.getElementById("display-result-first");
    resultElement.innerHTML = "Number " + inputValue + " is " + result;
    resultContainerFirstTask.insertBefore(resultElement, firstTaskViewCodeButton);
})
firstTaskCode.innerHTML += ""
var secondTask = document.getElementById('second-task');
var secondTaskViewCodeButton = document.getElementById('second-task-view-code');

secondTaskViewCodeButton.addEventListener('click', function() {
    if (secondTaskCode.style.display == "block") {
        secondTaskCode.style.display = "none";
    } else {
        secondTaskCode.style.display = "block";
    }
})
var secondTaskCode = document.getElementById('second-task-code');
var inputValueSecondTask;
var resultContainerSecondTask = document.getElementById('result-container-second-task');
var checkButtonSecond = document.getElementById('check-whether-is-disisible-or-not');
checkButtonSecond.addEventListener('click', function() {
    inputValueSecondTask = document.getElementById('divisible-input').value;
    var resultSecondTask = checkWhetherIsDivisibleBy7And5(inputValueSecondTask);
    var resultElement = document.getElementById("display-result-second");
    resultElement.innerHTML = "Number " + inputValueSecondTask + " is " + resultSecondTask + " by 7 and 5 at the same time";
    resultContainerSecondTask.insertBefore(resultElement, secondTaskViewCodeButton);
})
var secondTask = document.getElementById('second-task');
secondTask.addEventListener('click', function() {
    if (resultContainerSecondTask.style.display == "block") {
        resultContainerSecondTask.style.display = "none";
    } else {
        resultContainerSecondTask.style.display = "block";
    }
});

var thirdTask = document.getElementById('third-task');
var thirdTaskViewCodeButton = document.getElementById('third-task-view-code');

thirdTaskViewCodeButton.addEventListener('click', function() {
    if (thirdTaskCode.style.display == "block") {
        thirdTaskCode.style.display = "none";
    } else {
        thirdTaskCode.style.display = "block";
    }
})
var thirdTaskCode = document.getElementById('third-task-code');
var inputValueThirdTask;
var resultContainerThirdTask = document.getElementById('result-container-third-task');
var checkButtonThird = document.getElementById('button-third');
checkButtonThird.addEventListener('click', function() {
    inputWidth = document.getElementById('width-input').value;
    inputHeight = document.getElementById('height-input').value;
    var resultThirdTask = calculateRectangleArea(inputWidth, inputHeight);
    var resultElement = document.getElementById("display-result-third");
    resultElement.innerHTML = "Rectangle area for " + inputWidth + " width and " + inputHeight + " height is " + resultThirdTask;
    resultContainerThirdTask.insertBefore(resultElement, thirdTaskViewCodeButton);
})
var thirdTask = document.getElementById('third-task');
thirdTask.addEventListener('click', function() {
    if (resultContainerThirdTask.style.display == "block") {
        resultContainerThirdTask.style.display = "none";
    } else {
        resultContainerThirdTask.style.display = "block";
    }
});
var fourthTask = document.getElementById('fourth-task');
var fourthTaskViewCodeButton = document.getElementById('fourth-task-view-code');

fourthTaskViewCodeButton.addEventListener('click', function() {
    if (fourthTaskCode.style.display == "block") {
        fourthTaskCode.style.display = "none";
    } else {
        fourthTaskCode.style.display = "block";
    }
})
var fourthTaskCode = document.getElementById('fourth-task-code');
var inputValueFourthTask;
var resultContainerFourthTask = document.getElementById('result-container-fourth-task');
var checkButtonFourth = document.getElementById('button-fourth');
checkButtonFourth.addEventListener('click', function() {
    fourthInputValue = document.getElementById('fourth-input').value;
    var resultFourthTask = checkIfRightToLeftThirdDigitIs7(fourthInputValue);
    var resultElement = document.getElementById("display-result-fourth");
    resultElement.innerHTML = "Right to left third digit " + resultFourthTask + " 7";
    resultContainerFourthTask.insertBefore(resultElement, fourthTaskViewCodeButton);
})
var fourthTask = document.getElementById('fourth-task');
fourthTask.addEventListener('click', function() {
    if (resultContainerFourthTask.style.display == "block") {
        resultContainerFourthTask.style.display = "none";
    } else {
        resultContainerFourthTask.style.display = "block";
    }
});
var fifthTask = document.getElementById('fifth-task');
var fifthTaskViewCodeButton = document.getElementById('fifth-task-view-code');

fifthTaskViewCodeButton.addEventListener('click', function() {
    if (fifthTaskCode.style.display == "block") {
        fifthTaskCode.style.display = "none";
    } else {
        fifthTaskCode.style.display = "block";
    }
})
var fifthTaskCode = document.getElementById('fifth-task-code');
var inputValueFifthTask;
var resultContainerFifthTask = document.getElementById('result-container-fifth-task');
var checkButtonFifth = document.getElementById('button-fifth');
checkButtonFifth.addEventListener('click', function() {
    fifthInputValue = document.getElementById('fifth-input').value;
    var resultFifthTask = checkThirdBit(fifthInputValue);
    var resultElement = document.getElementById("display-result-fifth");
    resultElement.innerHTML = "Right to left third bit of number " + fifthInputValue + " is " + resultFifthTask;
    resultContainerFifthTask.insertBefore(resultElement, fifthTaskViewCodeButton);
})
var fifthTask = document.getElementById('fifth-task');
fifthTask.addEventListener('click', function() {
    if (resultContainerFifthTask.style.display == "block") {
        resultContainerFifthTask.style.display = "none";
    } else {
        resultContainerFifthTask.style.display = "block";
    }
});


var sixthTask = document.getElementById('sixth-task');
var sixthTaskViewCodeButton = document.getElementById('sixth-task-view-code');
var sixthTaskCode = document.getElementById('sixth-task-code');
sixthTaskViewCodeButton.addEventListener('click', function() {
    if (sixthTaskCode.style.display == "block") {
        sixthTaskCode.style.display = "none";
    } else {
        sixthTaskCode.style.display = "block";
    }
})
var sixthTask = document.getElementById('sixth-task');
var inputValueSixthTask;
var resultContainerSixthTask = document.getElementById('result-container-sixth-task');
var checkButtonSixth = document.getElementById('button-sixth');
checkButtonSixth.addEventListener('click', function() {
    inputX = document.getElementById('x-input').value;
    inputY = document.getElementById('y-input').value;
    var resultSixthTask = checkIfValuesAreInCircle(inputX, inputY);
    var resultElement = document.getElementById("display-result-sixth");
    resultElement.innerHTML = "Are points " + inputX + " and " + inputY + " inside circle K(O, 5)? Answer: " + resultSixthTask;
    resultContainerSixthTask.insertBefore(resultElement, sixthTaskViewCodeButton);
})
var sixthTask = document.getElementById('sixth-task');
sixthTask.addEventListener('click', function() {
    if (resultContainerSixthTask.style.display == "block") {
        resultContainerSixthTask.style.display = "none";
    } else {
        resultContainerSixthTask.style.display = "block";
    }
});


var seventhTask = document.getElementById('seventh-task');
var seventhTaskViewCodeButton = document.getElementById('seventh-task-view-code');

seventhTaskViewCodeButton.addEventListener('click', function() {
    if (seventhTaskCode.style.display == "block") {
        seventhTaskCode.style.display = "none";
    } else {
        seventhTaskCode.style.display = "block";
    }
})
var seventhTaskCode = document.getElementById('seventh-task-code');
var inputValueSeventhTask;
var resultContainerSeventhTask = document.getElementById('result-container-seventh-task');
var checkButtonSeventh = document.getElementById('button-seventh');
checkButtonSeventh.addEventListener('click', function() {
    seventhInputValue = document.getElementById('seventh-input').value;
    var resultSeventhTask = checkIfItsPrime(seventhInputValue);
    var resultElement = document.getElementById("display-result-seventh");
    resultElement.innerHTML = "Digit " + seventhInputValue + " is " + (resultSeventhTask ? " prime" : " not prime");
    resultContainerSeventhTask.insertBefore(resultElement, seventhTaskViewCodeButton);
})
var seventhTask = document.getElementById('seventh-task');
seventhTask.addEventListener('click', function() {
    if (resultContainerSeventhTask.style.display == "block") {
        resultContainerSeventhTask.style.display = "none";
    } else {
        resultContainerSeventhTask.style.display = "block";
    }
});
var eighthTask = document.getElementById('eighth-task');
var eighthTaskViewCodeButton = document.getElementById('eighth-task-view-code');

eighthTaskViewCodeButton.addEventListener('click', function() {
    if (eighthTaskCode.style.display == "block") {
        eighthTaskCode.style.display = "none";
    } else {
        eighthTaskCode.style.display = "block";
    }
})
var eighthTaskCode = document.getElementById('eighth-task-code');
var inputValueEighthTask;
var resultContainerEighthTask = document.getElementById('result-container-eighth-task');
var checkButtonEighth = document.getElementById('button-eighth');
checkButtonEighth.addEventListener('click', function() {
    inputAValue = document.getElementById('a-input').value;
    inputBValue = document.getElementById('b-input').value;
    inputHValue = document.getElementById('h-input').value;
    var resultEighthTask = calculateTrapezoidArea(inputAValue, inputBValue, inputHValue);
    var resultElement = document.getElementById("display-result-eighth");
    resultElement.innerHTML = "Trapezoid area is " + resultEighthTask;
    resultContainerEighthTask.insertBefore(resultElement, eighthTaskViewCodeButton);
})
var eighthTask = document.getElementById('eighth-task');
eighthTask.addEventListener('click', function() {
    if (resultContainerEighthTask.style.display == "block") {
        resultContainerEighthTask.style.display = "none";
    } else {
        resultContainerEighthTask.style.display = "block";
    }
});


var ninethTask = document.getElementById('nineth-task');
var ninethTaskViewCodeButton = document.getElementById('nineth-task-view-code');
ninethTaskViewCodeButton.addEventListener('click', function() {
    if (ninethTaskCode.style.display == "block") {
        ninethTaskCode.style.display = "none";
    } else {
        ninethTaskCode.style.display = "block";
    }
})
var ninethTaskCode = document.getElementById('nineth-task-code');
var inputValueNinethTask;
var resultContainerNinethTask = document.getElementById('result-container-nineth-task');
var checkButtonNineth = document.getElementById('button-nineth');
checkButtonNineth.addEventListener('click', function() {
    inputXValue = document.getElementById('x-input-problem9').value;
    inputYValue = document.getElementById('y-input-problem9').value;
    var resultNinethTask = pointInCircleAndOutsideOfRect(inputXValue, inputYValue);
    var resultElement = document.getElementById("display-result-nineth");
    resultElement.innerHTML = "Point with X - "+inputXValue+" and Y - "+inputYValue + " " + resultNinethTask +" inside K & outside of R.";
    resultContainerNinethTask.insertBefore(resultElement, ninethTaskViewCodeButton);
})
var ninethTask = document.getElementById('nineth-task');
ninethTask.addEventListener('click', function() {
    if (resultContainerNinethTask.style.display == "block") {
        resultContainerNinethTask.style.display = "none";
    } else {
        resultContainerNinethTask.style.display = "block";
    }
});
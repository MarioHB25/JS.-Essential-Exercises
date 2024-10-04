
class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    };

    addition() {
        return this.num1 + this.num2;
    };

    subtraction() {
        return this.num1 - this.num2;
    };

    multiplication() {
        return this.num1 * this.num2;
    };

    division() {
        if (this.num2 === 0) {
            throw new Error("You cannot divide by zero.");
        }
        return this.num1 / this.num2;
    };

    static checkNum(userNum) {
        let number;
        while (true) {
            number = prompt(userNum);
            // Check if it is a number and not empty
            if (number === null) {
                alert("Entry cancelled. Leaving the program.");
                return null; // Exit program if canceled
            };
            if (!isNaN(number) && number.trim() !== "") {
                return parseFloat(number);
            } else {
                alert("Please enter a valid number.");
            };
        };
    };
};

function operations() {
    let contin = true;

    while (contin) {
        const num1 = Calculator.checkNum("Enter the first number:");
        if (num1 === null) return; // Exit if canceled

        const num2 = Calculator.checkNum("Enter the second number:");
        if (num2 === null) return; // Exit if canceled

        const calculator = new Calculator(num1, num2);
        
        let operation;
        while (true) {
            operation = prompt("Choose an operation:\n1. addition\n2. subtraction\n3. multiplication\n4. division");
            if (operation === '1' || operation === '2' || operation === '3' || operation === '4') {
                break;
            } else {
                alert("Please choose a valid option (1, 2, 3 or 4).");
            };
        };

        let result;
        try {
            switch (operation) {
                case '1':
                    result = calculator.addition();
                    alert(`The result of the addition of ${num1} and ${num2} is: ${result}`);
                    break;
                case '2':
                    result = calculator.subtraction();
                    alert(`The result of the subtraction of ${num2} and ${num1} is: ${result}`);
                    break;
                case '3':
                    result = calculator.multiplication();
                    alert(`The result of the multiplication of ${num1} and ${num2} is: ${result}`);
                    break;
                case '4':
                    result = calculator.division();
                    alert(`The result of the division of ${num1} between ${num2} is: ${result}`);
                    break;
            }
        } catch (error) {
            alert(error.message);
        };

        // Ask if you want to perform another operation
        const newOperation = prompt("Do you want to perform another operation? (y/n)");
        if (newOperation !== "Y" && newOperation !== "y") {
            contin = false;
            alert("Thank you for using the calculator. See you later!");
        };
    };
};

// Run the program
operations();

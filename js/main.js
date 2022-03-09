class calculator{
    constructor(previusOperandTextElement, currentOperandTextElement){
        this.previusOperandTextElement = previusOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
    }

    clear(){
        this.currentOperand = '';
        this.previusOperand = '';
        this.oparetion = undefined;
    }

    delete(){

    }

    appendNumber(number){

    }

    chooseOparetion(oparetion){

    }

    compute(){

    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
    }
}



const numberButton = document.querySelectorAll('[data-number]');
const oparetionButton = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previusOperandTextElement = document.querySelector('[data-previus-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new calculator(previusOperandTextElement, currentOperandTextElement);

numberButtons.forEach(element => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay()
    })
});
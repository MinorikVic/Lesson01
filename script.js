'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite (n);
};

let money,
    start = function() {
    do {
        money = +prompt('Ваш месячный доход?');
    } while (!isNumber(money));
};

start();

let income = 'Фриланс',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    // expenses1 = prompt('Введите обязательную статью расходов?'),
    // amount1 = +prompt('Во сколько это обойдется?'),
    // expenses2 = prompt('Введите обязательную статью расходов?'),
    // amount2 = +prompt('Во сколько это обойдется?'),
    mission = 200000,
    period = 2,
    budgetDay,
    accumulatedMonth,
    expensesAmount;


let showTypeOf = function(data) {
    console.log(data, typeof(data));
};

let getStatusIncome = function() {
    if (budgetDay >= 1200) {
        alert('У вас высокий уровень дохода');
    } else if ((budgetDay >= 600 ) && (budgetDay < 1200)) {
        alert('У вас средний уровень дохода');
    } else if ((budgetDay < 600 ) && (budgetDay > 0)) {
        alert('К сожалению, у вас низкий уровень дохода');
    } else if (budgetDay <= 0 ) {
        alert('Что то пошло не так');
    }
};

let expenses = [];

console.log(addExpenses.toLowerCase().split(','));


function getExpensesMonth() {
    let sum = 0, control;

    for (let i = 0; i < 2; i++){

        expenses[i] = prompt('Введите обязательную статью расходов');

        do {
            control = +prompt('Во сколько это обойдется?');
        }while (!isNumber(sum));

        sum += +control;

    }
    
    return sum;
}

function getAccumulatedMonth() {
    return money - expensesAmount;
}

function getTargetMonth() {
    if (getTargetMonth < 0) {
        alert('Цель не будет достигнута');
    }
    return Math.ceil(mission / accumulatedMonth);
    
}

addExpenses = addExpenses.split(',');
expensesAmount = getExpensesMonth();
accumulatedMonth = getAccumulatedMonth();
budgetDay = accumulatedMonth / 30;

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
getStatusIncome();

console.log('Статьи расходов: '+ addExpenses);
console.log('Бюджет на день: '+ budgetDay);
console.log('Расходы на месяц: ' + expensesAmount);
console.log(getAccumulatedMonth());
console.log(getTargetMonth());
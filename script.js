'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite (n);
};

let money,
    income = 'Фриланс',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    // expenses1 = prompt('Введите обязательную статью расходов?'),
    // amount1 = +prompt('Во сколько это обойдется?'),
    // expenses2 = prompt('Введите обязательную статью расходов?'),
    // amount2 = +prompt('Во сколько это обойдется?'),
    mission = 200000,
    period = 2,
    budgetDay,
    expenses1,
    expenses2,
    accumulatedMonth,
    expensesAmount;

let start = function() {
    do {
        money = +prompt('Ваш месячный доход?');
    }

    while (!isNumber(money)) {
        money = +prompt('Ваш месячный доход?');
    }
};

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

function getExpensesMonth() {
    let sum = 0;

    for (let i = 0; i < 2; i++){

        if (i === 0) {
            expenses1 = prompt('Введите обязательную статью расходов?');
        } else if (i === 1) {
            expenses2 = prompt('Введите обязательную статью расходов?');
        }
        sum += +prompt('Во сколько это обойдется?');
    }
    console.log(sum);
    
    return sum;
}

function getAccumulatedMonth() {
    return money - expensesAmount;
}

function getTargetMonth() {
    return Math.ceil(mission / accumulatedMonth);
}

addExpenses = addExpenses.split(',');
accumulatedMonth = getAccumulatedMonth();
budgetDay = accumulatedMonth / 30;
expensesAmount = getExpensesMonth();

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
getStatusIncome();
start();

console.log('Статьи расходов: '+ addExpenses);
console.log('Бюджет на день: '+ budgetDay);
console.log(expensesAmount);
console.log(getAccumulatedMonth());
console.log(getTargetMonth());
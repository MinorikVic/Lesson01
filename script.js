'use strict';

let money = +prompt('Ваш месячный доход?'),
    income,
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    // expenses1 = prompt('Введите обязательную статью расходов?'),
    // amount1 = +prompt('Во сколько это обойдется?'),
    // expenses2 = prompt('Введите обязательную статью расходов?'),
    // amount2 = +prompt('Во сколько это обойдется?'),
    mission = 200000,
    period = 2,
    budgetDay,
    accumulatedMonth;
    
addExpenses = addExpenses.split(',');
accumulatedMonth = getAccumulatedMonth();
budgetDay = accumulatedMonth / 30;


let showTypeOf = function(data) {
    console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

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

getStatusIncome();

function getExpensesMonth() {
    let sum = 0;

    for (let i = 0; i < 2; i++){
        sum += +prompt('Во сколько это обойдется?');
    }
    console.log(sum);
    
    return sum;
}

let expensesAmount = getExpensesMonth();

function getAccumulatedMonth() {
    return money - expensesAmount;
}

function getTargetMonth() {
    return Math.ceil(mission / accumulatedMonth);
}

console.log('Статьи расходов: '+ addExpenses);
console.log('Бюджет на день: '+ budgetDay);
console.log(expensesAmount);
console.log(getAccumulatedMonth());
console.log(getTargetMonth());
'use strict';

let money = +prompt('Ваш месячный доход?'),
    income,
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    expenses1 = prompt('Введите обязательную статью расходов?'),
    amount1 = prompt('Во сколько это обойдется?'),
    expenses2 = prompt('Введите обязательную статью расходов?'),
    amount2 = prompt('Во сколько это обойдется?'),
    mission = 200000,
    period = 2,
    budgetDay = 30,
    budgetMonth,
    accumulatedMonth;
    
addExpenses = addExpenses.split(',');
budgetMonth = money - (amount1 + amount2);
mission = Math.ceil(mission / budgetMonth);
budgetDay = Math.floor(budgetMonth / budgetDay);
accumulatedMonth = getAccumulatedMonth;

if (budgetDay >= 1200) {
    alert('У вас высокий уровень дохода');
}
if ((budgetDay >= 600 ) && (budgetDay < 1200)) {
    alert('У вас средний уровень дохода');
}
if ((budgetDay < 600 ) && (budgetDay > 0)) {
    alert('К сожалению, у вас низкий уровень дохода');
}
if (budgetDay <= 0 ) {
    alert('Что то пошло не так');
}

function getExpensesMonth() {
    return (amount1 + amount2);
}
console.log(getExpensesMonth());

function getAccumulatedMonth() {
    return (budgetMonth - getExpensesMonth);
}
console.log(getAccumulatedMonth());

function getTargetMonth() {
    return (accumulatedMonth);
}
console.log(getTargetMonth());


console.log('Бюджет на месяц: '+ money);
console.log('Статьи расходов: '+ addExpenses);
console.log('Депозит есть: '+ deposit);
console.log('Статья расходов первая: '+ expenses1);
console.log('Расход по первой статье: '+ amount1);
console.log('Статья расходов вторая: '+ expenses2);
console.log('Расход по второй статье: '+ amount2);
console.log('Бюджет на месяц: '+ budgetMonth);
console.log('Цель заработать: '+ mission);
console.log('Бюджет на день: '+ budgetDay);

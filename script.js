let money, 
    income, 
    addExpenses, 
    deposit, 
    mission, 
    period,
    budgetDay;

money = 35800;
income = 'Подработка 15000';
addExpenses = 'Комунальные платежи, Продукты, Транспорт';
deposit = true;
mission = 2000000;
period = 5;
budgetDay = money / 30;

console.log(money);
console.log(income);
console.log(deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' +mission + '$');
console.log(addExpenses.toLocaleLowerCase());
console.log(addExpenses.split(', '));
console.log(budgetDay);

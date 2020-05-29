'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдется?', '');
        
                if ( (typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null 
                && a != '' && b != '' && a.length < 50 ) {
                    appData.expenses[a] = b;
                } else {
        
                }
        }        
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ежедневный бюджет: ' + appData.moneyPerDay); 
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 50) {
            alert('У вас низкий уровень дотатка');
        } else if(appData.moneyPerDay > 50, appData.moneyPerDay <100) {
            alert('У вас средний уровень достатка');
        } else if(appData.moneyPerDay > 100) {
            alert('У вас высокий уровень достатка');
        } else {
            alert('Ошибка 404');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какаая ваша сума накоплений?', ''),
                percent = +prompt('Под какой процент?');
        
            appData.monthIncore = (save/100/12*percent).toFixed();
            alert('Доход в месец с вашего депозита: ' + appData.monthIncore);
        }
    },
    choose0ptExpenses: function() {
        for (let i = 1; i < 3; i++) {
            let opt = prompt('Статья необязательныз расходов?', '');
        }
    }
};





function bonusTime(salary, bonus) {
    if (bonus == true) {
        return "£" +  salary * 10;
    }
    else {
        return "£" +  salary;
    }
    }

console.log(bonusTime(150,false));
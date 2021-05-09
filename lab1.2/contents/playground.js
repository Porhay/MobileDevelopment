
// Variant 1
console.log(`Variant ${8320 % 2 + 1}`);

class TimeDM {
    constructor(hour = 0, minute = 0, second = 0) {
        if (hour == String(new Date())) {
            this.hour = hour.getHours()
            this.minute = hour.getMinutes()
            this.second = hour.getSeconds()
        } else{
            this.hour = hour
            this.minute = minute
            this.second = second 
        }
    }
    toString() {
        console.log(`${this.hour}:${this.minute}:${this.second} ${this.hours<12?'AM':'PM'}`);
    }

    add(time) {
        // addition
        let second = 0, minute = 0, hour = 0
        second += this.second + time.second
        minute = this.minute + time.minute
        hour = this.hour + time.hour

        if (second >= 60) {
            second -= 60
            minute += 1
        }
        if (minute >= 60) {
            minute -= 60
            hour += 1
        }
        if (hour >= 24) {
            hour -= 24
        }

        return new TimeDM(hour, minute, second)
    }

    sub(time) {
        // subtraction
        let second = this.second - time.second
        let minute = this.minute - time.minute
        let hour = this.hour - time.hour

        if (second < 0) {
            second += 60
            minute -= 1
        }
        if (minute < 0) {
            minute += 60
            hour -= 1
        }
        if (hour < 0) {
            hour += 24
        }
        return new TimeDM(hour, minute, second)
    }

    static addition(value1, value2) {
        let second = value1.second + value2.second
        let minute = value1.minute + value2.minute
        let hour = value1.hour + value2.hour
        
        if (second >= 60) {
            second -= 60
            minute += 1
        }
        if (minute >= 60) {
            minute -= 60
            hour += 1
        }
        if (hour >= 24) {
            hour -= 24
        }
        
        return new TimeDM(hour, minute, second)
    }

    static subtraction(value1, value2) {
        let second = value1.second - value2.second
        let minute = value1.minute - value2.minute
        let hour = value1.hour - value2.hour

        if (second < 0) {
            second += 60
            minute -= 1
        }
        if (minute < 0) {
            minute += 60
            hour -= 1
        }
        if (hour < 0) {
            hour += 24
        }
        return new TimeDM(hour, minute, second)
    } 
}

console.log("Демонстрація методів ініціалізації");

const time1 = new TimeDM()
time1.toString()
const time2 = new TimeDM(23, 0, 59)
time2.toString()
const time3 = new TimeDM(0, 59, 1)
time3.toString()
const time4 = new TimeDM(new Date())
time4.toString()


console.log("Демонстрація методів, що повертають суму/різницю поточного об'єкта та об'єкта, що отриманий як вхідний параметр");

time2.add(time3).toString();
time2.sub(time3).toString();

console.log("Демонстрація методів, що повертають суму/різницю двох об'єктів, що отримані як вхідні параметри");

TimeDM.addition(time3, time4).toString();
TimeDM.subtraction(time3, time4).toString();






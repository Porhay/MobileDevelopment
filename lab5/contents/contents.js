import React, { Component } from 'react'

// Завдання 1
// Заповніть словник, де:
// - ключ – назва групи
// - значення – відсортований масив студентів, які відносяться до відповідної групи

let studentsStr = "Дмитренко Олександр - ІП-84; Матвійчук Андрій - ІВ-83; Лесик Сергій - ІО-82; Ткаченко Ярослав - ІВ-83; Аверкова Анастасія - ІО-83; Соловйов Даніїл - ІО-83; Рахуба Вероніка - ІО-81; Кочерук Давид - ІВ-83; Лихацька Юлія - ІВ-82; Головенець Руслан - ІВ-83; Ющенко Андрій - ІО-82; Мінченко Володимир - ІП-83; Мартинюк Назар - ІО-82; Базова Лідія - ІВ-81; Снігурець Олег - ІВ-81; Роман Олександр - ІО-82; Дудка Максим - ІО-81; Кулініч Віталій - ІВ-81; Жуков Михайло - ІП-83; Грабко Михайло - ІВ-81; Иванов Володимир - ІО-81; Востриков Нікіта - ІО-82; Бондаренко Максим - ІВ-83; Скрипченко Володимир - ІВ-82; Кобук Назар - ІО-81; Дровнін Павло - ІВ-83; Тарасенко Юлія - ІО-82; Дрозд Світлана - ІВ-81; Фещенко Кирил - ІО-82; Крамар Віктор - ІО-83; Иванов Дмитро - ІВ-82"

let dict = new Map()

let studentsArr = studentsStr.split('; ')

studentsArr.map((elem) => dict.set(elem.split(' - ')[1]))

for (let [key, value] of dict) {
    let lst = []
    studentsArr.forEach(elem => {
        if (elem.indexOf(key) != -1) {
            lst.push(elem.split(" - ")[0])
        }
        dict.set(key, lst.sort()) 
    })
}

// console.log("\nЗавдання 1")
// console.log(dict);


// Завдання 2
// - ключ – назва групи
// - значення – словник, де:
//   - ключ – студент, який відносяться до відповідної групи
//   - значення – масив з оцінками студента (заповніть масив випадковими значеннями, використовуючи функцію `randomValue(maxValue: Int) -> Int`)


let points = [12, 12, 12, 12, 12, 12, 12, 16]

let dict1 = new Map()
let dict1Inner = new Map() // ключ – студент, значення – [оцінки]

// Дмитренко Олександр - ІП-84; Матвійчук Андрій - ІВ-83; Лесик Сергій - ІО-82;
studentsArr.map((elem) => {
    let group = elem.split(' - ')[1]
    let student = elem.split(' - ')[0]
    if (!dict1.has(group)){
        dict1.set(group)
    }
})

let bigDict = []

for(let i = 0; i < dict.size; i++) {
    // console.log([...dict.values()][i]);
    bigDict.push([...dict.values()][i])
}


for (let i = 0; i < dict.size; i++) {
    for (let j = 0; j < [...dict.values()][i].length; j++) {
        let a = studentsArr.map(elem => elem.split(' - '))
        if (a[1][j] === [...dict1.keys()][i]) {
            dict1Inner.set(a[0])[j]
            
        }
        
    }

}


for (let [key, value] of dict1) {
    dict1.set(key, dict1Inner)
}

// console.log(bigDict);
// console.log(dict1);



// for (let [key, value] of dict1) {
//     let lst1 = []
//     studentsArr.forEach(elem => {
//         if (elem.indexOf(key) != -1) {
//             lst1.push(elem.split(" - ")[0])
//         }
//         dict1.set(key, dict1Inner.set(lst1))
//     })

    
// }





class Contents extends Component {
    render() {

        return (
            <> </>
        );
    }
}

export default Contents;
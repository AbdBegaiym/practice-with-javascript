
// 3 задание:Создайте объект на основе ваших данных.
const profile = {
    name: "Бегайым",
    surname: "Абдыганиева",
    age: 22,
    city: "Бишкек",
    email: "abdyganievabegajym@gmail.com",
    job: "Графический дизайнер",
}

console.log(profile);

// 4 задание:Создайте объект, который будет хранить данные об автомобиле 
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Синий",
    transmission: "Автоматическая",
};

console.log(car);

car.owner = profile;
console.log(car);

// 5 задание: Написать функцию которая аргументом будет принимать объект, описанный в пункте №4.
function checkMaxSpeed(car) {
    if (!("maxSpeed" in car)) {
        car.maxSpeed = 200;
    }
}

checkMaxSpeed(car);

// 6 Задание: Написать функцию, которая получает первым аргументом — объект, а вторым аргументом — свойство объекта

function getPropertyObject (obj, property) {
    console.log(obj[property]);
}

getPropertyObject(car, "brand");


// 7 Задание: Создать массив, который содержит названия продуктов
const products = ["Яблоко", "Банан", "Апельсин", "Груша"];
console.log(products);

// 8 Задание: Создать массив, состоящий из объектов и использовать метод push
const books = [
    {
        title: "Белый пароход",
        author: "Чынгыз Айтматов",
        year: 1970,
        covercolor: "Голубой",
        genre: "Приключения",
    },
    {
        title: "Приключения мышонка Десперо",
        author: "Кейт ДиКамилло",
        year: 2003,
        covercolor: "Бордовый",
        genre: "Приключения",
    },
    {
        title: "Маугли",
        author: "Редьярд Киплинг",
        year: 1894,
        covercolor: "Красный",
        genre: "Приключения",
    }
];

books.push({
    title: "Бэмби",
    author: "Феликс Зальтен",
    year: 1923,
    covercolor: "Зелёный",
    genre: "Приключения",
});

console.log(books);

// 9 Задание: Создать еще один массив и обьединить с предыдущим с оператором spread
const moreBooks = [
    {
        title: "Приключения Тома Сойера",
        author: "Марк Твен",
        year: 1876,
        covercolor: "Красный",
        genre: "Приключения"
    },
    {
        title: "Кот в сапогах",
        author: "Шарль Перро",
        year: 1697,
        covercolor: "Золотой",
        genre: "Приключения"
    }
];

const allBooks = [...books, ...moreBooks];
console.log(allBooks);

// 10 Задание: Написать функцию, которая принимает массив сущностей с задания №9. Добавляем новое свойство для объекта "isRare"

function addIsRareProperty(allBooks) {
    return allBooks.map(allBooks => {
        return {
            ...allBooks,
            isRare: allBooks.year < 2000
        };
    });
}

console.log(addIsRareProperty(allBooks));


import "../styles.css";

const title = document.createElement("h1");
title.innerHTML = "Get Photos from API and show them!";

document.getElementById("app").appendChild(title);

// Получить картинки через классовый и
// функциональный компоненты реакт, а также нативно
// вывести в виде круглых кликабельных изображений,
// которые открывают полноразмерную картинку в новой вкладке

// Адрес получения картинок - https://picurl.herokuapp.com/users/
// id картинок: 2, 7, 1, 8, 3, 9
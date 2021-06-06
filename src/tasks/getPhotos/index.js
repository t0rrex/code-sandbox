import '../../styles.css';

const title = document.createElement('h1');
title.innerHTML = 'Get Photos from API and show them!';

document.getElementById('app').appendChild(title);

// Current solution - for JS native option
// Получить картинки через классовый и
// функциональный компоненты реакт, а также нативно
// вывести в виде круглых кликабельных изображений,
// которые открывают полноразмерную картинку в новой вкладке

// Адрес получения картинок - https://picurl.herokuapp.com/users/
// id картинок: 2, 7, 1, 8, 3, 9

// SOLUTION:

const getImages = async (url, ids) => {
  return !Array.isArray(ids)
    ? fetch(url + ids)
    : Promise.all(ids.map(id => fetch(url + id).then(res => res.json())));
};

getImages('https://picurl.herokuapp.com/users/', 2)
  .then(res => res.json())
  .then(result => console.log('single result', result))
  .catch(() => console.log('hui tebe a ne result'));

getImages('https://picurl.herokuapp.com/users/', [2, 7, 1, 8, 3, 9])
  .then(result => console.log('multi results', result));

//insert photos in html

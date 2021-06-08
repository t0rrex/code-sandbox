import './styles.css';

const title = document.createElement('h1');
title.innerHTML = 'Get Photos from API and show them!';

const images = document.createElement('div');
images.id = 'images';

document.getElementById('app').appendChild(title).appendChild(images);

// Current solution - for JS native option
// Получить картинки через классовый и
// функциональный компоненты реакт, а также нативно
// вывести в виде круглых кликабельных изображений,
// которые открывают полноразмерную картинку в новой вкладке

// Адрес получения картинок - https://picurl.herokuapp.com/users/
// id картинок: 2, 7, 1, 8, 3, 9

// SOLUTION:

const getImageURLs = async (url, ids) => {
  return !Array.isArray(ids)
    ? fetch(url + ids)
    : Promise.all(ids.map(id => fetch(url + id).then(res => res.json())));
};

const loading = document.createElement('h6');
loading.innerHTML = '...loading';

document.getElementById('images').appendChild(loading);

getImageURLs('https://picurl.herokuapp.com/users/', [2, 7, 1, 8, 3, 9])
  .then(results => {
    const images = results.map(image => {
      const imageEl = document.createElement('img');
      imageEl.classList.add('image', 'rounded');
      imageEl.src = image.url;
      return imageEl;
    });
    console.log(images);
  })
  .catch(() =>
    console.log('Multiple - Something went wrong. Please try again')
  );

//insert photos in html

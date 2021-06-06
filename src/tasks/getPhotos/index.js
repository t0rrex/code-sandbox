import '../../styles.css';

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
  const loading = document.createElement('h6');
  loading.innerHTML = '...loading';

  document.getElementById('images').appendChild(loading);

  return !Array.isArray(ids)
    ? fetch(url + ids)
    : Promise.all(ids.map(id => fetch(url + id).then(res => res.json())));
};

// getImageURLs('https://picurl.herokuapp.com/users/', 2)
//   .then(res => res.json())
//   .then(result => console.log('single result', result))
//   .catch(() => console.log('Single - Something went wrong. Please try again'));

getImageURLs('https://picurl.herokuapp.com/users/', [2, 7, 1, 8, 3, 9])
  .then(result => console.log('Insert res into html here)', result))
  .catch(() =>
    console.log('Multiple - Something went wrong. Please try again')
  );

//insert photos in html

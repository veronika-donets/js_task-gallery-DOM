'use strict';

const item = document.getElementById('thumbs');

item.addEventListener('click', (targetEvent) => {
  targetEvent.preventDefault();
  const largeImage = document.getElementById('largeImg');
  largeImage.src = targetEvent.target.closest('a').href;
});

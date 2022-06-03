import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let stopFrame = localStorage.getItem('videoplayer-current-time');

player.on('timeupdate', throttle(insertElement, 1000));

function insertElement({ seconds }) {
  console.log('hello start');

  localStorage.setItem('videoplayer-current-time', seconds);
}

player.setCurrentTime(stopFrame);

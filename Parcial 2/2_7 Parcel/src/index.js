import { say } from 'cowsay';

let vk = say({ text: 'grazing in the browser' });
document.getElementById('vaka').innerText = vk;
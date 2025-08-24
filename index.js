import './index.css';
import JSImage from './assets/c5f8888aeda620563f2f7e8cb6234d13.jpg';

console.log('Hello World!');


const mainTitle = document.createElement('h1');

mainTitle.textContent = 'I love JavaScript';

const JSImageHTML = document.createElement('img');

JSImageHTML.src = JSImage;

document.body.append(mainTitle, JSImageHTML);
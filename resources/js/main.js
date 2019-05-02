import initUI from './ui/ui';
import './ui/forms';
import 'whatwg-fetch';
import 'flexslider';
import axios from 'axios';

initUI();

const getLuke = async () => {
    // const response = await window.fetch('https://swapi.co/api/people/1');
    const response = await axios.get('https://swapi.co/api/people/1');
    return response.data;
};

const displayLuke = async () => {
    const luke = await getLuke();
    $('#people').text(luke.name);
};

displayLuke();

const cats = ['Sylvie', 'Blixa', 'Max', 'Ramona'];
// Array.includes ES2016
console.log(cats.includes('Sylvie')); // true
// String.startsWith ES2015
console.log(cats[0].startsWith('Sy')); // true
// Array.find - ES2015
console.log(cats.find(cat => cat === 'Sylvie')); // Sylvie

$('.flexslider').flexslider({
    animation: 'slide',
});

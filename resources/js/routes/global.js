import 'flexslider';
import initForms from '../modules/forms';

const initSliders = () => {
    $('.flexslider').flexslider({
        animation: 'slide',
    });
};

// OPEN .PDF'S AND EXTERNAL LINKS IN A NEW WINDOW
const openExternalInNewWindow = () => {
    $('a[href^="http:"], a[href^="https:"]')
        .not(`[href*="${document.domain}"]`)
        .attr('target', '_blank');
    $('a[href$=".pdf"]').attr('target', '_blank');
};

const initGlobal = () => {
    openExternalInNewWindow();
    initSliders();
    initForms();
};

export default initGlobal;

import parsleyjs from 'parsleyjs';

const somethingElseRelatedToForms = () => {
    console.log('Forms!');
};

const initValidation = () => {
    $('form').parsley();
};

const initForms = () => {
    initValidation();
    somethingElseRelatedToForms();
};

export default initForms;

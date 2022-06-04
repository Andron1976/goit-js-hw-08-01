'use strict';
import throttle from 'lodash.throttle';
import '../css/03-feedback.css';
import '../css/common.css';

const FEEDBACK_FORM_STATE = 'formData';
const feedbackFormEl = document.querySelector('.feedback-form');
const formData = {};

const returnFeedbackFormEl = form => { 
    let formDataFromLocalStorage;
    try{
    formDataFromLocalStorage = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE));
    } catch(err) {
        console.log(err);
    }
    
    const formElements = form.elements;
    

    for (const key in formDataFromLocalStorage) {
        if (formDataFromLocalStorage.hasOwnProperty(key)) {
            formElements[key].value = formDataFromLocalStorage[key] ;
        }
    }
};

returnFeedbackFormEl(feedbackFormEl);

const feedbackFormElChange = throttle(event => {
    const { target } = event;

    const feedbackFormElValue = target.value;
    const feedbackFormElName = target.name;

    formData[feedbackFormElName] = feedbackFormElValue;
    

    localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(formData));
}, 500);

    const feedbackFormElSubmit = event => {
        event.preventDefault();
        if (event.target.message.value === '' || event.target.email.value === '') {
            alert('Заполните пожалуйста все поля');
            return;
        }
        const inputItem = {
            email: feedbackFormEl.email.value,
            message: feedbackFormEl.message.value,
        };
        console.log(inputItem);

        localStorage.removeItem(FEEDBACK_FORM_STATE);
        event.currentTarget.reset();
    };

feedbackFormEl.addEventListener('change', feedbackFormElChange);
feedbackFormEl.addEventListener('submit', feedbackFormElSubmit);


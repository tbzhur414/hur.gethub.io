let professionElement = document.getElementById('profession');
let professions = ['Web Developer', 'Student Leader'];
let index = 0;

setInterval(() => {
    index = (index + 1) % professions.length;
    professionElement.textContent = professions[index];
}, 10000);

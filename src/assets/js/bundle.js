'use strict';

const settingContainer = document.querySelector('.settings')
const btnSetting = document.querySelectorAll('.button-settings')

const showSetting = function() {
    settingContainer.classList.toggle('showed')
}

btnSetting.forEach(function(e) {
    e.addEventListener('click', function(e) {
        e.preventDefault();
        showSetting()
    })
})

const tooltip = document.querySelectorAll('.tooltip');

document.addEventListener('mousemove', fn, false);

function fn(e) {
    for (let i = tooltip.length; i--;) {
        tooltip[i].style.left = e.pageX - 150 + 'px';
        tooltip[i].style.top = e.pageY - 20 + 'px';
    }
}
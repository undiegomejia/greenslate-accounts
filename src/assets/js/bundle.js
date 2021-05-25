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
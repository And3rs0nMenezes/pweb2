//img profile
const image = document.querySelector('.image');
const hover = document.querySelector('.hover');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

function show() {
    hover.classList.add('active');
    modal.classList.add('show');
}

function hide() {
    hover.classList.remove('active');
    modal.classList.remove('show');
}

image.addEventListener('click', show);
close.addEventListener('click', hide);

//profile
document.addEventListener('DOMContentLoaded', function() {
    function updateText(elementSelector, text) {
        var element = document.querySelector(elementSelector);
        if (element) {
            element.textContent = text;
        }
    }

    function updateLink(elementSelector, link) {
        var element = document.querySelector(elementSelector);
        if (element) {
            element.href = link;
        }
    }

    function updateImage(elementSelector, imageUrl) {
        var element = document.querySelector(elementSelector);
        if (element) {
            element.src = imageUrl;
        }
    }

    function updateBackground(elementSelector, imageUrl) {
        var element = document.querySelector(elementSelector);
        if (element) {
            element.style.backgroundImage = 'url(' + imageUrl + ')';
        }
    }

    function loadProfile() {
        var xhr = new XMLHttpRequest();
        let userName = document.getElementById('user-name-search');
        let urlProfile = `https://api.github.com/users/${userName.value}`;
        xhr.open('GET', urlProfile, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                updateBackground('.image', data.avatar_url);
                updateText('.name', data.name);
                updateText('.sub-name', '@' + data.login);
                updateImage('.profile-img', data.avatar_url);
                updateText('.text', data.bio);
                updateLink('#ig', data.blog);
                updateLink('.follow', data.html_url);
                updateLink('#git', data.html_url);
                updateText('.public-gists', data.public_gists);
                updateText('#posts-count', data.public_repos);
                updateText('#following-count', data.following);
                updateText('#followers-count', data.followers);
            }
        };
        xhr.send();
    }

    let searchForm = document.getElementById('search-form');
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        loadProfile();
    });
});



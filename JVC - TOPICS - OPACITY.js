// ==UserScript==
// @name         JVC - TOPICS - Opacité Selon Niveau
// @version      0.1
// @description  JVC - TOPICS - Opacité Selon Niveau
// @author       JVC
// @match        https://www.jeuxvideo.com/forums/0-51-0-1-0-1-0-blabla-18-25-ans.htm
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let topics = document.querySelectorAll('li[data-id]');
    topics.forEach(async (topic) => {
        let userLink = topic.querySelector('.topic-author').href;
        let response = await fetch(userLink);
        let text = await response.text();
        let parser = new DOMParser();
        let doc = parser.parseFromString(text, 'text/html');
        let userLevel = parseInt(doc.querySelector('.user-level').textContent.replace('Niveau ', ''), 10);
        let opacity = userLevel * 0.1;
        topic.style.opacity = opacity;
    });
})();

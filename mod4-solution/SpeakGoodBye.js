(function (window) {
    const byeSpeaker = {};
    byeSpeaker.speakWord = "Hello";
    
    byeSpeaker.speak = function(name) {
        console.log(byeSpeaker.speakWord + " " + name);
    }

    window.byeSpeaker = byeSpeaker;
})(window);

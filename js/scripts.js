$(document).ready(function() {
    $('.clickable').click(function() {
        $('.walrus-showing').toggle();
        $('.walrus-hidden').toggle();
        
    });
    $('.clicksy').click(function() {
        $('.civi').slideToggle();
        $('.civiParent').fadeIn();
    });

});







/*
$(document).ready(function() {
    $('h1').click(function() {
        alert('This is a header.');
    });

    $('p').click(function() {
        alert('This is a paragraph');
    });

    $('img').click(function() {
        alert('This is an image of two walruses');
    });

});

*/
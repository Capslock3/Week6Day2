$(document).ready(function() {
    const gridContainer = $('#grid');

    
    for (let i = 0; i < 16; i++) {
        const box = $('<div class="box"></div>');
        gridContainer.append(box);
    }

    
    $('.box').click(function() {
        
        $(this).toggleClass('clicked');
    });
});

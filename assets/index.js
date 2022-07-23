let card = document.querySelectorAll('.card');
for (cards of card) {
    cards.addEventListener('mouseover', function (event) {
        if (event.target.id === "baru") {
            event.target.setAttribute("src", "assets/imgs/vivobook14.jpg");
            return;
        } 
    });

    cards.addEventListener('mouseout', function (event) {
        if (event.target.id === "baru") {
            event.target.setAttribute("src", "assets/imgs/vivobook14.jpg");
            return;
        }
    });
}





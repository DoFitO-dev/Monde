let cards = document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        let x = e.offsetX;
        let y = e.offsetY;
        let cardWidth = card.clientWidth;
        let cardHeight = card.clientHeight;
        let transX = (x - cardHeight/2);
        let transY = (y - cardHeight/2);
        card.style.transform = `translateX(${transX}px) translateY(${transY}px)`;
        card.style.boxShadow = `${transX/-1}px ${transY/-1}px 10px #fff`;
    })
    card.addEventListener('mouseout', (e) => {
        card.style.transform = ``;
        card.style.boxShadow = ``;
    })
})
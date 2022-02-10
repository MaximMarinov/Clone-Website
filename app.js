const imageBoxes = [...document.querySelectorAll('div.image-box')];

imageBoxes.forEach(i => i.addEventListener('mouseover', (e) => {
    const childrenList = i.children;
    const img = childrenList[0];
    const details = childrenList[1];
    const detailsHover = childrenList[2];

    img.style.transform = 'scale(1.2)';
    img.style.transition = 'transform .2s';

    details.style.display = 'none';
    detailsHover.style.display = 'flex';
}));

imageBoxes.forEach(i => i.addEventListener('mouseout', (e) => {
    const childrenList = i.children;
    const img = childrenList[0];
    const details = childrenList[1];
    const detailsHover = childrenList[2];

    img.style.transform = 'scale(1)';
    img.style.transition = 'transform .2s';

    details.style.display = 'flex';
    detailsHover.style.display = 'none';
}));
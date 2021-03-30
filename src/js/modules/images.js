import calcScroll from './calcScroll';

const images = () => {
    const imgPopup = document.createElement('div');
    const workSection = document.querySelector('.works');
    const bigImg = document.createElement('img');
    const scroll = calcScroll();

    imgPopup.classList.add('popup');

    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImg);

    workSection.addEventListener('click', e => {
        e.preventDefault();

        const target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            bigImg.style.height = '90%';
            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
        }
    })
};

export default images;

const seeMoreButtons = document.querySelectorAll('.see-more');

seeMoreButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const hiddenContent = button.nextElementSibling;
        if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
            hiddenContent.style.display = 'block';
            button.textContent = 'See Less';
        } else {
            hiddenContent.style.display = 'none';
            button.textContent = 'See More';
        }
    });
});

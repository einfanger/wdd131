const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

gallery.addEventListener('click', (e) => {
    if (e.target.tagName !== 'IMG') return;

    const img = e.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    const full = src.replace('sm', 'full');

    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();
});

// Close button
closeButton.addEventListener('click', () => modal.close());

// Click outside image
modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
});

// Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modal.close();
});

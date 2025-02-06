function openConfirmationModal() {
    document.querySelector('.confirmation-modal').style.display = 'flex';
}

const closeButton = document.querySelector('.close-button');
if (closeButton) {
    closeButton.addEventListener('click', closeConfirmationModal);
}

const modal = document.querySelector('.confirmation-modal');
modal.addEventListener('click', closeConfirmationModal)

function closeConfirmationModal(e) {
    if (e) e.preventDefault();
    document.querySelector('.confirmation-modal').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', () => {
    const printButton = document.getElementById('print-button');

    printButton.addEventListener('click', () => {
        window.print();
    });
});

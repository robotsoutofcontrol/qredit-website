function initAccordion(elem, option) {
    document.addEventListener('click', function (e) {
        if (!e.target.matches(elem + ' .acc-title')) return;
        else {
            if (!e.target.parentElement.classList.contains('acc-active')) {
                if (option == true) {
                    var elementList = document.querySelectorAll(elem + ' .acc-container');
                    Array.prototype.forEach.call(elementList, function (e) {
                        e.classList.remove('acc-active');
                    });
                }
                e.target.parentElement.classList.add('acc-active');
            } else {
                e.target.parentElement.classList.remove('acc-active');
            }
        }
    });
}

initAccordion('.accordion.acc-single-open', true);
initAccordion('.accordion.acc-multiple-open', false);
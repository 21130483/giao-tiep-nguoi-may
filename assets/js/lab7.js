function viewBoxLab7(boxId,buttonId) {
    var box = document.getElementById(boxId);
    var btton = document.getElementById(buttonId);

    // Đóng tất cả các box khác trước khi mở box mới
    var allBoxes = document.getElementsByClassName('view_lab7');
    for (var i = 0; i < allBoxes.length; i++) {
        if (allBoxes[i].id !== boxId) {
            allBoxes[i].style.display = 'none';
        }
    }

    var allButtons = document.getElementsByClassName('buttonViewLab7');
    for (var i = 0; i < allButtons.length; i++) {
        if (allButtons[i].id !== buttonId) {
            allButtons[i].classList.remove('buttonchoosen');
        }
    }



    box.style.display = 'block';
    btton.classList.add('buttonchoosen');
}
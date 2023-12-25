function viewBoxLab6(boxId,buttonId) {
    var box = document.getElementById(boxId);
    var btton = document.getElementById(buttonId);

    // Đóng tất cả các box khác trước khi mở box mới
    var allBoxes = document.getElementsByClassName('view_lab6');
    for (var i = 0; i < allBoxes.length; i++) {
        if (allBoxes[i].id !== boxId) {
            allBoxes[i].style.display = 'none';
        }
    }

    var allButtons = document.getElementsByClassName('buttonViewLab6');
    for (var i = 0; i < allButtons.length; i++) {
        if (allButtons[i].id !== buttonId) {
            allButtons[i].classList.remove('buttonchoosen');
        }
    }



    box.style.display = 'block';
    btton.classList.add('buttonchoosen');
}

function viewBoxLabz6(boxId,buttonId) {
    var box = document.getElementById(boxId);
    var btton = document.getElementById(buttonId);

    // Đóng tất cả các box khác trước khi mở box mới
    var allBoxes = document.getElementsByClassName('view_labz6');
    for (var i = 0; i < allBoxes.length; i++) {
        if (allBoxes[i].id !== boxId) {
            allBoxes[i].style.display = 'none';
        }
    }

    var allButtons = document.getElementsByClassName('buttonViewLabz6');
    for (var i = 0; i < allButtons.length; i++) {
        if (allButtons[i].id !== buttonId) {
            allButtons[i].classList.remove('buttonchoosen');
        }
    }



    box.style.display = 'block';
    btton.classList.add('buttonchoosen');
}

function viewBoxExLab6(boxId,buttonId) {
    var box = document.getElementById(boxId);
    var btton = document.getElementById(buttonId);

    // Đóng tất cả các box khác trước khi mở box mới
    var allBoxes = document.getElementsByClassName('two-exes');
    for (var i = 0; i < allBoxes.length; i++) {
        if (allBoxes[i].id !== boxId) {
            allBoxes[i].style.display = 'none';
        }
    }

    var allButtons = document.getElementsByClassName('two-button-exes');
    for (var i = 0; i < allButtons.length; i++) {
        if (allButtons[i].id !== buttonId) {
            allButtons[i].classList.remove('ex-choosen');
        }
    }



    box.style.display = 'block';
    btton.classList.add('ex-choosen');
}
var currentActiveButton = null;

function toggleBox(boxId) {
  var box = document.getElementById(boxId);
  var button = document.getElementById('btn' + boxId.charAt(0).toUpperCase() + boxId.slice(1));

  if (currentActiveButton !== null) {
    // Ẩn box và đặt màu trở lại cho nút trước
    var previousBox = document.getElementById(currentActiveButton.dataset.target);
    previousBox.style.display = 'none';
    currentActiveButton.classList.remove('active-button');
  }

  // Hiển thị box và đặt màu cho nút mới
  box.style.display = 'block';
  button.classList.add('active-button');
  currentActiveButton = button;
}


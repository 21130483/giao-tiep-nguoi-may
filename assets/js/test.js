const objectList = document.getElementById("object-ul");
const objectNameInput = document.getElementById("object-name");
const objectDescriptionInput = document.getElementById("object-description");
const searchInput = document.getElementById("search-object");
const selectedObjectIndexInput = document.getElementById("selected-object-index");

let objects = [];

function renderObjects() {
    objectList.innerHTML = "";
    const searchKeyword = searchInput.value.toLowerCase();
    objects.forEach((object, index) => {
        if (object.name.toLowerCase().includes(searchKeyword)) {
            const li = document.createElement("li");
            
            const nameElement = document.createElement("div");
            nameElement.textContent = `Tên: ${object.name}`;
            
            const descriptionElement = document.createElement("div");
            descriptionElement.textContent = `Mô tả: ${object.description}`;
            
            const actionsDiv = document.createElement("div");
            
            const editButton = document.createElement("button");
            editButton.textContent = "Sửa";
            editButton.addEventListener("click", () => editObject(index));
            
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Xóa";
            deleteButton.addEventListener("click", () => deleteObject(index));
            
            actionsDiv.appendChild(editButton);
            actionsDiv.appendChild(deleteButton);
            
            li.appendChild(nameElement);
            li.appendChild(descriptionElement);
            li.appendChild(actionsDiv);
            
            li.addEventListener("click", () => selectObject(index));
            
            objectList.appendChild(li);
        }
    });
}

function addObject() {
    const objectName = objectNameInput.value;
    const objectDescription = objectDescriptionInput.value;
    if (objectName) {
        objects.push({ name: objectName, description: objectDescription });
        objectNameInput.value = "";
        objectDescriptionInput.value = "";
        renderObjects();
    }
}

function editObject() {
    const selectedIndex = selectedObjectIndexInput.value;
    if (selectedIndex !== "") {
        const newName = objectNameInput.value;
        const newDescription = objectDescriptionInput.value;
        if (newName) {
            objects[selectedIndex].name = newName;
            objects[selectedIndex].description = newDescription;
            objectNameInput.value = "";
            objectDescriptionInput.value = "";
            selectedObjectIndexInput.value = "";
            renderObjects();
        }
    }
}

function deleteObject() {
    const selectedIndex = selectedObjectIndexInput.value;
    if (selectedIndex !== "") {
        objects.splice(selectedIndex, 1);
        objectNameInput.value = "";
        objectDescriptionInput.value = "";
        selectedObjectIndexInput.value = "";
        renderObjects();
    }
}

function selectObject(index) {
    objectNameInput.value = objects[index].name;
    objectDescriptionInput.value = objects[index].description;
    selectedObjectIndexInput.value = index;
}

searchInput.addEventListener("input", filterObjects);

function filterObjects() {
    renderObjects();
}

renderObjects();


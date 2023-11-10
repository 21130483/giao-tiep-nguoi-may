const schoolList = document.getElementById("school-ul");
const idSchoolInput = document.getElementById("school-id");
const nameSchoolInput = document.getElementById("school-name");
const educationInput = document.getElementById("education");
const phoneNumberInput = document.getElementById("phone-number");
const establishInput = document.getElementById("establish");
const provinceInput = document.getElementById("city");
const cityInput = document.getElementById("district");
const wardInput = document.getElementById("ward");

// let idSchools = [];
// let nameSchools = [];
// let educations = [];
// let phoneNumbers = [];
// let establishs = [];
// let provinces = [];
// let citys = [];
// let wards = [];  

let schools = [];
schools.push({ id: "NLU", name: "Nông Lâm Thành phố Hồ Chí Minh", edu: "Đại học", phonenumber: "028 3896 6780", esta: "1955-11-19", province: "Thành phố Hồ Chí Minh", city: "Quận Thủ Đức", ward: "Phường Linh Trung" });

function renderSchools() {
    schoolList.innerHTML = "";
    schools.forEach((school, index) => {
        // for (let i = 0; i < nameSchools.length; i++) {


        //idschool
        const li = document.createElement("li");
        li.classList.add("school");

        const idSchool = document.createElement("div");
        idSchool.classList.add("center")

        const pidSchool = document.createElement("p")
        pidSchool.textContent = school.id;

        idSchool.appendChild(pidSchool);

        //nameschool

        const nameSchool = document.createElement("div");
        nameSchool.classList.add("center")

        const pnameSchool = document.createElement("p")
        pnameSchool.textContent = school.name;

        nameSchool.appendChild(pnameSchool);

        //education

        const education = document.createElement("div");
        education.classList.add("center")

        const peducation = document.createElement("p")
        peducation.textContent = school.edu;

        education.appendChild(peducation);

        //phone number
        const phoneNumber = document.createElement("div");
        phoneNumber.classList.add("center")

        const pphoneNumber = document.createElement("p")
        pphoneNumber.textContent = school.phonenumber;

        phoneNumber.appendChild(pphoneNumber);

        //establish
        const establish = document.createElement("div");
        establish.classList.add("center")

        const pestablish = document.createElement("p")
        pestablish.textContent = school.esta;

        establish.appendChild(pestablish);

        //address
        // const address = document.createElement("div");
        // address.classList.add("center")

        // const paddress = document.createElement("p")
        // paddress.textContent = school.address;

        // address.appendChild(paddress);

        //province
        // const pprovince = document.createElement("p")
        // pprovince.textContent = school.province;
        // console.log(pprovince);
        //city

        // const pcity = document.createElement("p")
        // pcity.textContent = school.city;


        //ward
        // const pward = document.createElement("p")
        // pward.textContent = school.ward;

        //address
        // console.log(pprovince);
        // console.log(pcity);
        // console.log(pward);
        // console.log(school.province+", "+school.city+", "+school.ward);

        const address = document.createElement("div");
        address.classList.add("center")

        const paddresss = document.createElement("p")
        paddresss.textContent = school.province + ", " + school.city + ", " + school.ward;

        address.appendChild(paddresss);

        //edit and delete
        const editDelete = document.createElement("div");
        editDelete.classList.add("edit-delete");

        const editButton = document.createElement("button");
        editButton.classList.add("edit");
        editButton.textContent = "Sửa";
        editButton.addEventListener("click", () => editSchool(index));

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.textContent = "Xóa";
        deleteButton.addEventListener("click", () => deleteSchool(index));

        editDelete.appendChild(editButton);
        editDelete.appendChild(deleteButton);

        //appendchild to li

        li.appendChild(idSchool);
        li.appendChild(nameSchool);
        li.appendChild(education);
        li.appendChild(phoneNumber);
        li.appendChild(establish);
        li.appendChild(address);
        li.appendChild(editDelete);




        // const pname = document.createElement("p")

        // pname.textContent = school;

        // nameSchool.appendChild(pname);

        // nameSchool.textContent = school;


        // const education = document.createElement("div");
        // education.textContent = educations[index];

        // const phoneNumber = document.createElement("div");
        // phoneNumber.textContent = phoneNumbers[index];

        // const establish = document.createElement("div");
        // establish.textContent = establishs[index];

        // const address = document.createElement("div");
        // address.textContent = `${provinces[index]},${citys[index]},${wards[index]}`;

        // const editDelete = document.createElement("div");
        // editDelete.textContent = establishs[index];

        // const editButton = document.createElement("button");
        // editButton.textContent = "Sửa";
        // editButton.addEventListener("click", () => editObject(index));

        // const deleteButton = document.createElement("button");
        // deleteButton.textContent = "Xóa";
        // deleteButton.addEventListener("click", () => deleteObject(index));

        // editDelete.appendChild(editButton);
        // editDelete.appendChild(deleteButton);

        // li.appendChild(idSchool);
        // li.appendChild(nameSchool);
        // li.appendChild(education);
        // li.appendChild(phoneNumber);
        // li.appendChild(establish);
        // li.appendChild(address);
        // li.appendChild(editDelete);

        // li.addEventListener("click", () => selectObject(index));



        schoolList.appendChild(li)
    });
    // }


    // objectList.innerHTML = "";
    // objects.forEach((object, index) => {
    //     const li = document.createElement("li");
    //     li.textContent = object;

    //     const editButton = document.createElement("button");
    //     editButton.textContent = "Sửa";
    //     editButton.addEventListener("click", () => editObject(index));

    //     const deleteButton = document.createElement("button");
    //     deleteButton.textContent = "Xóa";
    //     deleteButton.addEventListener("click", () => deleteObject(index));

    //     li.appendChild(editButton);
    //     li.appendChild(deleteButton);

    //     objectList.appendChild(li);
    // });
}

function addSchool() {
    console.log(idSchoolInput.value);
    console.log(nameSchoolInput.value);
    console.log(educationInput.value);
    console.log(phoneNumberInput.value);
    console.log(establishInput.value);
    console.log(provinceInput.value);
    console.log(cityInput.value);
    console.log(wardInput.value);

    const idSchool = idSchoolInput.value;
    const nameSchool = nameSchoolInput.value;
    const education = educationInput.value;
    const phoneNumber = phoneNumberInput.value;
    const establish = establishInput.value;
    const province = provinceInput.value;
    const city = cityInput.value;
    const ward = wardInput.value;
    // if (idSchool && nameSchool && education && phoneNumber && establish && province && city && ward) {

    if (nameSchool) {
        // idSchools.push(idSchool);
        // nameSchools.push(nameSchool);
        // educations.push(education);
        // phoneNumbers.push(phoneNumber);
        // establishs.push(establish);
        // provinces.push(province);
        // citys.push(city);
        // wards.push(ward);
        schools.push({ id: idSchool, name: nameSchool, edu: education, phonenumber: phoneNumber, esta: establish, province: province, city: city, ward: ward });

        idSchoolInput.value = "";
        nameSchoolInput.value = "";
        educationInput.value = "";
        phoneNumberInput.value = "";
        establishInput.value = "";
        provinceInput.value = "";
        cityInput.value = "";
        wardInput.value = "";


        renderSchools();
    }

    // objects.push(objectName);
    // objectNameInput.value = "";
    // renderObjects();
    // }
}

function editSchool(index) {
    var themButton = document.getElementById("them");
    var suaButton = document.getElementById("sua");
    // document.getElementById("myButton").onclick = editFinish(index);

    themButton.style.display = "none"
    suaButton.style.display = "block";
    suaButton.addEventListener("click", () => editFinish(index));


    const school = schools[index];

    idSchoolInput.value = school.id;
    nameSchoolInput.value = school.name;
    educationInput.value = school.edu;
    phoneNumberInput.value = school.phonenumber;

    // Chuyển giá trị cho input kiểu date (yyyy-MM-dd)
    const customDate = school.esta;
    // const parts = customDate.split('-');
    // const currentDate = new Date(Date.UTC(parts[2], parts[1] - 1, parts[0], 12, 0, 0));
    // const formattedDate = currentDate.toISOString().split('T')[0];

    establishInput.value = customDate;

    var cityValue = school.province;
    var districtValue = school.city;
    var wardValue = school.ward;

    // Đặt giá trị cho từng select
    citis.value = cityValue;

    // Gọi sự kiện change để cập nhật giao diện
    var event = new Event("change");
    citis.dispatchEvent(event);

    // Tương tự cho district
    district.value = districtValue;
    district.dispatchEvent(event);

    // Và cho ward
    wards.value = wardValue;
    wards.dispatchEvent(event);

    // provinceInput.value = cityValue;
    // cityInput.value = districtValue;
    // wardInput.value = wardValue;



    // const newName = prompt("Sửa đối tượng", schools[index]);
    // if (newName !== null) {
    //     objects[index] = newName;
    //     renderObjects();
    // }
}

function editFinish(index) {
    const idSchool = idSchoolInput.value;
    const nameSchool = nameSchoolInput.value;
    const education = educationInput.value;
    const phoneNumber = phoneNumberInput.value;
    const establish = establishInput.value;
    const province = provinceInput.value;
    const city = cityInput.value;
    const ward = wardInput.value;

    if (nameSchool) {
        var editSchool = ({ id: idSchool, name: nameSchool, edu: education, phonenumber: phoneNumber, esta: establish, province: province, city: city, ward: ward });
        schools[index] = editSchool;

        renderSchools();
    }
    const themButton = document.getElementById("them");
    const suaButton = document.getElementById("sua");

    themButton.style.display = "block"
    suaButton.style.display = "none";


    idSchoolInput.value = "";
    nameSchoolInput.value = "";
    educationInput.value = "";
    phoneNumberInput.value = "";
    establishInput.value = "";
    provinceInput.value = "";
    cityInput.value = "";
    wardInput.value = "";
}

function deleteSchool(index) {
    // const confirmation = confirm("Bạn có chắc chắn muốn xóa đối tượng này?");
    // if (confirmation) {
    schools.splice(index, 1);
    renderSchools();
    // }
}

renderSchools();


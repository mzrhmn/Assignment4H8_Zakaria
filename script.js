const initialData = {
  name: "Nama Anda",
  role: "Front End Designer",
  availability: "Full Time",
  age: "19",
  location: "Jakarta",
  yoe: "2",
  email: "email@gmail.com",
};

function loadData() {
  const data = JSON.parse(localStorage.getItem("profileData")) || initialData;
  document.getElementById("name").textContent = data.name;
  document.getElementById("role").textContent = data.role;
  document.getElementById("availability").textContent = data.availability;
  document.getElementById("age").textContent = data.age;
  document.getElementById("location").textContent = data.location;
  document.getElementById("yoe").textContent = data.yoe;
  document.getElementById("email").textContent = data.email;
}

function saveData(data) {
  localStorage.setItem("profileData", JSON.stringify(data));
}

document.getElementById("edit-btn").addEventListener("click", () => {
  const data = JSON.parse(localStorage.getItem("profileData")) || initialData;
  document.getElementById("input-name").value = data.name;
  document.getElementById("input-role").value = data.role;
  document.getElementById("input-availability").value = data.availability;
  document.getElementById("input-age").value = data.age;
  document.getElementById("input-location").value = data.location;
  document.getElementById("input-yoe").value = data.yoe;
  document.getElementById("input-email").value = data.email;

  new bootstrap.Modal(document.getElementById("editModal")).show();
});

document.getElementById("edit-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const updatedData = {
    name: document.getElementById("input-name").value,
    role: document.getElementById("input-role").value,
    availability: document.getElementById("input-availability").value,
    age: document.getElementById("input-age").value,
    location: document.getElementById("input-location").value,
    yoe: document.getElementById("input-yoe").value,
    email: document.getElementById("input-email").value,
  };
  saveData(updatedData);
  loadData();

  bootstrap.Modal.getInstance(document.getElementById("editModal")).hide();
});

loadData();

document.addEventListener("DOMContentLoaded", function () {
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const phoneInput = document.getElementById("phone");
  const emailInput = document.getElementById("email");
  const addBookmarkBtn = document.getElementById("addBookmarkBtn");
  const contactList =document.getElementById("bookmarkList");

  function loadContacts() {
    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    contactList.innerHTML = "";

    contacts.forEach((contact, index)=> {
      const li = document.createElement("li");
      li.textContent = `ім'я: ${contact.firstName}  прізвище:${contact.lastName} Телефон: ${contact.phone} електронна адреса: ${contact.email}`;
      const deleteBtn= document.createElement("button");
      deleteBtn.textContent = "X";
      deleteBtn.classList.add("delete") ;
      deleteBtn.onclick = function () {
        contacts.splice(index, 1);
        saveContacts(contacts);
      };
      li.appendChild(deleteBtn);
      contactList.appendChild(li);
    });
  }

  function saveContacts(contacts) {
    localStorage.setItem("contacts", JSON.stringify(contacts));
    loadContacts();
  }

  addBookmarkBtn.addEventListener("click", function () {
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();

    if (firstName && lastName && phone && email){
      const contacts= JSON.parse(localStorage.getItem("contacts")) || [];
      contacts.push({firstName,lastName,phone, email });
      saveContacts(contacts);
      
      firstNameInput.value = "";
      lastNameInput.value = "";
      phoneInput.value = "";
      emailInput.value = "";
    }

  }
) ; 

  loadContacts();
}) ;

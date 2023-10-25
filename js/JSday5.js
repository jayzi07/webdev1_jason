var phoneBook = [];

function submitContact() {
    var userNameInput = document.getElementById("userName");
    var userNumberInput = document.getElementById("userNumber");

    var userName = userNameInput.value;
    var userNumber = userNumberInput.value;

    if (userName === "" || userNumber === "") {
        alert("Both fields are required");
    } else {
        addContact(userName, userNumber);

        userNameInput.value = "";
        userNumberInput.value = "";

        alert("Contact added, phonebook updated");
    }
}

function addContact(userName, userNumber) {
    var contactObject = {
        contactName: userName,
        contactNumber: userNumber
    };

    phoneBook.push(contactObject);
}

function viewContacts() {
    var contactList = document.getElementById("contactList");
    contactList.innerHTML = "";

    if (phoneBook.length === 0) {
        contactList.innerHTML = "No contacts listed.";
        console.log('No contacts listed.');
    } else {
        var html = "<ul>";
        for (var i = 0; i < phoneBook.length; i++) {
            var contact = phoneBook[i];
            html += "<li>Name: " + contact.contactName + ", Number: " + contact.contactNumber + "</li>";
        }
        html += "</ul";
        contactList.innerHTML = html;
        console.log(phoneBook);
    }
}

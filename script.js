// Array untuk menyimpan daftar kontak
let contacts = [
    {
      firstName: "Emily",
      lastName: "Johnson",
      email: "emily.johnson@x.dummyjson.com",
      imageUrl: "https://dummyjson.com/icon/emilys/128"
    },
    {
      firstName: "Michael",
      lastName: "Williams",
      email: "michael.williams@x.dummyjson.com",
      imageUrl: "https://dummyjson.com/icon/michaelw/128"
    },
    {
      firstName: "Sophia",
      lastName: "Brown",
      email: "sophia.brown@x.dummyjson.com",
      imageUrl: "https://dummyjson.com/icon/michaelw/128"
    }
  ];
  
  // Function untuk menampilkan kontak ke dalam DOM
  function renderContacts() {
    const contactList = document.getElementById('contact');
    contactList.innerHTML = ''; // Bersihkan list sebelum di-render ulang
    
    contacts.forEach((contact, index) => {
      const contactCard = `
        <div class="contact_card">
          <div class="contact_info">
            <img src="${contact.imageUrl}" alt="Profile Image">
            <div class="contact_info_text">
              <h3>${contact.firstName} ${contact.lastName}</h3>
              <p>${contact.email}</p>
            </div>
          </div>
          <button class="delete_button" onclick="deleteContact(${index})">X</button>
        </div>
      `;
      contactList.innerHTML += contactCard;
    });
  }
  
  // Function untuk menambah kontak baru
  function addContact() {
    const firstName = document.getElementById('formFirstName').value;
    const lastName = document.getElementById('formLastName').value;
    const email = document.getElementById('formEmail').value;
  
    // Validasi input tidak kosong
    if (firstName === '' || lastName === '' || email === '') {
      alert('All fields are required!');
      return;
    }
  
    const newContact = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      imageUrl: "image/default.jpg" 
    };
  
    contacts.push(newContact);
  
    // Render ulang kontak
    renderContacts();
  
    // Kosongkan input form
    document.getElementById('formFirstName').value = '';
    document.getElementById('formLastName').value = '';
    document.getElementById('formEmail').value = '';
  }
  
  // Function untuk menghapus kontak
  function deleteContact(index) {
    contacts.splice(index, 1); // Hapus kontak berdasarkan index
    renderContacts(); // Render ulang kontak
  }
  
  // Panggil renderContacts pada saat halaman di-load pertama kali
  window.onload = renderContacts;
  
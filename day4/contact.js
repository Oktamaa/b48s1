function submitData(event) {
    event.preventDefault()

    let name = document.getElementById("input-name").value;
    let email = document.getElementById("input-email").value;
    let phone = document.getElementById("input-phone").value;
    let subject = document.getElementById("input-subject").value;
    let message = document.getElementById("input-message").value;

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    if (name == "") {
        return alert('Nama harus diisi dulu!')
    } else if (email == "") {
        return alert('Email harus diisi dulu!')
    } else if (phone == "") {
        return alert('Phone harus diisi dulu!')
    } else if (subject == "") {
        return alert('Subject harus diisi dulu!')
    } else if (message == "") {
        return alert('Message harus diisi dulu!')
    }

    alert(`name : ${name}\nemail : ${email}\nphone : ${phone}\nsubject : ${subject}\nmessage: ${message}`)

    const emailReceiver = "adhitiyaoktama@gmail.com"

    let a = document.createElement('a')
    a.href = `mailto:${email}?subject=${subject}&body=Halo nama saya ${name},\n${message}, silahkan hubungi saya di nomor berikut : ${phone}`
    a.click()

    let objectData= {
        name: name,
        email,
        phone,
        subject,
        message,
    };
    console.log(objectData);

}

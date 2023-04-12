let userFromDOM = document.querySelector('#userForm')
userFromDOM.addEventListener('submit', formHandler)

const alertDOM = document.querySelector('.alert') // üste çıkacak mesaj tanımlaması


// üstte çıkan mesajı duruma göre vermek için yazığımız kod
const alertFunction = (title, message, className="warning") => `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong>${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

function formHandler(event) {
    event.preventDefault() // sürekli yenilenmemesi için
    const ORDER = document.querySelector("#productname")
    const PİECE = document.querySelector("#piece")

    if (ORDER.value && PİECE.value) {
        addItem(ORDER.value, PİECE.value)
        ORDER.value = ""
        PİECE.value = ""
        alertDOM.innerHTML = alertFunction(
            "Tebrikler..",
            "Siparişiniz işlendi",
            "success"
        )

    } else {
        alertDOM.innerHTML = alertFunction(
            "!!! HATA !!!",
            "Lütfen Girilen Değerleri Kontrol Edin",
            "warning"
        )
    }
}

let orderListDOM = document.querySelector('#detailList')

const addItem = (productName, piece) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `
        ${productName}
        <span class="badge bg-primary rounded-pill">${piece}</span>
    `
    liDOM.classList.add(
        'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center'
    )
    orderListDOM.append(liDOM)
}


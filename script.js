const scriptURL = 'https://script.google.com/macros/s/AKfycbwQzhOkQ3KTTWb1qN5RPJ7jUTZNCGK-8k6Ex61ImC8hOUKARlVWICKbdT61yVQAGQzeOQ/exec'

const form = document.forms['submit-to-google-sheets']
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', e => {
    e.preventDefault()
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');

    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            myAlert.classList.toggle('d-none');
            form.reset();
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})
const scriptURL = 'https://script.google.com/macros/s/AKfycbwQzhOkQ3KTTWb1qN5RPJ7jUTZNCGK-8k6Ex61ImC8hOUKARlVWICKbdT61yVQAGQzeOQ/exec'

const form = document.forms['submit-to-google-sheets']
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', e => {
    e.preventDefault()
        // Ketika tombol submit diklik
        // tampilkan tombol loading, hilangkan tombol kirim
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');

    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            // Tampilkan tombol kirim, hilangkan tombol loading
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            // Tampilkan alert
            myAlert.classList.toggle('d-none');
            // Reset formnya
            form.reset();
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})
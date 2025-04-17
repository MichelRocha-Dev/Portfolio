let moreServices = document.querySelectorAll('.servicos-box');

moreServices.forEach(function (servicosMore) {
    servicosMore.addEventListener('click', function () {
        servicosMore.classList.toggle('ativa');
    
})
})

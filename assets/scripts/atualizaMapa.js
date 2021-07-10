const cidade = document.querySelector('#cidade');
const mapa = document.querySelector('#mapa-iframe')

cidade.addEventListener('click', () => {

    if (cidade.value === 'belem') {

        mapa.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31908.61456315262!2d-48.47524600332434!3d-1.4293733655313807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a46669f5986e5f%3A0xe336db2d6ab189cc!2sBel%C3%A9m%20-%20PA!5e0!3m2!1spt-PT!2sbr!4v1625945508166!5m2!1spt-PT!2sbr")

    }

    if (cidade.value === 'manaus') {

        mapa.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127493.9864590299!2d-60.037143980563066!3d-3.0444883548770445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1bc8b37647b7%3A0x2b485c9ff765a9cc!2sManaus%2C%20AM!5e0!3m2!1spt-PT!2sbr!4v1625948744361!5m2!1spt-PT!2sbr")


    }

}

)
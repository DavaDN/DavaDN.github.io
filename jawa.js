data = [{
    'img1': 'asset/beranda.png',
    'title': 'Web E-Commerce',
    'subtitle': 'Html',
    'desc' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam, officia veniam nulla voluptates iusto.'
},{
    'img1': 'asset/beranda2.png',
    'title': 'Web E-Commerce',
    'subtitle': 'CSS',
    'desc' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam, officia veniam nulla voluptates iusto.'
}]

var container = document.querySelector('.container-project')

data.forEach(element => {
    container.innerHTML +=
    `<div class="project">
    <div class="img-project">
        <img src="`+element.img1+`" alt="">
        <img src="${element.img2}" alt="">
    </div>
    <div class="desc-project">
        <h1>${element.title}</h1>
        <h2>${element.subtitle}</h2>
        <h3>${element.desc}</h3>
    </div>
    <button class="read-more">read more</button>
</div>`


});
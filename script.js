const ovelhinhas = [
    {
        id: 1,
        name: 'Joyce',
        age: '8 years',
        behave: 'I am adventurous and sometimes angry.',
        image:'https://thumbs2.imgbox.com/34/e0/mDDfrBOw_t.jpeg'
    },

    {
        id: 2,
        name: 'Rebecca',
        age: '8 years',
        behave: 'I am friendly and sometimes sad when I feel lonely.',
        image:'https://thumbs2.imgbox.com/94/a1/nbfra72X_t.jpeg'
    },

    {
        id: 3,
        name: 'Chloe',
        age: '8 years',
        behave: 'I am happy and sometimes clumsy.',
        image:'https://thumbs2.imgbox.com/05/c2/5yN6GINy_t.jpeg'
    },
    {
        id: 4,
        name: 'Lino',
        age: '9 years',
        behave: 'I wanna be austronaut but I am afraid.',
        image:'https://thumbs2.imgbox.com/2d/60/esCAyVil_t.jpeg'
    },
    {
        id: 5,
        name: 'Leo',
        age: '9 years',
        behave: 'I like to be good I am love.',
        image:'https://thumbs2.imgbox.com/4c/a5/EyfygKfu_t.jpeg'
    },

]

const secao = document.querySelector('.asovelhinhas')
const botao = document.querySelector('.btn')

botao.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
})

const todasAsOvelhinhas = ovelhinhas.map((ovelhinha) => {
    return `<div> 
    <p>Name: ${ovelhinha.name}</p>
    <p>Age: ${ovelhinha.age}</p>
    <img src="${ovelhinha.image}"> 
    <p>Behave: ${ovelhinha.behave} </p>
    </div>`
})

secao.innerHTML = todasAsOvelhinhas
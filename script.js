const ovelhinhas = [
    {
        id: 1,
        nome: 'Joyce',
        idade: 8,
        habilidades: 'dfas dlfjajf',
        foto:''
    },

    {
        id: 2,
        nome: 'Rebecca',
        idade: 8,
        habilidades: 'lorem ipsum dolor, sit amet',
        foto:''
    },

    {
        id: 3,
        nome: 'Chloe',
        idade: 8,
        habilidades: 'lorem ipsum dolor, sit amet',
        foto:''
    },
    {
        id: 4,
        nome: 'Lino',
        idade: 8,
        habilidades: 'lorem adjaskljfd lasj a',
        foto:''
    },
    {
        id: 5,
        nome: 'Leo',
        idade: 8,
        habilidades: 'lorem ipsum dolor, sit amet',
        foto:''
    },

]

const secao = document.querySelector('.asovelhinhas')

const todasAsOvelhinhas = ovelhinhas.map((ovelhinha) => {
    return `<div> 
    <p>Nome: ${ovelhinha.nome}</p>
    <p>Idade: ${ovelhinha.idade}</p>
    <img src="${ovelhinha.foto}"> 
    <p>Habilidades: ${ovelhinha.habilidades} </p>
    </div>`
})

secao.innerHTML = todasAsOvelhinhas
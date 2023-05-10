let tbody = document.querySelector('tbody')
let form = document.querySelector('form')
let inputName = document.querySelector('.names')
let inputAge = document.querySelector('.ages')
let bg = document.querySelector('.bg')
let model = document.querySelector('.model')
let close = document.querySelector('.close')
let model_name = document.querySelector('.model_name')
let model_age = document.querySelector('.model_age')
let form_edit = document.querySelector('.form_edit')
let form_edit_btn = document.querySelector('.xamro')


console.log(inputName);
let date = new Date
date = date.getFullYear()
let dataBase = []
let list



function reload(params) {
    let tr = document.createElement('tr')
    let num = document.createElement('td')
    let names = document.createElement('td')
    let year = document.createElement('td')
    let icons = document.createElement('td')
    let edit = document.createElement('img')
    let delet = document.createElement('img')

    tr.classList.add('tr')
    num.classList.add('num')
    names.classList.add('names')
    year.classList.add('year')
    icons.classList.add('icons')
    edit.classList.add('edit')
    delet.classList.add('delet')

    for (let item of dataBase) {
        num.innerHTML = item.num
        names.innerHTML = item.name
        year.innerHTML = item.age
        edit.src = "img/edit.png"
        delet.src = "img/delete (1).png"

        tbody.append(tr)
        tr.append(num, names, year, icons)
        icons.append(edit, delet)

        delet.onclick = () => {
            dataBase = dataBase.filter(el => el.id !== item.id)
            tr.remove()
        }

        edit.onclick = () => {
            bg.style.display = 'block'
            model.style.display = 'block'
            for(let elem of dataBase) {
                model_name.value = elem.name
                model_age.value = elem.age
            }            
        }
    }

    close.onclick = () => {
        bg.style.display = 'none'
        model.style.display = 'none'
    }

    form_edit_btn.onclick = () => {
        tr.remove()
    }


}


form.onsubmit = (event) => {
    event.preventDefault();
    let list = {
        id: Math.floor(Math.random() * 100) + 1,
        num: dataBase.length + 1,
        name: inputName.value,
        age: inputAge.value
    }

    if (inputName.value.length !== 0 && inputAge.value.length !== 0) {
        dataBase.push(list)
    }
    console.log(dataBase);
    reload()
}

form_edit.onsubmit = (event) => {
    event.preventDefault();
    bg.style.display = 'none'
    model.style.display = 'none'
    let list = {
        id: Math.floor(Math.random() * 100) + 1,
        num: dataBase.length + 1,
        name: model_name.value,
        age: model_age.value
    }

    if (model_name.value.length !== 0 && model_age.value.length !== 0) {
        dataBase.push(list)
    }
    reload()
}




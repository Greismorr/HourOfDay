function loadHour(){
    const date = new Date()
    const hour = date.getHours()
    var siteParagraph = window.document.getElementById('siteParagraph')
    var bodyText = window.document.getElementById('bodyText')
    var welcomeText = window.document.getElementById('welcomeText')
    var img = window.document.createElement('img')
    
    img.setAttribute('id', 'foto')

    if(hour >= 3 && hour <= 12){
        changeAppearance('Matutino')
    }
    else if(hour > 12 && hour <= 18){
        changeAppearance('Vespertino')
    }else{
        changeAppearance('Noturno')
    }
    siteParagraph.appendChild(img)

    //Function that transforms the website
    
    function changeAppearance(hourDay){
        if(hourDay === 'Matutino'){
            siteParagraph.innerHTML += `${hour} horas.<br>Estamos no turno Matutino.<br>`        
            img.setAttribute('src', '../_img/matutino.png')
            welcomeText.innerHTML = 'Bom Dia!'
            window.document.body.style.backgroundColor = '#A5D7D8' 
            bodyText.style.boxShadow = '0px 0px 5px #000000' 
            bodyText.style.color = '#000000'
        }else if(hourDay === 'Vespertino'){
            siteParagraph.innerHTML += `${hour} horas.<br>Estamos no turno Vespertino.<br>`
            img.setAttribute('src', '../_img/vespertino.png')
            welcomeText.innerHTML = 'Boa Tarde!'
            window.document.body.style.backgroundColor = '#D0956B' 
            bodyText.style.boxShadow = '0px 0px 5px #5C4513' 
            bodyText.style.color = '#5C4513'
        }else{
            siteParagraph.innerHTML += `${hour} horas.<br>Estamos no turno Noturno.<br>`
            img.setAttribute('src', '../_img/noturno.png')
            welcomeText.innerHTML = 'Boa Noite!'
            window.document.body.style.backgroundColor = '#000000'
            bodyText.style.boxShadow = '0px 0px 5px red' 
            bodyText.style.color = '#EB2D2D'
        }
    }
}



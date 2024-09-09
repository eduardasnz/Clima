const key = "73bda60122bbe56919f4163680914ad9";


function dadosTela(dados){
    document.querySelector('.cidade').innerHTML ="Tempo em " + dados.name
    document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector('.texto-previsao').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png` 
    
    console.log(dados)
}

// async é quando tem servidor
async function searchCity(city){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( Response => Response.json())
    dadosTela(dados)
}

function ButtonClick(){
    const city = document.querySelector('input').value;

    searchCity(city)
}
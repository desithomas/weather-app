//create fetch request to test the weather data from the National Weather Service's API found at https://api.weather.gov/


//url = ""
//This is a promise chain 
// fetch(url)
// .then(res => res.json())
// .then(data => {
//     console.log(data)
// })
// .catch((err) => console.log(err))

//to use an async function you have to use async keyword followed by the word function 
//when you create an asynchronous function, you get access to the await keyword and 

//async/await is the better method

// async function getDataWeather(){
//     try{
//         const res = await fetch(url)
//         const data = await res.json()
//         console.log(data)
//     } catch (err){
//         console.log(err)
//     }
// }

// getWeatherData()

//Pokemon example 

//What is fetch? A function used for making HTTP requests to fetch resources. 


// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(res => res.json())
// .then(data => {
//     console.log(data)
// })
// .catch((err) => console.log(err))

//Dagi's suggestion of code 
//const imageURL = `https://openweathermap.org/payload/api/media/file/${imageCode}@2x.png`
        // img.src = imageURL




//const apiKey = "8b0ce663d9594ecb818145522262309"
//const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${userInput}&aqi=no`


//connect the button to an event Listener 


//connect the input to an event listener 
// const userInput = document.querySelector('#userCityInput').addEventListener('input').value.toLowerCase()
// const userButton = document.querySelector('#userCityButton').addEventListener('click', getWeatherData)
// const apiKey = "8b0ce663d9594ecb818145522262309"
// const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${userInput}&aqi=no`

// fetch(url)
// .then(res => res.json()) 
// .then(data => (console.log(data)))

// .catch(err => {
//     console.log(`error: ${err}`)
// })



//there needs to be a button and a smurf listening for a click


document.querySelector('#userGetWeatherBtn').addEventListener('click', getWeatherData)

function getWeatherData(){

    const city = document.querySelector('#userCityInput').value.toLowerCase()
    const state = document.querySelector('#userStateInput').value.toLowerCase()

    const secret = "c0a66907869eb4103b8d2b11e5ba5067"

    //hardcoded to the US for the first go. this is their 'direct geocoding api' https://openweathermap.org/api/geocoding-api?collection=other#direct (page with all of the information about it)
    const url= `https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},US&limit=5&appid=${secret}`

    //it works! 
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        //const displayUserCity = data[0].name 
        //const displayUserState = data[0].state 

        const lat = data[0].lat
        const lon = data[0].lon

        const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${secret}`

        fetch(currentWeatherUrl)
        .then(res => res.json())
        .then(currentWeatherData => {
            console.log(currentWeatherData)

            const straightKelvinWeather = currentWeatherData.main?.temp 

            const convertedFahrenheitTemp = Math.round((straightKelvinWeather - 273.15) * 1.8 + 32)

            // TO DO: figure out how to get this to work later; the icons don't work properly
            // document.querySelector('#displayWeatherIcon').src = currentWeatherData.weather[0]?.icon

            document.querySelector('#displayWeatherToUser').innerText = `The weather in ${city}, ${state} is ${convertedFahrenheitTemp} degrees Fahrenheit.`

        })

    })
    .catch(err => {console.log(`error: ${err}`)})
}

//stop forgetting to declare your variables!!!!!!!! Side effect: JS assigns it to the global scope

//current weather data page with the information about it https://openweathermap.org/api/current?collection=current_forecast


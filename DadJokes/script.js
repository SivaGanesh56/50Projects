const jokeEle = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke();

jokeBtn.addEventListener('click', generateJoke);

// USING async/await
async function generateJoke() {

    const config =  {
        headers: {
            Accept: 'application/json'
        }
    };

    const res = await fetch('https://icanhazdadjoke.com', config);

    const data = await res.json();
    jokeEle.innerHTML = data.joke;
    
};

// USING .then()

// function generateJoke() {

//     const config =  {
//         headers: {
//             Accept: 'application/json'
//         }
//     };

//     fetch('https://icanhazdadjoke.com', config)
//         .then(res => res.json())
//         .then(data => {
//             jokeEle.innerHTML = data.joke;
//         });
// };
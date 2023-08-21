const setup = document.getElementById('setup')
const punchline = document.getElementById('punchline')
const btn = document.getElementById('btn')
const source = document.getElementById('source')
const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '85bfea2bf9msh2f20da70dafe6b0p1e2be2jsn48fef057db79',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
};



const getJokes = async ()=>{
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        setup.innerText = result.body[0].setup;
        punchline.innerText = result.body[0].punchline;
        source.src = "animation.mp4"
        
    } catch (error) {
        console.error(error);
    }
}
// getJokes();
btn.addEventListener('click', getJokes)
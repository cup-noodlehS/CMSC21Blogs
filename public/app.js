const jokebtn = document.querySelector(".jokebtn");
const joketext = document.querySelector(".joketext");
jokebtn.addEventListener("click", async () => {
  joke = await axios.get("https://v2.jokeapi.dev/joke/Any?type=single");
  joketext.innerHTML = joke.data.joke;
});

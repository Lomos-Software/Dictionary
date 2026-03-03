//© 2026 Lomos tech. All rights reserved
function fetchdata() {
    const word = document.getElementById("wordinput").value;
    const output = document.getElementById("output");

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(res => res.json())
        .then(data => {
            const meaning = data[0].meanings[0].definitions[0].definition;
            output.textContent = meaning;
        })

}

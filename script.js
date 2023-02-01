fetch ("https://api.github.com/emojis")
    .then(response => response.json())
    .then(data => {
        var btn = document.querySelector("#btn")
        console.log(data);
        btn.addEventListener("click", function () {
            var input = document.querySelector("#input")
            for (const key in data) {
                if (input.value == key) {
                    console.log(key);
                    console.log(data[key]);
                    document.querySelector("#emoji").innerHTML = `<img src="${data[key]}">`
                  
                } else // window.alert("Dette er ikke en emoji")
            }
        })
    })
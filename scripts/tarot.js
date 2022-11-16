const spreadList = document.getElementById("sidebar-left")

fetch('/assets/tarot/spreads.json')
    .then(response => response.json())
    .then(data => {
        for (const c in data) {
            console.log(data[c])
            let div = document.createElement("div")
            let name = document.createElement("h3")
            let desc = document.createElement("p")

            div.className = "spread-list"
            div.appendChild(name)
            div.appendChild(desc)

            name.textContent = data[c].name
            desc.textContent = data[c].desc

            spreadList.appendChild(div)
        }
    });

function showHelp() {
    let help = document.getElementById("help")
    if (help.style.display != "block")
        help.style.display = "block"
    else
        help.style.display = "none"
}
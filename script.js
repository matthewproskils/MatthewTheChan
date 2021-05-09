let CreateEl = (tag, attr, inner)=>{
    let el = document.createElement("tag");
    
    Object.entries(attr).forEach(e => {el.setAttribute(e[0], e[1])});
    
    inner.forEach(e => {el.appendChild(e)});
    
    return el;
}

let CreateText = (text, attr)=>{
    let el = document.createElement("text");
    
    Object.entries(attr).forEach(e => {el.setAttribute(e[0], e[1])});

    el.innerText = text
    
    return el;
}

let CreateHTML = (text, attr)=>{
    let el = document.createElement("text");
    
    Object.entries(attr).forEach(e => {el.setAttribute(e[0], e[1])});

    el.innerHTML = text
    
    return el;
}

let Container = document.getElementById("container");

let tab = "&nbsp&nbsp&nbsp&nbsp"
let ContainerElements = [
    CreateEl("div", {class: "large-div-left"}, [
        CreateEl("div", {class: "div-inside"}, [
                CreateText("Matthew_Chan.js  ", {class: "Header"}),
                CreateEl("a", {"onclick": "window.location.replace('./raw/Matthew Chan.js')", class: "button-link"}, [CreateText("Raw", {})]),
                CreateText("\n\n", {class: "Header"}),
                CreateEl("div", {class: "text-editor"}, [
                        CreateText("let ", {class: "purple"}),
                        CreateText("BirthStats ", {class: "blue"}),
                        CreateText("= {\n", {class: "black"}),
                        CreateHTML(`${tab}Birthplace: `, {class: "black"}),
                        CreateText("\"Ca, USA\"", {class: "red"}),
                        CreateText(",\n", {}),
                        CreateHTML(`${tab}Birthday: `, {class: "black"}),
                        CreateText("\"June 27\"", {class: "red"}),
                        CreateText(",\n", {}),
                        CreateHTML(`${tab}Age: `, {class: "black"}),
                        CreateText("\"12\"", {class: "red"}),
                        CreateText("\n};\n\n", {class: "black"}),
                        CreateText("/*\n* Programmer Hobbyist\n* Youtube Lover\n* And not really much of anything else\n*/\n\n", {}),
                        CreateText("let ", {class: "purple"}),
                        CreateText("DiscordId ", {class: "blue"}),
                        CreateText("= ", {class: "black"}),
                        CreateText("\"Mr;5320\"", {class: "red"}),
                        CreateText(";\n", {class: "black"}),
                        CreateText("let ", {class: "purple"}),
                        CreateText("GithubUsername ", {class: "blue"}),
                        CreateText("= ", {class: "black"}),
                        CreateText("\"MatthewTheChan\"", {class: "red"}),
                        CreateText(";\n", {class: "black"}),
                        CreateText("let ", {class: "purple"}),
                        CreateText("ReplitUsername ", {class: "blue"}),
                        CreateText("= ", {class: "black"}),
                        CreateText("\"MatthewProSkils\"", {class: "red"}),
                        CreateText(";\n\n", {class: "black"}),
                    ]
                )
            ]
        )
    ]),
    
    CreateEl("div", {class: "large-div-right"}, [
        CreateEl("div", {class: "div-inside"}, [
            CreateText("File Directory", {class: "Header"})
            ]
        )
    ])
];

ContainerElements.forEach(el => {Container.appendChild(el);})
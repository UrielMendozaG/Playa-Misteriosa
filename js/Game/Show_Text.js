
var hobboShow = new Event("hobboShow")
var popText = new Event("popText")
var showGithub = new Event("showGithub")

export default function Text(){

    let text = document.getElementById("misterious-text")
    let txtIndex = 0;

    let messages = [
        "¿Qué fue eso?",
        "¿Quién está haciendo ese ruido?",
        "Basta ya, intento dormir la siesta... ",
        //"Es temprano / Vuelve pronto"
    ]

    let finalMessages = [
        "Oh, eres tu",
        "Ten, toma esto",
        "Mi creador me dijo que algun dia llegara alguien que le de continuidad a esta historia.",
        "Espero que no se haya equivocado...",
    ]


    const setTime = () => {
        let date = new Date()
        let hours = date.getHours();
        let isTime = true;

        if(hours >= 20 && hours <= 23)
            isTime = false;
        else if(hours >= 0 && hours <= 7)
            isTime = false

        if(isTime)
            messages.push("Es temprano")
        else 
            messages.push("Vuelve mañana")
        
        return isTime;
    }

    let isTime = setTime();

    const showText = () => {
        
        let node = createNodeText(txtIndex)

        text.appendChild(node);

        text.style.display = "inline";

        if(txtIndex != 0)
            removeTextNode(txtIndex)

        txtIndex += 1;   

        if(isTime && txtIndex == 4){
            window.dispatchEvent(hobboShow)
            window.addEventListener("hobboClicked", showFinalText)
            window.removeEventListener("coconutScoreClicked20Times", showText)
        }


        window.dispatchEvent(popText)
    }

    
    messages = messages.concat(finalMessages)

    const showFinalText = () =>{

        let node = createNodeText(txtIndex)

        text.appendChild(node);

        text.style.display = "inline";

        if(txtIndex != 0)
            removeTextNode(txtIndex)
        
        if(txtIndex == 5)
            window.dispatchEvent(showGithub);

        if(txtIndex == 7)
            window.removeEventListener("hobboClicked", showFinalText)

        txtIndex += 1;
        
    }

    const createNodeText = (index) => {

        let p = document.createElement("p")
        let txt = messages[index];
        let id = "misterious-text-p-"+index;

        let mensaje = document.createTextNode(txt)

        p.setAttribute("class","misterious-text-p")
        p.setAttribute("id", `${id}`)
        p.appendChild(mensaje);

        return p;
    }

    const removeTextNode = (index) =>{
        let id = "misterious-text-p-"+(index-1);
        let node = document.getElementById(id)
        node.style.display = "none"
    }

    window.addEventListener("coconutScoreClicked20Times", showText)
}
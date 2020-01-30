var hobboClicked = new Event("hobboClicked");

export default function Hobbo() {
  let hobbo = document.getElementById("hobbo");

  const hobboShow = () => {
    hobboBehaviour();
    hobbo.style.visibility = "visible";
  };

  const hobboBehaviour = () => {
    
    hobbo.onmouseover = () => (hobbo.style.cursor = "pointer");

    hobbo.onclick = () => window.dispatchEvent(hobboClicked);
  };

  
  window.addEventListener("hobboShow", hobboShow);
}

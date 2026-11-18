import "./style.css";

async  function TraerInfo(){
    try{
    const respuesta = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")

    if (!respuesta.ok) {
        throw new Error("Error en la respuesta");
    }
    else{
    const data = await respuesta.json();
    
  console.log(data);

   cargarPlatos(data);
       }
    }
    catch (error) {

        console.error("Se produjo un error", error)
    }
}

function cargarPlatos(data){
   
    const contenedor = document.getElementById("galeria");
    contenedor.innerHTML = "";

    for (let i = 0; i < data.meals.length; i++) {
      const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        tarjeta.innerHTML = `
        <img src="${data.meals[i].strMealThumb}" alt="Foto de ${data.meals[i].strMeal}"></img>
          <div class="tarjeta-info">
            <h3>${data.meals[i].strMeal}</h3>
            <p>Pais: <strong>${data.meals[i].strCountry}</strong></p>
            <p>Id: ${data.meals[i].idMeal}</p>
            </div>
        `
        contenedor.appendChild(tarjeta);
      }

}

var event = document.getElementById("boton");
event.addEventListener("click", TraerInfo)


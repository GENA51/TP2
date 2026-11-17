import "./style.css";

let platos = [];

async  function TraerInfo(){
    try{
    const respuesta = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")

    if (!respuesta.ok) {
        throw new Error("Error en la respuesta");
    }
    else{
    const data = await respuesta.json();

    for (let i = 0; i < data.meals.length; i++) {
        console.log(data.meals[i].strCountry);
        
    }
    //console.log(data.meals[1].strCountry);

    //const platos = data.results;
    
    //data = JSON.parse(data);
    //data.forEach(plato => {
    //    const titulo = `<li>${plato.strMeal}</li>`
    //    document.getElementById(".galeria").appendChild(titulo)
    //})

   //cargarPlatos(platos);
    }
    }
    catch (error) {

        console.error("Se produjo un error", error)
    }
}

function cargarPlatos(platos){

  const contenedor = document.getElementById("galeria");
  contenedor.innerHTML = "";

       platos = JSON.parse(platos);
       platos.forEach(plato => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        tarjeta.innerHTML = `
        <img src="${plato.strMealThumb}" alt="${plato.strMeal}"></img>
          <div class="tarjeta-info">
            <h3>${plato.strMeal}</h3>
            <p>Pais: <strong>${plato.strCountry}</strong></p>
            <p>Id: ${plato.idMeal}</p>
            </div>
        `
        contenedor.appendChild(tarjeta)
        });
};


TraerInfo();

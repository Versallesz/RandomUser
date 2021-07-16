var contenido = document.querySelector('#contenido');

function traer(){
    fetch('https://randomuser.me/api/')
    .then(res => res.json()) //los datos se traeran en JSON
    .then(data => {
        
        contenido.innerHTML = `
        <img src="${data.results[0].picture.large}" class="img-fluid rounded-circle" width="100px">
        <hr/>
        <div class="text-start">
            <p class="mt-4"><b>Nombre:</b> ${data.results[0].name.first}` + ` ` + `${data.results['0'].name.last}</p>
            <p> <b>Email:</b> ${data.results[0].email}</p>
            <p> <b>Ubicación:</b> ${data.results[0].location.city}` + `, ` + ` ${data.results['0'].location.country}  </p>
        </div>
        ` 
        
    })
}
traer()

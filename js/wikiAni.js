const URL='https://api.TheDogAPI.com/v1'
const fetchPerros = async()=>{
const response= await fetch(URL+'/breeds');
const razaPerros= await response.json();
seleccionPerros(razaPerros);
}

const seleccionPerros=(razas)=>{
    const select = document.querySelector("#razasP");
    const opcionesRaza=razas.map(raza=>{
        const option=document.createElement('option');
        option.text=raza.name;
        option.value=raza.id;
        return option;
    })
    opcionesRaza.forEach(opcionesRazas=>{
        select.appendChild(opcionesRazas);
    })
}
const imagenPerro= (imageUrl)=>{
    document.querySelector('#perroImagen').setAttribute('src',imageUrl);
}
const getPerro = async(breedId)=>{
    const [data]=await fetch(URL +'/images/search?include_breed=1&breed_id='+breedId).then((data)=>data.json())
    const {url:imageUrl,razas}=data;
    imagenPerro(imageUrl); 
    descripcion(razas[0]);
}
const cambiarPerro =()=>{
    console.log(event.target.value);
    getPerro(event.target.value);
}
fetchPerros();
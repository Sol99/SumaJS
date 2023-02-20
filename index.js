const numero1= document.getElementById ("n1") 
const numero2= document.getElementById ("n2") 
const respuesta= document.getElementById ("resp") 
const calculo= document.getElementById ("calcular") 
calculo.addEventListener ('click', calcular)

function calcular() {
    const op1= parseFloat(numero1.value)
    const op2= parseFloat(numero2.value)
    let resp = op1+op2
    respuesta.innerText=resp
    respuesta.style="color:red"
}
// document.getElementById 
//Es un método que permite seleccionar un elemento del documento por medio del valor del atributo id que se le haya asignado.


//value 
//captura todo lo que tenga en el txt

//La propiedad innerText 
//se puede utilizar para escribir el texto dinámico en el documento html. 
//Aquí, el texto no se interpretará como texto html sino como texto normal.
// su sintaxis es nodo.textointerno;
//Para configurar/actualizar el texto de un elemento HTML:
//El nodo se refiere al elemento HTML y todos sus descendientes.
//El texto representa el nuevo texto que se actualizaría o establecería en lugar del texto existente.

//El método addEventlistener
//es un escuchador que indica al navegador que este atento a la interacción del usuario.
//Su sintaxis es muy sencilla:
//target.addEventListener('tipo de evento',función_a_lanzar,booleano);

//http://www.mywonderland.es/curso_js/addevent/index.html#:~:text=El%20m%C3%A9todo%20addEventlistener%2C%20es%20un,necesidad%20de%20tocar%20el%20HTML.
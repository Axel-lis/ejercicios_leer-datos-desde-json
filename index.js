$(document).ready(()=>{
    $('#personas').hide();
    $('#importarJson').click(function(){
           $.ajax({
               type: "GET",   //metodo GET porque OBTIENE la info desde
               url: "personas.json", //url de donde va a buscar la info
               dataType: "json" //tipo de retorno
           }).done((data) => {
                   $.each(data, function(indice, persona){
                       let fila=  $('<tr>');
                       fila.append($(`<td>${persona.id}</td>`));
                       fila.append($(`<td>${persona.nombre}</td>`));
                       fila.append($(`<td>${persona.apellido}</td>`));
                       fila.append($(`<td>${persona.edad}</td>`));
                     $('#personas tbody').append(fila);
                   });
                   $('#personas').show();
               });
           });
    }); 

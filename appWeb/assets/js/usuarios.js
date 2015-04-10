$(document).ready(function(){

	$('#tablaUsuarios').DataTable();

});

$.buscarUsuarios= function(textoBusqueda){
		  
		        $("<option value='0'>Seleccione una ciudad...</option>").appendTo("#txtCiudad");                    
		                                                                                      
				 $.ajax({
		                    url:  "webservices/webservice.asmx/consultaUsuarios",
		                    type: "get",
		                    dataType: "xml",
		                    success: function(xml) {
		                          $(xml).find('Ciudad').each(function(){
		                          		var idCiudad = $(this).find('CiuId').text();
								        var nombreCiudad = $(this).find('CiuNombre').text();
								        $("<option value='"+idCiudad+"'>"+nombreCiudad+"</option>").appendTo("#txtCiudad");
		                          });    
		                    }
		           });
      
	
	};
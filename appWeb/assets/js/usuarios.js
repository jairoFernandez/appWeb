$(document).ready(function(){

	$('#tablaUsuarios').DataTable();
	$.buscarUsuarios();
});

$.buscarUsuarios= function(){
		  
		                                                                                     
				 $.ajax({
		                    url:  "webservices/webservice.asmx/consultaUsuarios",
		                    type: "get",
		                    dataType: "xml",
		                    success: function(xml) {
		                          $(xml).find('Usuario').each(function(){
		                          		var UsuId = $(this).find('UsuId').text();
		                          		var UsuTipoPersona = $(this).find('UsuTipoPersona').text();
		                          		var UsuTipoIdentificacion = $(this).find('UsuTipoIdentificacion').text();
		                          		var UsuIdentificacion = $(this).find('UsuIdentificacion').text();
		                          		var UsuNombreCompleto = $(this).find('UsuNombreCompleto').text();
		                          		var UsuActivo = $(this).find('UsuActivo').text();
		                          		var UsuCiudad = $(this).find('UsuCiudad').text();
		                          		var UsuTelefono = $(this).find('UsuTelefono').text();
		                          		var UsuIngresos = $(this).find('UsuIngresos').text();
		                          		var UsuEgresos = $(this).find('UsuEgresos').text();
		                          		var UsuEgresos = $(this).find('UsuEgresos').text();
		                          		var UsuBalance = $(this).find('UsuBalance').text();
		                          		var UsuCiudadNombre = $(this).find('UsuNombreCiudad').text();
								       $("<tr><td>"+UsuTipoPersona+"</td><td>"+UsuTipoIdentificacion+"</td><td>"+UsuNombreCompleto+"</td><td>"+UsuActivo+"</td><td>"+UsuCiudadNombre+"</td><td>"+UsuTelefono+"</td><td>" +UsuIngresos+"</td><td>" +UsuEgresos+"</td><td>" +UsuBalance+"</td></tr>").appendTo("#resultados");
								        
								        
								       
		                          });    
		                    }
		           });
      
	
	};
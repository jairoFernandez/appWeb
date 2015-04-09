$(document).ready(function(){
	
		<!--campos con numeros-->
		$("#txtIdentificacion").numeric();
		$("#txtEgresos").numeric();
		$("#txtIngresos").numeric();
	
	$('#agregarUsuario').click(function(){
		$.insertarUsuario();
	});
	
		$.buscarCiudades("%");
		
		$('#tipoPersona').change(function(){
		        console.log("ajaj "+ $('#tipoPersona').val($(this).val()));
				if($('#tipoPersona').val()=="N"){
							$('#tipoDoc option[value!="0"]').remove();
							 <!--cargamos las opciones cuando es Persona Natural-->
							  $("<option value=''>Seleccione</option>").appendTo("#tipoDoc");
							  $("<option value='CC'>Cédula de ciudadanía</option>").appendTo("#tipoDoc");
							  $("<option value='CE'>Cédula de extranjería</option>").appendTo("#tipoDoc");
							  $("<option value='TI'>Tarjeta de Identidad</option>").appendTo("#tipoDoc");
							 <!--Habilitamos los campos-->
							 $("#tipoDoc").prop('disabled', false);
							 $("#bloqueNombresApellidos").show('slide');
							 $("#bloqueNombreCompleto").hide('slide');
				}else if($('#tipoPersona').val()=="J"){
				
				 			 $('#tipoDoc option[value!="0"]').remove();
							 <!--cargamos las opciones cuando es Persona Natural-->
				 		     $("<option value='NIT'>NIT</option>").appendTo("#tipoDoc");
							 <!--Habilitamos el campo-->
							 $("#tipoDoc").prop('disabled', false);
							 $("#bloqueNombresApellidos").hide('slide');
							 $("#bloqueNombreCompleto").show('slide');
							 
				 		     
				}
		});
		
		$('#buscarCiudad').keyup(function(){
			if($('#buscarCiudad').val()==""){
			   
			}else{
				$.ubicarCiudad($('#buscarCiudad').val());
			}
		});
		
		
	});
	
	$.buscarCiudades= function(textoBusqueda){
		  
				$('#tipoDoc option[value!="0"]').remove();
		                            
		                                                                                      
				 $.ajax({
		                    url:  "webservices/webservice.asmx/consultaCiudades",
		                    type: "get",
		                    data: 'CiuNombre='+ textoBusqueda + '',
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
	
	
	
	$.ubicarCiudad= function(textoBusqueda){                            
		                                                                                      
				 $.ajax({
		                    url:  "/webservices/webservice.asmx/consultaCiudades",
		                    type: "get",
		                    data: 'CiuNombre='+ textoBusqueda + '',
		                    dataType: "xml",
		                    success: function(xml) {
		                          $(xml).find('Ciudad').each(function(){
		                          		var idCiudad = $(this).find('CiuId').text();
								        var nombreCiudad = $(this).find('CiuNombre').text();
								        $("#txtCiudad").val(idCiudad);
					                   
		                          });    
		                    }
		           });
      
	
	};
	
	$.validarNumeroDocumento = function(){
		var longitud = $('#txtIdentificacion').length();
		if(longitud > 15){
			alert("el campo debe tener máximo 15 caracteres");
		}
	}
	
	
	$.insertarUsuario= function(){
		      	 
		      	 var tipoPersona = $('#tipoPersona').val();
		      	 var tipoIdentificacion = $('#tipoDoc').val();
		      	 var txtIdentificacion = $('#txtIdentificacion').val();
		      	 var txtprimerNombre = $('#txtprimerNombre').val();
		         var txtsegundoNombre = $('#txtsegundoNombre').val();                                                                             
		         var txtprimerApellido = $('#txtprimerApellido').val();
		         var txtsegundoApellido = $('#txtsegundoApellido').val(); 
		         
		       if($('#tipoPersona').val()=="N")
		       {                                                                                                                                                     
		         var txtNombreCompleto = $('#txtprimerNombre').val()+" "+$('#txtsegundoNombre').val()+" "+$('#txtprimerApellido').val()+" "+$('#txtsegundoApellido').val();
		       }else{
		         var txtNombreCompleto = $('#txtNombreCompleto').val();
		       }  
		         var txtCiudad = $('#txtCiudad').val();
		         var txtDireccion = $('#txtDireccion').val();
		         var txtTelefono = $('#txtTelefono').val();
		         var txtIngresos = $('#txtIngresos').val();
		         var txtEgresos = $('#txtEgresos').val();

				 if($('#activo').val()=="on"){
				 		 var txtActivo = 1;
				 }else{
		         	         var txtActivo = $('#activo').val();
				 }	
		         
				 $.ajax({
		                    url:  "/webservices/webservice.asmx/btnInsertarUsuario_Click",
		                    type: "get",
		                    data: 'UsuTipoPersona='+tipoPersona+'&UsuTipoIdentificacion='+tipoIdentificacion+'&UsuIdentificacion='+txtIdentificacion+'&UsuNombreCompleto='+txtNombreCompleto+'&UsuPrimerNombre='+txtprimerNombre+'&UsuSegundoNombre='+txtsegundoNombre+'&UsuPrimerApellido='+txtprimerApellido+'&UsuSegundoApellido='+txtsegundoApellido+'&UsuActivo='+txtActivo+'&UsuCiudad='+txtCiudad+'&UsuDireccion='+txtDireccion+'&UsuTelefono='+txtTelefono+'&UsuIngresos='+txtIngresos+'&UsuEgresos='+txtEgresos+'',
		                    
		                    success: function(xml) {
		                         
		                    }
		           });
      
	
	};
	
	

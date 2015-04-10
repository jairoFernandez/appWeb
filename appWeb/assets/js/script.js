$(document).ready(function(){
		
		
		<!-- tratamos el caso de enter -->
		$("input").keypress(function(e) {
			   if(e.which == 13) {
			     $.accionEnviar();
			   }
			});
		
		
		 var errores = 0;
	
		<!--campos con numeros-->
		$("#txtIdentificacion").numeric();
		$("#txtEgresos").numeric();
		$("#txtIngresos").numeric();
	
	$('#agregarUsuario').click(function(){
		$.accionEnviar();
	});
	
	$.accionEnviar = function(){
	
	  if($.validador() == 0){
		      if(confirm('¿Estas Seguro de insertar el registro?'))
						{
							$.insertarUsuario();
						}
						else
						{
							return false;
						}	
		      }else{	
		         console.log("el validador ha encontrado algunos errores");
		      }		
	}
	
	
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
		  
		        $("<option value='0'>Seleccione una ciudad...</option>").appendTo("#txtCiudad");                    
		                                                                                      
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
                 var txtActivo = 1;
				 
		         
				 $.ajax({
		                    url:  "/webservices/webservice.asmx/btnInsertarUsuario_Click",
		                    type: "get",
		                    data: 'UsuTipoPersona='+tipoPersona+'&UsuTipoIdentificacion='+tipoIdentificacion+'&UsuIdentificacion='+txtIdentificacion+'&UsuNombreCompleto='+txtNombreCompleto+'&UsuPrimerNombre='+txtprimerNombre+'&UsuSegundoNombre='+txtsegundoNombre+'&UsuPrimerApellido='+txtprimerApellido+'&UsuSegundoApellido='+txtsegundoApellido+'&UsuActivo='+txtActivo+'&UsuCiudad='+txtCiudad+'&UsuDireccion='+txtDireccion+'&UsuTelefono='+txtTelefono+'&UsuIngresos='+txtIngresos+'&UsuEgresos='+txtEgresos+'',
		                    
		                    success: function(xml) {
		                         window.location.href = "Usuarios.html";
		                    }
		           });
      
	
	};
	
	
	<!--- validadores -->
	
	$.validador = function(){
		var errores = 0;
		errores = parseInt($.validarTipoPersona()) + parseInt($.validarTipoDocumento()) + parseInt($.validarNumeroDocumento()) + parseInt($.validarPrimerNombre()) + parseInt($.validarSegundoNombre()) + parseInt($.validarPrimerApellido()) + parseInt($.validarSegundoApellido()) + parseInt($.validarNombreCompleto()) + parseInt($.validarCiudad() + parseInt($.validarDireccion()) + parseInt($.validarIngresos()) + parseInt($.validarEgresos()));
		console.log("total de errores "+errores);
		console.log("errores tipo persona: "+$.validarPrimerNombre());
		console.log("errores tipo doc: "+$.validarTipoDocumento());
		console.log("errores primer nombre: "+$.validarPrimerNombre());
		console.log("errores segundo nombre: "+$.validarSegundoNombre());
		console.log("errores primer apellido: "+$.validarPrimerApellido());
		console.log("errores segundo apellido: "+$.validarSegundoApellido());
		console.log("errores nombre completo: "+$.validarNombreCompleto());
		console.log("errores ciudad: "+$.validarCiudad());
		console.log("errores direccion: "+$.validarDireccion());
		console.log("errores Telefonno: "+$.validarTelefono());
		console.log("errores Ingresos: "+$.validarIngresos());
		console.log("errores Egresos: "+$.validarEgresos());
		return errores;
	}
	
	$.validarTipoPersona = function(){
		var longitud = $('#tipoPersona').val();
		errores = 0
		
		if(longitud == 0){
		      errores = 1;
			 $('#tipoPersona').parent().addClass("has-error")
			 $("#tipoPersona").notify("Debes escoger un tipo de persona","error");
		}else{
			 $('#tipoPersona').parent().removeClass("has-error");
			 errores = 0; 
	    }
		
		return errores;
	}
	
	$.validarTipoDocumento = function(){
		var longitud = $('#tipoDoc').val();
		errores = 0
		
		if(longitud == 0){
		      errores = 1;
			 $('#tipoDoc').parent().addClass("has-error")
			 $("#tipoDoc").notify("Debes escoger un tipo de documento","error");
		}else{
			 $('#tipoDoc').parent().removeClass("has-error");
			 errores = 0; 
	    }
		
		return errores;
	}
	
	$.validarNumeroDocumento = function(){
		var longitud = $('#txtIdentificacion').val().length;
		errores = 0
		
		if(longitud == 0){
		      errores = 1;
			 $('#txtIdentificacion').parent().addClass("has-error")
			 $("#txtIdentificacion").notify("No puede estar vacio","error");
		}else if (longitud > 15){
			errores = 1;
			 $('#txtIdentificacion').parent().addClass("has-error");
			 $("#txtIdentificacion").notify("Máximo 15 caracteres","error");
		}else{ $('#txtIdentificacion').parent().removeClass("has-error");
			 errores = 0; }
		
		return errores;
	}
	
	$.validarPrimerNombre = function(){
		var longitud = $('#txtprimerNombre').val().length;
		errores = 0
		
		if(longitud == 0){
		      errores = 1;
			 $('#txtprimerNombre').parent().addClass("has-error")
			 $("#txtprimerNombre").notify("No puede estar vacio","error");
		}else if (longitud > 50){
			errores = 1;
			 $('#txtprimerNombre').parent().addClass("has-error");
			 $("#txtprimerNombre").notify("Máximo 50 caracteres","error");
		}else{
			 $('#txtprimerNombre').parent().removeClass("has-error");
			 errores = 0; }

		
		return errores;
	}
	
	$.validarSegundoNombre = function(){
		
		var longitud = $('#txtsegundoNombre').val().length;
		errores = 0
		
		if(longitud == 0){
		     errores = 0;
			 $('#txtsegundoNombre').val("");
			 $('#txtsegundoNombre').parent().removeClass("has-error");
		}else if (longitud > 50){
			errores = 1;
			 $('#txtsegundoNombre').parent().addClass("has-error");
			 $("#txtsegundoNombre").notify("Máximo 50 caracteres","error");
		}else{ $('#txtsegundorNombre').parent().removeClass("has-error");
			 errores = 0; }

		return errores;
	}
	
	$.validarPrimerApellido = function(){
		var longitud = $('#txtprimerApellido').val().length;
		errores = 0
		
		if(longitud == 0){
		      errores = 1;
			 $('#txtprimerApellido').parent().addClass("has-error")
			 $("#txtprimerApellido").notify("No puede estar vacio","error");
		}else if (longitud > 50){
			errores = 1;
			 $('#txtprimerApellido').parent().addClass("has-error");
			 $("#txtprimerApellido").notify("Máximo 50 caracteres","error");
		}else{ $('#txtprimerApellido').parent().removeClass("has-error");
			 errores = 0; }

		
		return errores;
	}
	
	$.validarSegundoApellido = function(){
		var longitud = $('#txtsegundoApellido').val().length;
	    errores = 0
		
		if(longitud == 0){
		     errores = 0;
			 $('#txtsegundoApellido').val("");
			 $('#txtsegundoApellido').parent().removeClass("has-error");
		}else if (longitud > 50){
			errores = 1;
			 $('#txtsegundoApellido').parent().addClass("has-error");
			 $("#txtsegundoApellido").notify("Máximo 50 caracteres","error");
		}else{ $('#txtsegundoApellido').parent().removeClass("has-error");
			 errores = 0; }
		
		return errores;
	}
	
	$.validarNombreCompleto = function(){
		var longitud = $('#txtNombreCompleto').val().length;
	    errores = 0
		
		if(longitud == 0){
		      errores = 1;
			 $('#txtNombreCompleto').parent().addClass("has-error")
			 $("#txtNombreCompleto").notify("No puede estar vacio","error");
		}else if (longitud > 200){
			errores = 1;
			 $('#txtNombreCompleto').parent().addClass("has-error");
			 $("#txtNombreCompleto").notify("Máximo 200 caracteres","error");
		}else{ $('#txtNombreCompleto').parent().removeClass("has-error");
			 errores = 0; }
		
		return errores;
	}

   $.validarCiudad = function(){
		var longitud = $('#txtCiudad').val();
		errores = 0
		
		if(longitud == 0){
		      errores = 1;
			 $('#txtCiudad').parent().addClass("has-error")
			 $("#txtCiudad").notify("Debes escoger una ciudad","error");
		}else{
			 $('#txtCiudad').parent().removeClass("has-error");
			 errores = 0; 
	    }
		
		return errores;
	}

   $.validarDireccion = function(){
		var longitud = $('#txtDireccion').val().length;
	    errores = 0
		
		if(longitud == 0){
		     errores = 0;
			 $('#txtDireccion').val("");
			 $('#txtDireccion').parent().removeClass("has-error");
		}else if (longitud > 20){
			errores = 1;
			 $('#txtDireccion').parent().addClass("has-error");
			 $("#txtDireccion").notify("Máximo 20 caracteres","error");
		}else{ $('#txtDireccion').parent().removeClass("has-error");
			 errores = 0; }
		
		return errores;
	}
	
	$.validarTelefono = function(){
		var longitud = $('#txtTelefono').val().length;
	    errores = 0
		
		if(longitud == 0){
		     errores = 0;
			 $('#txtTelefono').val("");
			 $('#txtTelefono').parent().removeClass("has-error");
		}else if (longitud > 10){
			errores = 1;
			 $('#txtTelefono').parent().addClass("has-error");
			 $("#txtTelefono").notify("Máximo 10 caracteres","error");
		}else{ $('#txtTelefono').parent().removeClass("has-error");
			 errores = 0; }
		
		return errores;
	}
	
	$.validarIngresos = function(){
		var longitud = $('#txtIngresos').val();
		errores = 0
		
		if(longitud == 0){
		      errores = 1;
			 $('#txtIngresos').parent().addClass("has-error")
			 $("#txtIngresos").notify("Debes escribir un Ingreso","error");
		}else{
			 $('#txtIngresos').parent().removeClass("has-error");
			 errores = 0; 
	    }
		
		return errores;
	}
	
    $.validarEgresos = function(){
		var longitud = $('#txtEgresos').val();
		errores = 0
		
		if(longitud == 0){
		      errores = 1;
			 $('#txtEgresos').parent().addClass("has-error")
			 $("#txtEgresos").notify("Debes escribir un Egreso","error");
		}else{
			 $('#txtEgresos').parent().removeClass("has-error");
			 errores = 0; 
	    }
		
		return errores;
	}
	
<%@ Page Language="C#" Inherits="appWeb.Default" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head runat="server">
      <title>Cinco Soft</title>
	  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    
 <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css" />
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />

 <link href="http://getbootstrap.com/examples/starter-template/starter-template.css" rel="stylesheet" />
<script src="http://getbootstrap.com/assets/js/ie-emulation-modes-warning.js"></script>
</head>
<body>

	
	  <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Prueba para SincoSoft</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="Default.aspx">Registro</a></li>
            <li><a href="#about">Usuario</a></li>
            <li><a href="#contact">Ciudad</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

    <div class="container">

      <div class="starter-template">
    
  
    	<a href="/webservices/webservice.asmx" class="btn btn-success" target="_blank">Ver Web service</a>
 
 <hr/>
 		<div class="row">
						<div class="col-lg-8">
		                        <div class="panel panel-default">
		                            <div class="panel-heading">
		                                <h3 class="panel-title"><i class="fa fa-users"></i> Registro de nuevos usuarios </h3>
		                            </div>
		                            <div class="panel-bodys">
		                            <div class="">
		                            
		                            	        <div class="form-group">	  
													<div class="col-lg-12">											
													    <label for="tipoPersona">Tipo persona</label>
													    <select id="tipoPersona" class="form-control">
											                <option  value="0">Seleccione</option>
											                <option value="N">Persona Natural</option>
											                <option value="J">Persona Jurídica</option>
											            </select>
													  </div>  
												</div> 
		                            			<div class="form-group">						                            		
													   <div class="col-lg-4">
													    <label for="tipoDoc">Tipo Documento</label>
													    <select id="tipoDoc" class="form-control" disabled>
											              
											            </select>
													   
													</div>
													<div class="col-lg-8">
													    <label for="txtIdentificacion">Número de Identificación</label>
													    <input type="text" class="form-control" id="txtIdentificacion" placeholder="número de documento" />
													  </div>
												</div>
												<div id="bloqueNombresApellidos"  style="display:none">
												
												<div class="form-group">
																	                            		
													   <div class="col-lg-6"> <label for="txtprimerNombre">Primer Nombre</label>
													    <input type="text" class="form-control" id="txtprimerNombre" placeholder="Primer nombre" />
													</div>
													<div class="col-lg-6">
													    <label for="txtsegundoNombre">Segundo Nombre</label>
													    <input type="text" class="form-control" id="txtsegundoNombre" placeholder="Segundo nombre" runat="server" />
													  </div>
												</div>
												 <hr/>
												<div class="form-group">
													   <div class="col-lg-6">	  
															    <label for="txtprimerApellido">Primer Apellido</label>
															    <input type="text" class="form-control" id="txtprimerApellido" placeholder="Primer Apellido" runat="server" />
													   </div>
													   <div class="col-lg-6">	  
													    		<label for="txtsegundoApellido">Segundo Apellido</label>
													    		<input type="text" class="form-control" id="txtsegundoApellido" placeholder="Segundo Apellido" />
													   </div>
													   <p></p><p></p>
											    </div>
											    <hr/>
											    </div>
											    <div id="bloqueNombreCompleto" style="display:none">
												<div class="form-group">
												
													    <div class="col-lg-12">
													    <hr/>
															    <label for="txtNombreCompleto">Nombre Completo</label>
															    <input type="text" class="form-control" id="txtNombreCompleto" placeholder="Nombre completo" />
														<hr/>
														</div>
														
												</div>
												
												</div>	 
												<div class="form-group">
												       <div class="col-lg-6">
														   	    <label for="txtCiudad">Buscar</label>
															    <input type="text" class="form-control" id="buscarCiudad" placeholder="Digita aqui tu ciudad para buscar..." />
													  </div>
													   <div class="col-lg-6">
														   	    <label for="txtCiudad">Ciudad</label>
															    <select class="form-control" id="txtCiudad" placeholder="Ciudad" />
													  </div>
													    <div class="col-lg-12" style="display:none">
															    <label for="txtDireccion">Dirección</label>
															    <input type="text" class="form-control" id="txtDireccion" placeholder="dirección"/>
													  </div>
												</div>
												
													
												<div class="form-group">
													  
													   <div class="col-lg-12">
															    <label for="txtTelefono">Teléfono</label>
															    <input type="text" class="form-control" id="txtTelefono" placeholder="telefono" />
														  
													  </div>
												</div>
												  <div class="form-group">
												    <div class="col-lg-6">
															    <label for="txtIngresos">Ingresos</label>
															    <input type="text" class="form-control" id="txtIngresos" placeholder="ingresos" />
														  
													  </div>
													    <div class="col-lg-6">
															    <label for="txtEgresos">Egresos</label>
															    <input type="text" class="form-control" id="txtEgresos" placeholder="Egresos" />
														  
													  </div>
													 
												</div>
												<div class="form-group">
														<div class="col-lg-12">
															    <label for="activo">Estado</label>
															    <input type="checkbox" class="form-control" id="activo" placeholder="estado" />
													   		    <p></p>  
															    <p></p>
													   </div>
													   	
												</div>
													   
													
		                            	
		                            	
		                           				<button type="button" class="btn btn-primary btn-lg btn-block" id="agregarUsuario">Agregar</button>
		                           		
		                            </div>
		                            </div>
		                            
		                        </div>
		                        
		  </div>
           

		<div class="col-lg-4">
		                        <div class="panel panel-default">
		                            <div class="panel-heading">
		                                <h3 class="panel-title"><i class="fa fa-bar-chart"></i> Consolidado usuarios </h3>
		                            </div>
								    <div class="panel-body">
		                            
		                            
		                            </div>
		                            
		                        </div>
			</div>
                                
</div> 
</div>
</div>
	
 <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
  <!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
<script src="http://getbootstrap.com/assets/js/ie10-viewport-bug-workaround.js"></script>
<script src="http://tucolegioaldia.esy.es/jquery.numeric.min.js"></script>
<script src="/assets/js/script.js"></script>


</body>

</html>

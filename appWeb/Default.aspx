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
    
  
    	<a href="webservice.asmx" class="btn btn-success">Ver Web service</a>
 
 <hr/>
 		<div class="row">
						<div class="col-lg-6">
						                        <div class="panel panel-default">
						                            <div class="panel-heading">
						                                <h3 class="panel-title"><i class="fa fa-users"></i> Registro de nuevos usuarios </h3>
						                            </div>
						                            <div class="panel-body">
						                            
						                            	<form id="formulario" runat="server">
						                            			 <div class="col-lg-12">
																	<div class="form-group">						                            		
																	    <label for="exampleInputEmail1">Primer Nombre</label>
																	    <asp:TextBox CssClass="form-control" id="txtprimerNombre" placeholder="Primer nombre" runat="server" ></asp:TextBox>
																	  </div>
																	  <div class="form-group">
																	    <label for="exampleInputPassword1">Segundo Nombre</label>
																	    <asp:TextBox CssClass="form-control" id="txtsegundoNombre" placeholder="Segundo nombre" runat="server" ></asp:TextBox>
																	  </div>
																</div>
																 <div class="col-lg-12">	  
																	   <div class="form-group">
																	    <label for="exampleInputPassword1">Primer Apellido</label>
																	    <asp:TextBox CssClass="form-control" id="txtprimerApellido" placeholder="Primer Apellido" runat="server" ></asp:TextBox>
																	  </div>
																	   <div class="form-group">
																	    <label for="exampleInputPassword1">Segundo Apellido</label>
																	    <asp:TextBox CssClass="form-control" id="txtsegundoApellido" placeholder="Segundo Apellido" runat="server" ></asp:TextBox>
																	  </div>
																</div>	  
																	   <div class="form-group">
																	    <label for="exampleInputPassword1">Nombre Completo</label>
																	    <asp:TextBox CssClass="form-control" id="txtNombreCompleto" placeholder="Nombre completo" runat="server" ></asp:TextBox>
																	  </div>
																	   <div class="form-group">
																	    <label for="exampleInputPassword1">Estado</label>
																	    <asp:CheckBox CssClass="form-control" id="activo" placeholder="estado" runat="server"></asp:CheckBox>
																	  </div>
																	   <div class="form-group">
																	    <label for="exampleInputPassword1">Ciudad</label>
																	    <asp:TextBox CssClass="form-control" id="txtCiudad" placeholder="Ciudad" runat="server" ></asp:TextBox>
																	  </div>
																	   <div class="form-group">
																	    <label for="exampleInputPassword1">Dirección</label>
																	    <asp:TextBox CssClass="form-control" id="txtDireccion" placeholder="dirección" runat="server" ></asp:TextBox>
																	  </div>
																	   <div class="form-group">
																	    <label for="exampleInputPassword1">Teléfono</label>
																	    <asp:TextBox CssClass="form-control" id="txtTelefono" placeholder="telefono" runat="server" ></asp:TextBox>
																	  </div>
																	   <div class="form-group">
																	    <label for="exampleInputPassword1">Ingresos</label>
																	    <asp:TextBox CssClass="form-control" id="txtIngresos" placeholder="ingresos" runat="server" ></asp:TextBox>
																	  </div>
																	   
																	  
						                            	</form>
						                           				<button type="button" class="btn btn-primary btn-lg btn-block">Agregar</button>
						                            
						                            </div>
						                            
						                        </div>
						                        
						  </div>
                           

						<div class="col-lg-6">
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

<script>
	$(document).ready(function(){
		$('#button1').click(function(){
			$('#label2').text("Hola "+$('#text1').val());
			
		});
	});
</script>

</body>

</html>

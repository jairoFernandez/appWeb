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
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#about">Usuario</a></li>
            <li><a href="#contact">Ciudad</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

    <div class="container">

      <div class="starter-template">
      <hr/>
      <br/>
       <h1>Hola a todos</h1>
	<form id="form1" runat="server">
	    <asp:TextBox id="text1" runat="server" CssClass="form-control" />
		<asp:Button id="button1" runat="server" Text="Click me!" OnClick="button1Clicked" CssClass="btn btn-primary" />
	</form>
	
	
	
	<asp:Label id="label1" runat="server"></asp:Label>
	
	<hr/>
    
    <form id="miformulario" runat="server">
    	<a href="webservice.asmx" class="btn btn-success">Web service</a>
    </form>
    
    
        </div>

    </div><!-- /.container -->

	
	
	
 <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
  <!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

<script>
	$(document).ready(function(){
		$('#button1').click(function(){
			$('#label2').text("Hola "+$('#text1').val());
			
		});
	});
</script>

</body>

</html>

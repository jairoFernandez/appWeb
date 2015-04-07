
namespace appWeb
{
	using System;
	using System.Web;
	using System.Web.Services;

	public class webservice : System.Web.Services.WebService
	{
		public webservice()
		{}

		[WebMethod]
		public void btnInsertarUsuario_Click(String UsuTipoPersona,
		                                     String UsuTipoIdentificacion,
		                                     String UsuIdentificacion,
		                                     String UsuNombreCompleto,
		                                     String UsuPrimerNombre, 
		                                     String UsuSegundoNombre, 
		                                     String UsuPrimerApellido, 
		                                     String UsuSegundoApellido, 
		                                     int UsuActivo, 
		                                     int UsuCiudad,
		                                     String UsuDireccion, 
		                                     String UsuTelefono, 
		                                     double UsuIngresos
		                                     )
		{	
			Usuario usuario = new Usuario ();
			usuario.UsuTipoPersona = UsuTipoPersona;
			usuario.UsuTipoIdentificacion = UsuTipoIdentificacion;
			usuario.UsuIdentificacion = UsuIdentificacion;
			usuario.UsuNombreCompleto = UsuNombreCompleto;
			usuario.UsuPrimerNombre = UsuPrimerNombre;
			usuario.UsuSegundoNombre = UsuSegundoNombre;
			usuario.UsuPrimerApellido = UsuPrimerApellido;
			usuario.UsuSegundoApellido = UsuSegundoApellido;
			usuario.UsuActivo = UsuActivo;
			usuario.UsuCiudad = UsuCiudad;
			usuario.UsuDireccion = UsuDireccion;
			usuario.UsuTelefono = UsuTelefono;
			usuario.UsuIngresos = UsuIngresos;
			

			int resultado = UsuarioOperaciones.Agregar (usuario);
			if(resultado  > 0 )
			{
				//MessageBox.Show("Cliente Guardado Con Exito!!", "Guardado", MessageBoxButtons.OK, MessageBoxIcon.Information);
			}
			else
			{
				//MessageBox.Show("No se pudo guardar el cliente", "Fallo!!", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
			}
		}


		[WebMethod]
		public void btnInsertarCiudad_Click(String CiuNombre,int CiuActiva)
		{	
			Ciudad ciudad = new Ciudad();
			ciudad.CiuNombre= CiuNombre;
			ciudad.CiuActiva = CiuActiva;
		


			int resultado = CiudadOperaciones.Agregar (ciudad);
			if(resultado  > 0 )
			{
				//MessageBox.Show("Cliente Guardado Con Exito!!", "Guardado", MessageBoxButtons.OK, MessageBoxIcon.Information);
			}
			else
			{
				//MessageBox.Show("No se pudo guardar el cliente", "Fallo!!", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
			}
		}


	}
}


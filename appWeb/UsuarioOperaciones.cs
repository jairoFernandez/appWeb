using System;
using MySql.Data.MySqlClient;

namespace appWeb
{
	public class UsuarioOperaciones
	{
		public static int Agregar(Usuario pUsuario)
		{
			int retorno = 0;



			MySqlCommand comando = new MySqlCommand(string.Format("INSERT INTO Usuario " +
				"(UsuTipoPersona, UsuTipoIdentificacion, UsuIdentificacion," +
				" UsuNombreCompleto, UsuPrimerNombre, UsuSegundoNombre, " +
				" UsuPrimerApellido, UsuSegundoApellido, UsuActivo, " +
				" UsuCiudad, UsuDireccion, UsuTelefono, UsuIngresos, UsuEgresos) " +
			    " values ('{0}','{1}','{2}','{3}','{4}','{5}','{6}','{7}','{8}','{9}','{10}','{11}','{12}',{'13'})",
			pUsuario.UsuTipoPersona, pUsuario.UsuTipoIdentificacion,pUsuario.UsuIdentificacion,pUsuario.UsuNombreCompleto,
			pUsuario.UsuPrimerNombre,pUsuario.UsuSegundoNombre,pUsuario.UsuPrimerApellido,
			pUsuario.UsuSegundoApellido,pUsuario.UsuActivo,pUsuario.UsuCiudad,pUsuario.UsuDireccion,
			pUsuario.UsuTelefono,pUsuario.UsuIngresos,pUsuario.UsuEgresos), BDComun.ObtenerConexion());
			retorno = comando.ExecuteNonQuery();
			return  retorno;
		}


	}
}


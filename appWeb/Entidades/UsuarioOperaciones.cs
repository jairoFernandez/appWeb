using System;
using MySql.Data.MySqlClient;
using System.Collections.Generic;

namespace appWeb
{
	public class UsuarioOperaciones
	{
		public static int Agregar(Usuario pUsuario)
		{
			int retorno = 0;

			double balance = pUsuario.UsuIngresos - pUsuario.UsuEgresos; 

			MySqlCommand comando = new MySqlCommand(string.Format("INSERT INTO Usuario " +
				"(UsuTipoPersona, UsuTipoIdentificacion, UsuIdentificacion," +
				" UsuNombreCompleto, UsuPrimerNombre, UsuSegundoNombre, " +
				" UsuPrimerApellido, UsuSegundoApellido, UsuActivo, " +
				" UsuCiudad, UsuDireccion, UsuTelefono, UsuIngresos, UsuEgresos, UsuBalance) " +
			    " values ('{0}','{1}','{2}','{3}','{4}','{5}','{6}','{7}','{8}','{9}','{10}','{11}','{12}','{13}','{14}')",
			pUsuario.UsuTipoPersona, pUsuario.UsuTipoIdentificacion,pUsuario.UsuIdentificacion,pUsuario.UsuNombreCompleto,
			pUsuario.UsuPrimerNombre,pUsuario.UsuSegundoNombre,pUsuario.UsuPrimerApellido,
			pUsuario.UsuSegundoApellido,pUsuario.UsuActivo,pUsuario.UsuCiudad,pUsuario.UsuDireccion,
			pUsuario.UsuTelefono,pUsuario.UsuIngresos,pUsuario.UsuEgresos,balance), BDComun.ObtenerConexion());
			retorno = comando.ExecuteNonQuery();
			return  retorno;
		}

		public static List<Usuario> consultarUsuarios()
		{

			List<Usuario> usuarios = new List<Usuario>();
			MySqlCommand comando = new MySqlCommand(string.Format("SELECT\nUsuario.UsuId,\nUsuario.UsuTipoPersona,\nUsuario.UsuTipoIdentificacion,\nUsuario.UsuIdentificacion,\nUsuario.UsuNombreCompleto,\nUsuario.UsuPrimerNombre,\nUsuario.UsuSegundoNombre,\nUsuario.UsuPrimerApellido,\nUsuario.UsuSegundoApellido,\nUsuario.UsuActivo,\nUsuario.UsuCiudad,\nUsuario.UsuDireccion,\nUsuario.UsuTelefono,\nUsuario.UsuIngresos,\nUsuario.UsuEgresos,\nUsuario.UsuBalance,\nCiudad.CiuNombre as CiudadNombre \nFROM\nUsuario\nINNER JOIN Ciudad ON Usuario.UsuCiudad = Ciudad.CiuId"), BDComun.ObtenerConexion());
			MySqlDataReader resultado  = comando.ExecuteReader();

			while (resultado.Read()) 
			{
				Usuario pUsuario = new Usuario ();
				pUsuario.UsuId = resultado.GetInt32 (0);
				pUsuario.UsuTipoPersona = resultado.GetString (1);
				pUsuario.UsuTipoIdentificacion = resultado.GetString (2);
				pUsuario.UsuIdentificacion = resultado.GetString (3);
				pUsuario.UsuNombreCompleto = resultado.GetString (4);
				pUsuario.UsuActivo = resultado.GetInt32 (9);
				pUsuario.UsuCiudad = resultado.GetInt32 (10);
				pUsuario.UsuDireccion = resultado.GetString (11);
				pUsuario.UsuTelefono = resultado.GetString (12);
				pUsuario.UsuIngresos = resultado.GetDouble (13);
				pUsuario.UsuEgresos = resultado.GetDouble (14);
				pUsuario.UsuBalance = resultado.GetDouble (15);
				pUsuario.UsuNombreCiudad = resultado.GetString (16);
				usuarios.Add (pUsuario);
			}

			return usuarios;
		}


	}
}


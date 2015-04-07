using System;
using MySql.Data.MySqlClient;

namespace appWeb
{
	public class CiudadOperaciones
	{
		public static int Agregar(Ciudad pCiudad)
		{
			int retorno = 0;

			MySqlCommand comando = new MySqlCommand(string.Format("INSERT INTO Ciudad " +
			                                                      "(CiuNombre, CiuActiva) " +
			                                                      "values ('{0}','{1}')",
			                                                      pCiudad.CiuNombre, pCiudad.CiuActiva), BDComun.ObtenerConexion());
			retorno = comando.ExecuteNonQuery();
			return  retorno;
		}
	}
}


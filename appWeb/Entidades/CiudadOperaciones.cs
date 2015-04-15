using System;
using MySql.Data.MySqlClient;
using System.Collections.Generic;
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

		public static List<Ciudad> consultarCiudad(string dato)
		{
		List<Ciudad> ciudades = new List<Ciudad>();
		MySqlCommand comando = new MySqlCommand(string.Format("SELECT * FROM Ciudad WHERE CiuNombre LIKE '{0}%'", dato), BDComun.ObtenerConexion());
		MySqlDataReader resultado  = comando.ExecuteReader();

		while (resultado.Read()) 
		{
		Ciudad pCiudad = new Ciudad ();
		pCiudad.CiuId = resultado.GetInt32 (0);
		pCiudad.CiuNombre = resultado.GetString (1);
		pCiudad.CiuActiva = resultado.GetInt32 (2);

		ciudades.Add (pCiudad);
		}

		return ciudades;
		}

		public static Ciudad ObtenerCiudad(int pId)
		{
		Ciudad pCiudad = new Ciudad();
		MySqlConnection conexion = BDComun.ObtenerConexion();

		MySqlCommand _comando = new MySqlCommand(String.Format("SELECT * FROM Ciudad where CiuId={0}", pId), conexion);
		MySqlDataReader _reader = _comando.ExecuteReader();
		while (_reader.Read())
		{
		pCiudad.CiuId = _reader.GetInt32(0);
		pCiudad.CiuNombre = _reader.GetString(1);
		pCiudad.CiuActiva = _reader.GetInt32(2);
		}

		conexion.Close();
		return pCiudad;

		}
	}
}


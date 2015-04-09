using System;
using System.Data;
using MySql.Data.MySqlClient;

namespace appWeb
{

	class BDComun
	{
		public static MySqlConnection ObtenerConexion()
		{
			MySqlConnection conectar = new MySqlConnection("server=127.0.0.1; database=monocinco; Uid=root; pwd=natika123;");

			conectar.Open();
			return conectar;        
		}
	

	}
}


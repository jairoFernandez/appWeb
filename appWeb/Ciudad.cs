using System;

namespace appWeb
{
	public class Ciudad
	{
		public string CiuNombre { get; set; }
		public int CiuActiva{ get; set; }

		public Ciudad() { }

		public Ciudad(string pCiuNombre, int pCiuActiva)
		{
			this.CiuNombre = pCiuNombre;
			this.CiuActiva = pCiuActiva;
		}
	}
}


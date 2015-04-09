using System;

namespace appWeb
{
	public class Ciudad
	{
		public int CiuId { get; set; }
		public string CiuNombre { get; set; }
		public int CiuActiva{ get; set; }

		public Ciudad() { }

		public Ciudad(int pCiuId,string pCiuNombre, int pCiuActiva)
		{
			this.CiuId = pCiuId;
			this.CiuNombre = pCiuNombre;
			this.CiuActiva = pCiuActiva;
		}

	}
}


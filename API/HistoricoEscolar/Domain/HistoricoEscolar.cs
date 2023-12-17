using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class Historico_Escolar
    {
        [Key]
        public int IdHistoricoEscolar { get; set; }

        [MaxLength(4)]
        public string Formato { get; set; }
        [MaxLength(200)]
        public string Nome { get; set; }
    }
}

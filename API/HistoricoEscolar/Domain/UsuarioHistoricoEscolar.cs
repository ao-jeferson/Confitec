using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class UsuarioHistoricoEscolar
    {
        [Key]
        public int IdUsuarioHistoricoEscolar { get; set; }
        public int IdUsuario { get; set; }
        public int IdHistoricoEscolar { get; set; }
    }
}

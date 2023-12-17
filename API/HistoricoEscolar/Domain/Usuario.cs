using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class Usuario
    {
        [Key]
        public int IdUsuario { get; set; }

        [Required]
        [MaxLength(20)]
        public string Nome { get; set; }

        [Required]
        [MaxLength(100)]
        public string Sobrenome { get; set; }

        [Required]
        [MaxLength(50)]
        [RegularExpression(@"^(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6}$", ErrorMessage = "Informe um email válido")]
        public string Email { get; set; }

        [Required]
        public DateTime DataNascimento { get; set; }

        [Required]
        [ForeignKey("escolaridade")]
        public int IdEscolaridade { get; set; }

        [NotMapped]
        public Escolaridade escolaridade { get; set; }
    }
}

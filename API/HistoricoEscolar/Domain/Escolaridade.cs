using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class Escolaridade
    {
        [Key]
        public int IdEscolaridade { get; set; }

        [MaxLength(40)]
        [DefaultValue(GrauEnum.Fundamental)]
        public string NivelEscolaridade { get; set; }
        public enum GrauEnum
        {
            Infantil,
            Fundamental,
            Médio,
            Superior
        }
    }
 
}

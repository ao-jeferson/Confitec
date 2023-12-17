using Domain;
using HistoricoEscolar.Files;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Diagnostics;

namespace HistoricoEscolarDB
{
    public class AppDbContext : DbContext
    { 


        public AppDbContext(DbContextOptions<AppDbContext> options)
       : base(options)
        {
        }

        public DbSet<Escolaridade> escolaridade { get; set; }
        public DbSet<Historico_Escolar> historicoEscolar { get; set; }
        public DbSet<Usuario> usuario { get; set; }
        public DbSet<UsuarioHistoricoEscolar> UsuarioHistoricoEscolar { get; set; }
        public DbSet<FileDetails> FileDetails { get; set; }


    }
}
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Microsoft.Apps.CoreApplications.Models
{
    public partial class MSCSSBotContext : DbContext
    {
       // const string connectionString = "Data Source=P0134835\\SQLEXPRESS;Initial Catalog=MSCSSBot;Integrated Security=True";

        public MSCSSBotContext()
        {
        }

        public MSCSSBotContext(DbContextOptions<MSCSSBotContext> options)
            : base(options)
        {
        }

        public virtual DbSet<User> User { get; set; }


        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseSqlServer(connectionString);
        //}


        //        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //        {
        //            if (!optionsBuilder.IsConfigured)
        //            {
        //#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
        //                optionsBuilder.UseSqlServer("Data Source=P0134835\\SQLEXPRESS;Initial Catalog=MSCSSBot;Integrated Security=True");
        //            }
        //        }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

        //    modelBuilder.Entity<User>(entity =>
        //    {
        //        entity.Property(e => e.Id).HasColumnName("ID");

        //        entity.Property(e => e.CreatedDate).HasColumnType("date");

        //        entity.Property(e => e.EmailId)
        //            .HasColumnName("EmailID")
        //            .HasMaxLength(50)
        //            .IsUnicode(false);

        //        entity.Property(e => e.FirstName)
        //            .HasMaxLength(50)
        //            .IsUnicode(false);

        //        entity.Property(e => e.LastName)
        //            .HasMaxLength(50)
        //            .IsUnicode(false);

        //        entity.Property(e => e.LoginDate).HasColumnType("date");

        //        entity.Property(e => e.Password)
        //            .HasMaxLength(50)
        //            .IsUnicode(false);

        //        entity.Property(e => e.Username)
        //            .HasMaxLength(100)
        //            .IsUnicode(false);
        //    });
        //}
    }
}

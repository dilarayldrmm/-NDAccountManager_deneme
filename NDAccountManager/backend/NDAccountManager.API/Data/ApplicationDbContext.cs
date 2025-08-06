using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using NDAccountManager.API.Models; 

namespace NDAccountManager.API.Data
{ public class ApplicationDbContext : DbContext
{
    public DbSet<Account> Accounts { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<SharedAccount> SharedAccounts { get; set; }

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    base.OnModelCreating(modelBuilder);

    modelBuilder.Entity<SharedAccount>()
        .HasOne(sa => sa.Account)
        .WithMany()
        .HasForeignKey(sa => sa.AccountId);

    modelBuilder.Entity<SharedAccount>()
        .HasOne(sa => sa.SharedWithUser) // ✅ doğru navigation property ismi bu
        .WithMany(u => u.SharedAccounts)
        .HasForeignKey(sa => sa.SharedWithUserId);
}
}
}
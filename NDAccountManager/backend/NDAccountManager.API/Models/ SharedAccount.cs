using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NDAccountManager.API.Models
{
   public class SharedAccount
{
    public Guid Id { get; set; } = Guid.NewGuid();

    // Foreign Keys
    public Guid AccountId { get; set; }
    public Guid SharedWithUserId { get; set; }

    // Navigation Properties
    public Account Account { get; set; } = null!;
    public User SharedWithUser { get; set; } = null!;
}
}
using System.ComponentModel.DataAnnotations;

namespace NDAccountManager.API.Models
{
    public class Account
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid(); // ✅ Guid olarak düzeltildi

        [Required]
        public string Platform { get; set; } = string.Empty;

        [Required]
        public string Username { get; set; } = string.Empty;

        [Required]
        public string Password { get; set; } = string.Empty;

        [Required]
        public string Email { get; set; } = string.Empty;

        [Required]
        public string IpAddress { get; set; } = string.Empty;

        public string Notes { get; set; } = string.Empty;



        public Guid? CategoryId { get; set; }

        public Category? Category { get; set; }
            public ICollection<SharedAccount> SharedAccounts { get; set; } = new List<SharedAccount>();

    }
}
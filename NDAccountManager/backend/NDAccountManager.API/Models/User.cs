using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace NDAccountManager.API.Models
{
    public class User
    {
        
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid(); // BU ŞEKİLDE GÜNCELLE

        public string DisplayName { get; set; }

        // Kullanıcıya ait paylaşılan hesaplar
        public ICollection<SharedAccount> SharedAccounts { get; set; }
    }
}
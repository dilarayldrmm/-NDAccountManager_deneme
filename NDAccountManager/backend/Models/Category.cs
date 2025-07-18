using System.Collections.Generic;

namespace backend.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }

        // Bir kategoriye ait birden fazla hesap olabilir
        public ICollection<Account> Accounts { get; set; }
    }
}
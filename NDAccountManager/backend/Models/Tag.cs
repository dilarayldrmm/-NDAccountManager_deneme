using System.Collections.Generic;

namespace backend.Models
{
    public class Tag
    {
        public int Id { get; set; }
        public string Name { get; set; }

        // Etiket ile birçok hesap ilişkili olabilir (many-to-many)
        public ICollection<AccountTag> AccountTags { get; set; }
    }
}
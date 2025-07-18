namespace backend.Models
{
    public class SharedAccount
    {
        public int Id { get; set; }

        public int AccountId { get; set; }
        public Account Account { get; set; }

        public int SharedWithUserId { get; set; }
        public User SharedWithUser { get; set; }

        public DateTime SharedAt { get; set; } = DateTime.UtcNow;
    }
}
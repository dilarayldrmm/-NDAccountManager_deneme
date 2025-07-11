namespace backend.Models
{
    public class Account
    {
        public int Id { get; set; }
        public string Platform { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string IPAddress { get; set; } = string.Empty;
        public string Notes { get; set; } = string.Empty;

        public int UserId { get; set; }
        public User? User { get; set; }
    }
}
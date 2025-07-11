namespace backend.Models
{
    public class User
    {
        public int Id { get; set; }
        public string AzureAdId { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string Role { get; set; } = "User";
        public ICollection<Account> Accounts { get; set; } = new List<Account>();
    }
}
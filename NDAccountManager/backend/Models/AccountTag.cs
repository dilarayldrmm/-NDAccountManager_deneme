namespace backend.Models
{
    public class AccountTag
    {
        public int AccountId { get; set; }
        public Account Account { get; set; }

        public int TagId { get; set; }
        public Tag Tag { get; set; }
    }
}
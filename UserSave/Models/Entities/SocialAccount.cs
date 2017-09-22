using UserSave.DataAccess.Interfaces;

namespace UserSave.Models.Entities
{
    public class SocialAccount : IEntity
    {
        public long Id { get; set; }
        public bool IsDeleted { get; set; }
        public virtual Account Account { get; set; }
        public string Provider { get; set; }
        public string Uid { get; set; }
    }
}
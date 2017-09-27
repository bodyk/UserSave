using System;
using System.Collections.Generic;
using UserSave.DataAccess.Interfaces;

namespace UserSave.Models.Entities
{
    public class Account : IEntity
    {
        public long Id { get; set; }

        public string Email { get; set; }

        public bool EmailConfirmed { get; set; }

        public DateTime DateCreated { get; set; }

        public virtual ICollection<SocialAccount> SocialAccounts { get; set; }
    }
}
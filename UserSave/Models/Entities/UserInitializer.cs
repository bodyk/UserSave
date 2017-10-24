using System.Collections.Generic;
using System.Data.Entity;

namespace UserSave.Models.Entities
{
    public class UserInitializer : CreateDatabaseIfNotExists<ApplicationDbContext>
    {
        protected override void Seed(ApplicationDbContext context)
        {
            var siteUsers = new List<User>
            {
                new User
                {
                    Id = 1,
                    Name = "Bodya",
                    Surname = "Balanyk",
                    Email = "bb@leobit.co",
                    Gender = Gender.Male
                },
                new User
                {
                    Id = 2,
                    Name = "Andy",
                    Surname = "Carrol",
                    Email = "ac@leobit.co",
                    Gender = Gender.Male
                },
                new User
                {
                    Id = 3,
                    Name = "Joshua",
                    Surname = "Cimmich",
                    Email = "jc@leobit.co",
                    Gender = Gender.Male
                }
            };
            context.SiteUsers.AddRange(siteUsers);
            
        }
    }
}
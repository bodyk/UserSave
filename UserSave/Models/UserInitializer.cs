using System.Collections.Generic;
using System.Data.Entity;

namespace UserSave.Models
{
    public class UserInitializer : CreateDatabaseIfNotExists<UserContext>
    {
        protected override void Seed(UserContext context)
        {
            IList<User> defaultUsers = new List<User>
            {
                new User {Name = "Andy", Surname = "Carrol", Email = "aCarrol@example.com", Gender = Gender.Male},
                new User {Name = "James", Surname = "Milner", Email = "jMilner@example.com", Gender = Gender.Male},
                new User {Name = "Anna", Surname = "Jovetic", Email = "aJovetic@example.com", Gender = Gender.Female},
                new User {Name = "Jane", Surname = "Pray", Email = "jPray@example.com", Gender = Gender.Female},
                new User {Name = "Edward", Surname = "Vidal", Email = "eVidal@example.com", Gender = Gender.Male},
            };

            context.Users.AddRange(defaultUsers);
            base.Seed(context);
        }
    }
}
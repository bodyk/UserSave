using System.Collections.Generic;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using UserSave.Infrastructure;
using UserSave.Models;

namespace UserSave.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<UserSave.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "UserSave.Models.ApplicationDbContext";
        }

        protected override void Seed(ApplicationDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));

            var user = new ApplicationUser()
            {
                UserName = "SuperPowerUser",
                Email = "balanykb.@gmail.com",
                EmailConfirmed = true,
                FirstName = "Bogdan",
                LastName = "Balanyk",
                Level = 1,
                JoinDate = DateTime.Now.AddYears(-3)
            };

            manager.Create(user, "leobit@1");

            IList<User> defaultUsers = new List<User>
            {
                new User {Name = "Andy", Surname = "Carrol", Email = "aCarrol@example.com", Gender = Gender.Male},
                new User {Name = "James", Surname = "Milner", Email = "jMilner@example.com", Gender = Gender.Male},
                new User {Name = "Anna", Surname = "Jovetic", Email = "aJovetic@example.com", Gender = Gender.Female},
                new User {Name = "Jane", Surname = "Pray", Email = "jPray@example.com", Gender = Gender.Female},
                new User {Name = "Edward", Surname = "Vidal", Email = "eVidal@example.com", Gender = Gender.Male},
            };

            context.SiteUsers.AddRange(defaultUsers);
            base.Seed(context);
        }
    }
}

using System.Data.Common;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using UserSave.Models.Entities;

namespace UserSave.Models
{
    /// <inheritdoc />
    public class UserContext : DbContext
    {
        /// <inheritdoc />
        public UserContext()
        {
            Database.SetInitializer(new UserInitializer());
        }

        /// <inheritdoc />
        public UserContext(DbConnection connection)
            : base(connection, true)
        {

        }
        
        public DbSet<User> Users { get; set; }

        public DbSet<SocialAccount> SocialAccounts { get; set; }

        /// <inheritdoc />
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}
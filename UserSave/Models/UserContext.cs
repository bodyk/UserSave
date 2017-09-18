using System.Data.Common;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace UserSave.Models
{
    public class UserContext : DbContext
    {
        public UserContext()
        {
            Database.SetInitializer(new UserInitializer());
        }

        public UserContext(DbConnection connection)
            : base(connection, true)
        {

        }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}
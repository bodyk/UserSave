using System.Data.Common;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

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

        /// <summary>
        /// All Users
        /// </summary>
        public DbSet<User> Users { get; set; }

        /// <inheritdoc />
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}
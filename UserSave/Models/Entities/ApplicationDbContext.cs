using System.Data.Entity;

namespace UserSave.Models.Entities
{
    /// <inheritdoc />
    public class ApplicationDbContext : DbContext
    {
        /// <inheritdoc />
        public ApplicationDbContext()
            : base("DefaultConnection")
        {
            Configuration.ProxyCreationEnabled = false;
            Configuration.LazyLoadingEnabled = false;
            Database.SetInitializer(new UserInitializer());
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        public DbSet<User> SiteUsers { get; set; }
    }
}
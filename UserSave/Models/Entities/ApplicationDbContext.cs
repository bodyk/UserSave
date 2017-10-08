using System.Data.Common;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using Microsoft.AspNet.Identity.EntityFramework;
using UserSave.Infrastructure;

namespace UserSave.Models
{
    /// <inheritdoc />
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        /// <inheritdoc />
        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
            Configuration.ProxyCreationEnabled = false;
            Configuration.LazyLoadingEnabled = false;
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        public DbSet<User> SiteUsers { get; set; }
    }
}
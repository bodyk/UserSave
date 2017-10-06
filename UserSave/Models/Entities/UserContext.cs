using System.Data.Common;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using Microsoft.AspNet.Identity.EntityFramework;

namespace UserSave.Models
{
    /// <inheritdoc />
    public class UserContext : IdentityDbContext<ApplicationUser>
    {
        /// <inheritdoc />
        public UserContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
            Configuration.ProxyCreationEnabled = false;
            Configuration.LazyLoadingEnabled = false;
        }

        public static UserContext Create()
        {
            return new UserContext();
        }

        public DbSet<User> SiteUsers { get; set; }
    }
}
using System.Collections.Generic;
using System.Data.Entity;
using System.Threading.Tasks;
using UserSave.Models.Interfaces;

namespace UserSave.Models.Implementations
{
    /// <summary>
    /// Repository to work with user entities
    /// </summary>
    public class UserRepository : IRepository<User>
    {
        private readonly UserContext _context;

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="context"></param>
        public UserRepository(UserContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Get info about all users
        /// </summary>
        /// <returns></returns>
        public async Task<IEnumerable<User>> GetAll()
        {
            return await _context.Users.ToArrayAsync();
        }

        /// <summary>
        /// Get user by specific id
        /// </summary>
        /// <param name="id">Id field that represent unique identifier for User</param>
        /// <returns></returns>
        public async Task<User> Get(int id)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Id == id);
        }

        /// <summary>
        /// Add new User to users
        /// </summary>
        /// <param name="item">New User instance</param>
        public void Create(User item)
        {
            if (item != null)
            {
                _context.Users.Add(item);
            }
        }

        /// <summary>
        /// Update info about specific user
        /// </summary>
        /// <param name="item">User instance to update</param>
        public void Update(User item)
        {
            _context.Entry(item).State = EntityState.Modified;
        }

        /// <summary>
        /// Delete info about specific user
        /// </summary>
        /// <param name="item">User instance to delete</param>
        public void Delete(User item)
        {
            _context.Users.Remove(item);
        }

        /// <summary>
        /// Remove all users
        /// </summary>
        public void Clear()
        {
            _context.Users.RemoveRange(_context.Users);
        }
    }
}
using System.Collections.Generic;
using System.Data.Entity;
using System.Threading.Tasks;
using UserSave.Models.Interfaces;

namespace UserSave.Models.Implementations
{
    /// <summary>
    /// Repository to work with user entities
    /// </summary>
    public class UserRepository : IUserRepository
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

        /// <inheritdoc />
        public async Task<IEnumerable<User>> GetAll()
        {
            return await _context.Users.ToArrayAsync();
        }

        /// <inheritdoc />
        public async Task<User> Get(int id)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Id == id);
        }

        /// <inheritdoc />
        public async Task Create(User item)
        {
            if (item != null)
            {
                _context.Users.Add(item);
                await _context.SaveChangesAsync();
            }
        }

        /// <inheritdoc />
        public async Task Update(User item)
        {
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        /// <inheritdoc />
        public async Task Delete(User item)
        {
            _context.Users.Remove(item);
            await _context.SaveChangesAsync();
        }

        /// <inheritdoc />
        public async Task Clear()
        {
            _context.Users.RemoveRange(_context.Users);
            await _context.SaveChangesAsync();
        }
    }
}
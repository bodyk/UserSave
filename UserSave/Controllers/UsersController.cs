using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using UserSave.Models;
using UserSave.Models.Interfaces;

namespace UserSave.Controllers
{
    /// <inheritdoc />
    /// <summary>
    /// Controller to manage users
    /// </summary>
    public class UsersController : ApiController
    {
        private readonly IRepository<User> _userRepository;

        /// <inheritdoc />
        /// <summary>
        /// 
        /// </summary>
        /// <param name="userRepository"></param>
        public UsersController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        // GET: api/Users
        /// <summary>
        /// Method to get information about all users
        /// </summary>
        /// <returns></returns>
        public async Task<IEnumerable<User>> GetUsers()
        {
            return await _userRepository.GetAll();
        }

        // GET: api/Users/5
        /// <summary>
        /// Get information about single user
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [ResponseType(typeof(User))]
        public async Task<IHttpActionResult> GetUser(int id)
        {
            User user = await _userRepository.Get(id);
            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        // PUT: api/Users/5
        /// <summary>
        /// Update information about existing user
        /// </summary>
        /// <param name="id"></param>
        /// <param name="user"></param>
        /// <returns></returns>
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutUser(int id, User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != user.Id)
            {
                return BadRequest();
            }
            

            try
            {
                await _userRepository.Update(user);
            }
            catch (DbUpdateConcurrencyException)
            {
                return NotFound();
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Users
        /// <summary>
        /// Add new information about user
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        [ResponseType(typeof(User))]
        public async Task<IHttpActionResult> PostUser(User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _userRepository.Create(user);

            return Ok(user);
        }

        // DELETE: api/Users/5
        /// <summary>
        /// Delete information about user
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [ResponseType(typeof(User))]
        public async Task<IHttpActionResult> DeleteUser(int id)
        {
            User user = await _userRepository.Get(id);
            if (user == null)
            {
                return NotFound();
            }

            await _userRepository.Delete(user);

            return Ok(user);
        }
    }
}
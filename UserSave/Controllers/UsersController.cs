using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using UserSave.Authentication;
using UserSave.DataAccess.Interfaces;
using UserSave.Models;
using UserSave.Models.Interfaces;

namespace UserSave.Controllers
{
    /// <inheritdoc />
    /// <summary>
    /// Controller to manage users
    /// </summary>
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    [SimpleAuthorize]
    public class UsersController : ApiController
    {
        private readonly IUnitOfWork _unitOfWork;

        /// <inheritdoc />
        /// <summary>
        /// 
        /// </summary>
        /// <param name="unitOfWork"></param>
        public UsersController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: api/Users
        /// <summary>
        /// Get information about all users
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IEnumerable<User>> GetUsers()
        {
            return await _unitOfWork.UserRepository.GetAllAsync();
        }

        // GET: api/Users/5
        /// <summary>
        /// Get information about single user
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet]
        [ResponseType(typeof(User))]
        public async Task<IHttpActionResult> GetUser(int id)
        {
            User user = await _unitOfWork.UserRepository.GetByIdAsync(id);
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
        public IHttpActionResult PutUser(int id, User user)
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
                _unitOfWork.UserRepository.Update(user);
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
        public IHttpActionResult PostUser(User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _unitOfWork.UserRepository.Create(user);

            return Ok(user);
        }

        // DELETE: api/Users/5
        /// <summary>
        /// Delete information about user
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [ResponseType(typeof(User))]
        public IHttpActionResult DeleteUser(int id)
        {
            _unitOfWork.UserRepository.Delete(id);

            return StatusCode(HttpStatusCode.NoContent);
        }
    }
}
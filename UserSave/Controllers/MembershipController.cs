using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using UserSave.Models.Entities;
using UserSave.Models.Interfaces;

namespace UserSave.Controllers
{
    public class MembershipController : ApiController
    {
        private readonly IAuthService _authService;

        public MembershipController(IAuthService authService)
        {
            _authService = authService;
        }

        // POST: Membership
        [HttpPost]
        public async Task<HttpResponseMessage> Post([FromBody]UserSocial user)
        {
            HttpResponseMessage response = null;

            if (string.IsNullOrWhiteSpace(user?.Provider) || string.IsNullOrWhiteSpace(user.Uid))
            {
                response = Request.CreateResponse(HttpStatusCode.NotFound, "Missing provider or uid");
                return response;
            }

            string token = await _authService.GenerateJwtTokenAsync(user.Provider, user.Uid);

            if (token == null)
            {
                // Special status code for registration
                response = Request.CreateResponse(HttpStatusCode.NoContent, "Uid not found");
                return response;
            }

            response = Request.CreateResponse(HttpStatusCode.OK);
            response.Headers.Add("Access-Control-Expose-Headers", "Token");
            response.Headers.Add("Token", token);

            return response;
        }
    }
}

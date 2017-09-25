using System;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace UserSave.Authentication
{
    public class AuthenticationFilter : ActionFilterAttribute
    {
        public override void OnActionExecuting(HttpActionContext actionContext)
        {
            if (actionContext.Request.Headers.Authorization == null)
            {
                actionContext.Response = new HttpResponseMessage(HttpStatusCode.Unauthorized);
            }
            else
            {
                string authenticationToken = actionContext.Request.Headers.Authorization.Parameter;
                string decodedToken = Encoding.UTF8.GetString(Convert.FromBase64String(authenticationToken));

                var dividerIndex = decodedToken.IndexOf(":", StringComparison.Ordinal);

                string userName = decodedToken.Substring(0, dividerIndex);
                string userPassword = decodedToken.Substring(dividerIndex + 1);


            }
        }
    }
}
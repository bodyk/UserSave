using System.Security.Claims;
using System.Threading.Tasks;

namespace UserSave.Models.Interfaces
{
    public interface IMembershipProvider
    {
        Task<long> VerifyUser(string provider, string uid);
        Task<ClaimsIdentity> GetUserClaims(long accountId);
    }
}

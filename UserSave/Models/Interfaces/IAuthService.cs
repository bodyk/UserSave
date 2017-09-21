using System.Security.Claims;
using System.Threading.Tasks;

namespace UserSave.Models.Interfaces
{
    public interface IAuthService
    {
        Task<string> GenerateJwtTokenAsync(string provider, string uid);
        Task<bool> ValidateTokenAsync(string tokenString);
        Claim GetClaimValue(string token, string key);
    }
}

using System;
using System.Data.Entity;
using System.Threading.Tasks;
using UserSave.DataAccess.Interfaces;
using UserSave.Models.Entities;
using UserSave.Models.Interfaces;

namespace UserSave.Providers
{
    public class MembershipProvider : IMembershipProvider
    {
        private readonly IUnitOfWork _unitOfWork;

        public MembershipProvider(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<long> VerifyUser(string provider, string uid)
        {
            throw new NotImplementedException();
            //var socialAccount = await _unitOfWork.SocialAccountRepository.Query.Include(x => x.Account)
            //    .FirstOrDefaultAsync(x => x.Provider == provider && x.Uid == uid);
            //return socialAccount?.Account.Id ?? 0;
        }
    }
}
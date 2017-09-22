using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UserSave.Models;
using UserSave.Models.Entities;

namespace UserSave.DataAccess.Interfaces
{
    public interface IUnitOfWork
    {
        IGenericRepository<SocialAccount> SocialAccountRepository { get; }
        IGenericRepository<User> UserRepository { get; }
    }
}

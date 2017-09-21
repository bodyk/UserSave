using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UserSave.Models;

namespace UserSave.DataAccess.Interfaces
{
    public interface IUnitOfWork
    {
        //IGenericRepository<Account> AccountRepository { get; }
        IGenericRepository<User> UserRepository { get; }
    }
}

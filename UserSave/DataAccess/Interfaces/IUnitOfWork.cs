using UserSave.Models;

namespace UserSave.DataAccess.Interfaces
{
    public interface IUnitOfWork
    {
        IGenericRepository<User> UserRepository { get; }
    }
}

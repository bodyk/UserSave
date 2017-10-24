using System.Data.Entity;

namespace UserSave.DataAccess.Interfaces
{
    public interface IRepositoryFactory
    {
        IGenericRepository<T> CreateRepository<T>(DbContext context) where T : class, IEntity;
    }
}

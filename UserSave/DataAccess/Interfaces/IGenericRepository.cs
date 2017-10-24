using System.Collections.Generic;
using System.Threading.Tasks;

namespace UserSave.DataAccess.Interfaces
{
    public interface IRepository
    { }
    public interface IGenericRepository<T> : IRepository
    {
        Task<IEnumerable<T>> GetAllAsync();
        Task<T> GetByIdAsync(long id);
        Task<T> GetByIdDeletedAsync(long id);
        Task<T> Create(T item);
        Task Update(T item);
        Task Delete(long id);
    }
}

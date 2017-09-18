using System.Collections.Generic;
using System.Threading.Tasks;

namespace UserSave.Models.Interfaces
{
    interface IRepository<T> where T : class
    {
        Task<IEnumerable<T>> GetAll();
        Task<T> Get(int id);
        void Create(T item);
        void Update(T item);
        void Delete(T item);
        void Clear();
    }
}

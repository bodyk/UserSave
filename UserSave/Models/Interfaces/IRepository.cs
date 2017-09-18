using System.Collections.Generic;
using System.Threading.Tasks;

namespace UserSave.Models.Interfaces
{
    public interface IRepository<T> where T : class
    {
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        Task<IEnumerable<T>> GetAll();

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<T> Get(int id);

        /// <summary>
        /// 
        /// </summary>
        /// <param name="item"></param>
        void Create(T item);

        /// <summary>
        /// 
        /// </summary>
        /// <param name="item"></param>
        void Update(T item);

        /// <summary>
        /// 
        /// </summary>
        /// <param name="item"></param>
        void Delete(T item);

        /// <summary>
        /// 
        /// </summary>
        void Clear();
    }
}

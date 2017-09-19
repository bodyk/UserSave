using System.Collections.Generic;
using System.Threading.Tasks;

namespace UserSave.Models.Interfaces
{
    /// <summary>
    /// Generic repository
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public interface IRepository<T> where T : class
    {
        /// <summary>
        /// Get all items
        /// </summary>
        /// <returns></returns>
        Task<IEnumerable<T>> GetAll();

        /// <summary>
        /// Get specific item by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<T> Get(int id);

        /// <summary>
        /// Create single item
        /// </summary>
        /// <param name="item"></param>
        Task Create(T item);

        /// <summary>
        /// Update information about existing item
        /// </summary>
        /// <param name="item"></param>
        Task Update(T item);

        /// <summary>
        /// Delete specific item
        /// </summary>
        /// <param name="item"></param>
        Task Delete(T item);

        /// <summary>
        /// Remove all items
        /// </summary>
        Task Clear();
    }
}

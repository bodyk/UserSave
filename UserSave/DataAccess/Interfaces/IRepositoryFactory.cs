using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UserSave.DataAccess.Interfaces
{
    public interface IRepositoryFactory
    {
        IGenericRepository<T> CreateRepository<T>(DbContext context) where T : class, IEntity;
    }
}

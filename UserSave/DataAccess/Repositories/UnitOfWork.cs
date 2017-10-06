using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UserSave.DataAccess.Interfaces;
using UserSave.Models;

namespace UserSave.DataAccess.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private UserContext _context;
        private IRepositoryFactory _factory;

        public IGenericRepository<User> userRepository;

        public UnitOfWork(UserContext context, IRepositoryFactory factory)
        {
            this._context = context;
            this._factory = factory;
        }

        public IGenericRepository<User> UserRepository => userRepository ??
                                                          (userRepository = _factory.CreateRepository<User>(_context));
    }
}
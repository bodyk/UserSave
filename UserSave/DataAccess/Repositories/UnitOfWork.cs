using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UserSave.DataAccess.Interfaces;
using UserSave.Models;
using UserSave.Models.Entities;

namespace UserSave.DataAccess.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private UserContext _context;
        private IRepositoryFactory _factory;

        public IGenericRepository<User> userRepository;
        public IGenericRepository<SocialAccount> socialAccountRepository;

        public UnitOfWork(UserContext context, IRepositoryFactory factory)
        {
            this._context = context;
            this._factory = factory;
        }

        public IGenericRepository<User> UserRepository => userRepository ??
                                                          (userRepository = _factory.CreateRepository<User>(_context));

        public IGenericRepository<SocialAccount> SocialAccountRepository => socialAccountRepository ??
                                                                            (socialAccountRepository = _factory.CreateRepository<SocialAccount>(_context));
    }
}
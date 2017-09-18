using System;
using System.Collections.Generic;
using System.Web.Http.Dependencies;
using Ninject;
using UserSave.Models;
using UserSave.Models.Implementations;
using UserSave.Models.Interfaces;

namespace UserSave.Infrastructure
{
    public class NinjectDependencyResolver: IDependencyResolver
    {
        private readonly IKernel _kernel;

        public NinjectDependencyResolver(IKernel kernelParam)
        {
            _kernel = kernelParam;
            AddBindings();
        }

        public object GetService(Type serviceType)
        {
            return _kernel.TryGet(serviceType);
        }

        public IEnumerable<object> GetServices(Type serviceType)
        {
            return _kernel.GetAll(serviceType);
        }

        public IDependencyScope BeginScope()
        {
            throw new NotImplementedException();
        }

        private void AddBindings()
        {
            _kernel.Bind<IRepository<User>>().To<UserRepository>();
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }
    }
}
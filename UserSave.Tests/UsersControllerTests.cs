using Moq;
using NUnit.Framework;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http.Results;
using UserSave.Controllers;
using UserSave.DataAccess.Interfaces;
using UserSave.Models;
using UserSave.Models.Interfaces;

namespace UserSave.Tests
{
    [TestFixture]
    public class UsersControllerTests
    {
        #region Private Members

        /// <summary>
        /// Mock user repository for testing
        /// </summary>
        private readonly Mock<IUnitOfWork> _unitOfWorkMock;

        /// <summary>
        /// Controller which will be testing inside this class
        /// </summary>
        private readonly UsersController _controller;

        private readonly IEnumerable<User> _defaultUsers;

        #endregion

        #region Constructor

        public UsersControllerTests()
        {
            _unitOfWorkMock = new Mock<IUnitOfWork>();
            _controller = new UsersController(_unitOfWorkMock.Object);

            _defaultUsers = new List<User>
            {
                new User {Name = "John", Surname = "Wick"}
            };
        }

        #endregion

        #region Moq Methods

        [SetUp]
        public void TestSetup()
        {
            _unitOfWorkMock.Setup(x => x.UserRepository.GetAllAsync())
                .ReturnsAsync(_defaultUsers);
        }

        [TearDown]
        public void TestTearDown()
        {
            _unitOfWorkMock.Reset();
        }

        #endregion

        #region Testing Methods

        [Test]
        public async Task GetUsers_Returns_ValidUsers()
        {
            //Act
            var actual = await _controller.GetUsers();

            //Assert
            Assert.AreEqual(actual, _defaultUsers);
        }

        [Test]
        public async Task GetUser_Returns_NotFound_When_Pass_Invalid_Id()
        {
            //Arrange
            var invalidId = -1;

            //Act
            var actual = await _controller.GetUser(invalidId);

            //Assert
            Assert.IsInstanceOf<NotFoundResult>(actual);
        }

        [Test]
        public void PutUser_Returns_BadRequest_When_ModelState_Is_Invalid()
        {
            // Arrange
            _controller.ModelState.AddModelError("Name", "Required");

            //Act
            var actual = _controller.PutUser(0, new User());

            //Assert
            Assert.IsInstanceOf<InvalidModelStateResult>(actual);
        }

        [Test]
        public void PostUser_Returns_BadRequest_When_ModelState_Is_Invalid()
        {
            // Arrange
            _controller.ModelState.AddModelError("Name", "Required");

            //Act
            var actual = _controller.PostUser(new User());

            //Assert
            Assert.IsInstanceOf<InvalidModelStateResult>(actual);
        }

        #endregion
    }
}

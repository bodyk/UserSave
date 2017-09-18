using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UserSave.Models
{
    /// <inheritdoc />
    public enum Gender
    {
        /// <summary>
        /// Represents male gender
        /// </summary>
        Male,

        /// <summary>
        /// Represents female gender
        /// </summary>
        Female
    }

    /// <summary>
    /// User Model
    /// </summary>
    public class User
    {
        /// <summary>
        /// Property that represent unique identifier for user
        /// </summary>
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        /// <summary>
        /// User Name
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// User Female
        /// </summary>
        public string Surname { get; set; }

        /// <summary>
        /// User Email (for example email@example.com)
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// User Gender
        /// </summary>
        public Gender Gender { get; set; }
    }
}
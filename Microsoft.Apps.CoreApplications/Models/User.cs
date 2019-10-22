using System;
using System.Collections.Generic;

namespace Microsoft.Apps.CoreApplications.Models
{
    public partial class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string EmailId { get; set; }
        public DateTime? LoginDate { get; set; }
        public DateTime? CreatedDate { get; set; }
    }
}

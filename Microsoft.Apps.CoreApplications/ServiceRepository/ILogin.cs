using Microsoft.Apps.CoreApplications.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Microsoft.Apps.CoreApplications.ServiceRepository
{
    public interface ILogin
    {
        User AuthenticateUser(User userLogin);

        string GenerateJSONWebToken(User user);
    }
}

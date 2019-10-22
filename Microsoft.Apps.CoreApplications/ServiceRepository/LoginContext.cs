using Microsoft.Apps.CoreApplications.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Microsoft.Apps.CoreApplications.ServiceRepository
{
    public class LoginContext : ILogin
    {
        private readonly MSCSSBotContext _mSCSSBotContext;
        private IConfiguration _config;


        public LoginContext(IConfiguration config, MSCSSBotContext mSCSSBotContext)
        {
            _config = config;
            _mSCSSBotContext = mSCSSBotContext;
        }

        public string GenerateJSONWebToken(User user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var token = new System.IdentityModel.Tokens.Jwt.JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Issuer"],
              null,
              expires: DateTime.Now.AddMinutes(2),
              signingCredentials: credentials);

            return new System.IdentityModel.Tokens.Jwt.JwtSecurityTokenHandler().WriteToken(token);
        }

        public User AuthenticateUser(User login)
        {
            User user = null;
            var data = (from c in _mSCSSBotContext.User.AsEnumerable() where c.Username == login.Username select c).SingleOrDefault();
            if (data != null)
            {
                user = new User { Username = data.Username };

            }
            return user;
        }

       
    }
}

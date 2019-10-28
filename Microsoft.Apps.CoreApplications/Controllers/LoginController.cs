using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Apps.CoreApplications.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.Apps.CoreApplications.ServiceRepository;

namespace Microsoft.Apps.CoreApplications.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IConfiguration _config;
        private readonly MSCSSBotContext _mSCSSBotContext;

        ILogin login;

        public LoginController(IConfiguration config, MSCSSBotContext mSCSSBotContext, ILogin _login)
        {
            _config = config;
            _mSCSSBotContext = mSCSSBotContext;
            login = _login;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login([FromBody]User userLogin)
        {
            IActionResult response = Ok(new { success = false, token = "", UserName = userLogin.Username });

            var user = login.AuthenticateUser(userLogin);

            if (user != null)
            {
                var tokenString = login.GenerateJSONWebToken(user);
                response = Ok(new { success = true, token = tokenString, UserName = userLogin.Username });
            }

            return response;
        }

        //private string GenerateJSONWebToken(User userInfo)
        //{
        //    var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
        //    var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

        //    var token = new System.IdentityModel.Tokens.Jwt.JwtSecurityToken(_config["Jwt:Issuer"],
        //      _config["Jwt:Issuer"],
        //      null,
        //      expires: DateTime.Now.AddMinutes(2),
        //      signingCredentials: credentials);

        //    return new JwtSecurityTokenHandler().WriteToken(token);
        //}

        //private User AuthenticateUser(User login)
        //{
        //    User user = null;

        //    //using (MSCSSBotContext ctx = new MSCSSBotContext())
        //    //{
        //    var data = (from c in _mSCSSBotContext.User.AsEnumerable() where c.Username == login.Username select c).SingleOrDefault();
        //    if (data != null)
        //    {
        //        user = new User { Username = data.Username };

        //    }
        ////}
        //    return user;
        //}

    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebAPI.Controller
{
    [Authorize]
    public class HomeController : ApiController
    {
        [HttpGet]
        public IHttpActionResult TestAuthorize()
        {
            return Ok();
        }
    }
}

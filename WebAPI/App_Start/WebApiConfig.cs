using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace WebAPI
{
    public static class WebApiConfig
    {
        /// <summary>
        /// Register method
        /// </summary>
        /// <param name="config">HttpConfiguration object</param>
        public static void Register(HttpConfiguration config)
        {
            //// Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional });
        }

        /// <summary>
        /// RegisterFilters method
        /// </summary>
        public static void RegisterFilters()
        {
            //GlobalConfiguration.Configuration.Filters.Add(new WfsAuthorizeAttribute());
            //GlobalConfiguration.Configuration.Filters.Add(new CustomExceptionFilterAttribute());
        }
    }
}
﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace TunnelQuest.Web.Controllers
{
    public class DefaultController : Controller
    {
        [Route("")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
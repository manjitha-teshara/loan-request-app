using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Web.Http.Cors;
using System.IO;
using System;
using System.Net.Http.Headers;
using Microsoft.AspNetCore.Authorization;
using System.Collections;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoanRequestController : ControllerBase
    {
        private readonly LoanRequestRepository loanRequestRepository;
        public LoanRequestController () {
            loanRequestRepository = new LoanRequestRepository ();
        }

        // POST api/values
         [HttpPost]
        public void createLoanRequest ([FromBody] Request loanRequest) {
            if (ModelState.IsValid)
                RequestRepository.Add(loanRequest);
        }
         // GET api/values
        [HttpGet]
        public IEnumerable<LoanRequest> GetAll()
        {
             return loanRequestRepository.getAllLoanRequests();
        }

        // GET api/values/5
        [HttpGet("{nic}")]
        public IEnumerable<LoanRequest> GetByNic(string nic)
        {
            return loanRequestRepository.getLoanRequestByNic(nic);
        }

    }
}
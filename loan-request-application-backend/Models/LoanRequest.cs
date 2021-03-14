
using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class LoanRequest
    {
        public string name { get; set; }
       
        public int age { get; set; }

        public string nic { get; set; }

        public decimal interestRate { get; set; }

        public int loanTerm { get; set; }

        public decimal amount { get; set; }

    }
}
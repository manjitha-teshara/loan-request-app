using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using API.Models;
using Dapper;
using Microsoft.EntityFrameworkCore;

public class LoanRequestRepository {
    private static string connectionString;
    public  LoanRequestRepository() {
        connectionString = @"Server=tcp:lahirustest.database.windows.net,1433;Initial Catalog=test;Persist Security Info=False;User ID=lahiru;Password=qaz@12345;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
    }

    public static IDbConnection Connection {
        get {
            return new SqlConnection (connectionString);
        }
    }

     // get all from db
    public static IEnumerable<LoanRequest> GetAll() {
        using (IDbConnection dbConnection = Connection){
             string quary = "select * from dbo.LoanRequest";
            dbConnection.Open();
            return dbConnection.Query<LoanRequest>(quary, commandType: CommandType.StoredProcedure);
        }
    }

    public static void Add (LoanRequest loanRequest) {
        using (IDbConnection dbConnection = Connection) {
            var name = loanRequest.name;
            var age = loanRequest.age;
            var nic = loanRequest.nic;
            var interestRate = loanRequest.interestRate;
            var loanTerm = loanRequest.loanTerm;
            var amount = loanRequest.amount;
            string sqlquary ="INSERT INTO dbo.LoanRequest (name, age, nic, interestRate, loanTerm, amount) VALUES (" + name + "," +age+","+nic+","+interestRate+","+loanTerm+","+amount+");";

            dbConnection.Open ();
            dbConnection.Query<LoanRequest> (sqlquary,
                loanRequest);
        }
    }

     public IEnumerable<LoanRequest> getLoanRequestByNic(string nic){
         using (IDbConnection dbConnection = Connection) {
            dbConnection.Open ();
            //query
            string query = "select * from dbo.LoanRequest where nic= " + nic;
            return dbConnection.Query<LoanRequest>(query);
        }

    }

    public IEnumerable<LoanRequest> getAllLoanRequests(){
         using (IDbConnection dbConnection = Connection) {
            dbConnection.Open ();
            //query
            string query = "select * from dbo.LoanRequest";
            return dbConnection.Query<LoanRequest>(query);
        }

    }

}
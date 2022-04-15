using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class AppUser
    {
        // Porperty的完整版
        // private int myVar;
        // public int MyProperty
        // {
        //     get { return myVar; }
        //     set { myVar = value; }
        // }
        public int Id { get; set; }
        public string UserName { get; set; }
        
    }
}
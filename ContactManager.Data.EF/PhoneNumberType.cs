//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ContactManager.Data.EF
{
    using System;
    using System.Collections.Generic;
    
    public partial class PhoneNumberType
    {
        public PhoneNumberType()
        {
            this.PhoneNumbers = new HashSet<PhoneNumber>();
            this.PhoneNumbers1 = new HashSet<PhoneNumber>();
        }
    
        public int Id { get; set; }
        public string Name { get; set; }
        public Nullable<bool> IsDefault { get; set; }
        public Nullable<bool> Active { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public string CreatedBy { get; set; }
        public Nullable<System.DateTime> UpdatedOn { get; set; }
        public string UpdatedBy { get; set; }
    
        public virtual AspNetUser AspNetUser { get; set; }
        public virtual AspNetUser AspNetUser1 { get; set; }
        public virtual AspNetUser AspNetUser2 { get; set; }
        public virtual AspNetUser AspNetUser3 { get; set; }
        public virtual ICollection<PhoneNumber> PhoneNumbers { get; set; }
        public virtual ICollection<PhoneNumber> PhoneNumbers1 { get; set; }
    }
}
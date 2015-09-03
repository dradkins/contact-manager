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
    
    public partial class Person
    {
        public Person()
        {
            this.Addresses = new HashSet<Address>();
            this.Addresses1 = new HashSet<Address>();
            this.EmailAddresses = new HashSet<EmailAddress>();
            this.EmailAddresses1 = new HashSet<EmailAddress>();
            this.Events = new HashSet<Event>();
            this.Events1 = new HashSet<Event>();
            this.IMAccounts = new HashSet<IMAccount>();
            this.IMAccounts1 = new HashSet<IMAccount>();
            this.PersonCompanies = new HashSet<PersonCompany>();
            this.PersonCompanies1 = new HashSet<PersonCompany>();
            this.PersonsInGroups = new HashSet<PersonsInGroup>();
            this.PersonsInGroups1 = new HashSet<PersonsInGroup>();
            this.PhoneNumbers = new HashSet<PhoneNumber>();
            this.PhoneNumbers1 = new HashSet<PhoneNumber>();
            this.Relationships = new HashSet<Relationship>();
            this.Relationships1 = new HashSet<Relationship>();
            this.Websites = new HashSet<Website>();
            this.Websites1 = new HashSet<Website>();
        }
    
        public int Id { get; set; }
        public string FullName { get; set; }
        public string PersonImage { get; set; }
        public string PhoneticName { get; set; }
        public string Notes { get; set; }
        public string NickName { get; set; }
        public Nullable<bool> IsFavorite { get; set; }
        public Nullable<bool> IsUserPersonal { get; set; }
        public Nullable<short> Gender { get; set; }
        public Nullable<bool> Active { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public string CreatedBy { get; set; }
        public Nullable<System.DateTime> UpdatedOn { get; set; }
        public string UpdatedBy { get; set; }
    
        public virtual ICollection<Address> Addresses { get; set; }
        public virtual ICollection<Address> Addresses1 { get; set; }
        public virtual AspNetUser AspNetUser { get; set; }
        public virtual AspNetUser AspNetUser1 { get; set; }
        public virtual AspNetUser AspNetUser2 { get; set; }
        public virtual AspNetUser AspNetUser3 { get; set; }
        public virtual ICollection<EmailAddress> EmailAddresses { get; set; }
        public virtual ICollection<EmailAddress> EmailAddresses1 { get; set; }
        public virtual ICollection<Event> Events { get; set; }
        public virtual ICollection<Event> Events1 { get; set; }
        public virtual ICollection<IMAccount> IMAccounts { get; set; }
        public virtual ICollection<IMAccount> IMAccounts1 { get; set; }
        public virtual ICollection<PersonCompany> PersonCompanies { get; set; }
        public virtual ICollection<PersonCompany> PersonCompanies1 { get; set; }
        public virtual ICollection<PersonsInGroup> PersonsInGroups { get; set; }
        public virtual ICollection<PersonsInGroup> PersonsInGroups1 { get; set; }
        public virtual ICollection<PhoneNumber> PhoneNumbers { get; set; }
        public virtual ICollection<PhoneNumber> PhoneNumbers1 { get; set; }
        public virtual ICollection<Relationship> Relationships { get; set; }
        public virtual ICollection<Relationship> Relationships1 { get; set; }
        public virtual ICollection<Website> Websites { get; set; }
        public virtual ICollection<Website> Websites1 { get; set; }
    }
}
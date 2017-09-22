namespace UserSave.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class add_socialUser : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.SocialAccount",
                c => new
                    {
                        Id = c.Long(nullable: false, identity: true),
                        IsDeleted = c.Boolean(nullable: false),
                        Provider = c.String(),
                        Uid = c.String(),
                        Account_Id = c.Long(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Account", t => t.Account_Id)
                .Index(t => t.Account_Id);
            
            CreateTable(
                "dbo.Account",
                c => new
                    {
                        Id = c.Long(nullable: false, identity: true),
                        IsDeleted = c.Boolean(nullable: false),
                        Email = c.String(),
                        EmailConfirmed = c.Boolean(nullable: false),
                        DateCreated = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.SocialAccount", "Account_Id", "dbo.Account");
            DropIndex("dbo.SocialAccount", new[] { "Account_Id" });
            DropTable("dbo.Account");
            DropTable("dbo.SocialAccount");
        }
    }
}

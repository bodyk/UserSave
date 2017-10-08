namespace UserSave.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class removesocialusers : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.SocialAccount", "Account_Id", "dbo.Account");
            DropIndex("dbo.SocialAccount", new[] { "Account_Id" });
            DropTable("dbo.SocialAccount");
            DropTable("dbo.Account");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.Account",
                c => new
                    {
                        Id = c.Long(nullable: false, identity: true),
                        Email = c.String(),
                        EmailConfirmed = c.Boolean(nullable: false),
                        DateCreated = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.SocialAccount",
                c => new
                    {
                        Id = c.Long(nullable: false, identity: true),
                        Provider = c.String(),
                        Uid = c.String(),
                        Account_Id = c.Long(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateIndex("dbo.SocialAccount", "Account_Id");
            AddForeignKey("dbo.SocialAccount", "Account_Id", "dbo.Account", "Id");
        }
    }
}

namespace UserSave.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class remove_isDeleted : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.SocialAccount", "IsDeleted");
            DropColumn("dbo.Account", "IsDeleted");
            DropColumn("dbo.User", "IsDeleted");
        }
        
        public override void Down()
        {
            AddColumn("dbo.User", "IsDeleted", c => c.Boolean(nullable: false));
            AddColumn("dbo.Account", "IsDeleted", c => c.Boolean(nullable: false));
            AddColumn("dbo.SocialAccount", "IsDeleted", c => c.Boolean(nullable: false));
        }
    }
}

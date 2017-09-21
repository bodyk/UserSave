namespace UserSave.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class updateContext : DbMigration
    {
        public override void Up()
        {
            DropPrimaryKey("dbo.User");
            AddColumn("dbo.User", "IsDeleted", c => c.Boolean(nullable: false));
            AlterColumn("dbo.User", "Id", c => c.Long(nullable: false, identity: true));
            AddPrimaryKey("dbo.User", "Id");
        }
        
        public override void Down()
        {
            DropPrimaryKey("dbo.User");
            AlterColumn("dbo.User", "Id", c => c.Int(nullable: false, identity: true));
            DropColumn("dbo.User", "IsDeleted");
            AddPrimaryKey("dbo.User", "Id");
        }
    }
}

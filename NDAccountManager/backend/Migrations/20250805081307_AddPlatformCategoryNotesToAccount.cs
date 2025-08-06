using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NDAccountManager.API.Migrations
{
    /// <inheritdoc />
    public partial class AddPlatformCategoryNotesToAccount : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Notes",
                table: "Accounts",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Notes",
                table: "Accounts");
        }
    }
}

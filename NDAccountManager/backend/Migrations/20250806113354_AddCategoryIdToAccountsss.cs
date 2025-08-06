using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace NDAccountManager.API.Migrations
{
    /// <inheritdoc />
    public partial class AddCategoryIdToAccountsss : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "IPAddress",
                table: "Accounts",
                newName: "IpAddress");

            migrationBuilder.AddColumn<Guid>(
                name: "CategoryId",
                table: "Accounts",
                type: "uuid",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CategoryId1",
                table: "Accounts",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Owner",
                table: "Accounts",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "Category",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Category", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Accounts_CategoryId1",
                table: "Accounts",
                column: "CategoryId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Accounts_Category_CategoryId1",
                table: "Accounts",
                column: "CategoryId1",
                principalTable: "Category",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Accounts_Category_CategoryId1",
                table: "Accounts");

            migrationBuilder.DropTable(
                name: "Category");

            migrationBuilder.DropIndex(
                name: "IX_Accounts_CategoryId1",
                table: "Accounts");

            migrationBuilder.DropColumn(
                name: "CategoryId",
                table: "Accounts");

            migrationBuilder.DropColumn(
                name: "CategoryId1",
                table: "Accounts");

            migrationBuilder.DropColumn(
                name: "Owner",
                table: "Accounts");

            migrationBuilder.RenameColumn(
                name: "IpAddress",
                table: "Accounts",
                newName: "IPAddress");
        }
    }
}

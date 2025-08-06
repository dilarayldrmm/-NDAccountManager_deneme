using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NDAccountManager.API.Migrations
{
    /// <inheritdoc />
    public partial class AddSharedAccountRelationn : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    DisplayName = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SharedAccounts",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    AccountId = table.Column<Guid>(type: "uuid", nullable: false),
                    SharedWithUserId = table.Column<Guid>(type: "uuid", nullable: false),
                    AccountId1 = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SharedAccounts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SharedAccounts_Accounts_AccountId",
                        column: x => x.AccountId,
                        principalTable: "Accounts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SharedAccounts_Accounts_AccountId1",
                        column: x => x.AccountId1,
                        principalTable: "Accounts",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_SharedAccounts_Users_SharedWithUserId",
                        column: x => x.SharedWithUserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SharedAccounts_AccountId",
                table: "SharedAccounts",
                column: "AccountId");

            migrationBuilder.CreateIndex(
                name: "IX_SharedAccounts_AccountId1",
                table: "SharedAccounts",
                column: "AccountId1");

            migrationBuilder.CreateIndex(
                name: "IX_SharedAccounts_SharedWithUserId",
                table: "SharedAccounts",
                column: "SharedWithUserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SharedAccounts");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}

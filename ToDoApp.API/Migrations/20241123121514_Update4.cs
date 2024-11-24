using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ToDoApp.API.Migrations
{
    /// <inheritdoc />
    public partial class Update4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Discriminator",
                table: "Task",
                newName: "TaskType");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "TaskType",
                table: "Task",
                newName: "Discriminator");
        }
    }
}

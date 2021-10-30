const program = require("commander");
const createProject = require("./action");

const createCommands = () => {
  program
    .command("create <project> [other]")
    .description("正在创建...")
    .action(createProject);
};

module.exports = createCommands;

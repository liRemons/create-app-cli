const program = require("commander");
const createProject = require("./action");

const createCommands = () => {
  program
    .command("create <project> [other]")
    .description()
    .action(createProject);
};

module.exports = createCommands;

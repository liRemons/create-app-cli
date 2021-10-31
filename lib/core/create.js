const program = require("commander");
const createProject = require("./action");

const createCommands = () => {
  program
    .command("create-react-static <project> [other]")
    .description("project name")
    .action(createProject);
};

module.exports = createCommands;

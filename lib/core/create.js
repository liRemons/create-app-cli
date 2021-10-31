const program = require("commander");
const { createReactStatic, createReact } = require("./action");

const createCommands = () => {
  program
    .command("create-react-static <project> [other]")
    .description("project name")
    .action(createReactStatic);
  program
    .command("create-react <project> [other]")
    .description("project name")
    .action(createReact);
};

module.exports = createCommands;

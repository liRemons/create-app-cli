const program = require("commander");
const {
  createReactStatic,
  createReact,
  createVue,
  createVueNext,
} = require("./action");

const createCommands = () => {
  program
    .command("create-react-static <project> [other]")
    .description("please input react-static project name ")
    .action(createReactStatic);
  program
    .command("create-react <project> [other]")
    .description("please input react project name")
    .action(createReact);
  program
    .command("create-vue <project> [other]")
    .description('please input vue2 project name')
    .action(createVue);
  program
    .command("create-vue@next <project> [other]")
    .description('please input vue3 project name')
    .action(createVueNext);
};

module.exports = createCommands;

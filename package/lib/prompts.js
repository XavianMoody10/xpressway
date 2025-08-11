import inquirer from "inquirer";

export async function initialProjectSetupPrompt() {
  try {
    const answers = inquirer.prompt([
      {
        name: "projectName",
        message: "What is your project name",
        default: "my-project",
        validate: (input) => {
          const regex =
            /^(?:@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/;

          if (!regex.test(input)) {
            return "Invalid name, enter another name";
          }

          return true;
        },
      },
    ]);

    return answers;
  } catch (error) {
    console.log(error);
    console.log("Initial User Prompt error has occured");
  }
}

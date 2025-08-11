#!/usr/bin/env node

import { initialProjectSetupPrompt } from "../lib/prompts.js";
import { scaffoldBasicStructure } from "../lib/scaffold.js";
import { changeNameValueInPackageJsonFile } from "../lib/utils.js";

async function initialStart() {
  const projectDir = process.cwd();
  const projectPackageJsonFile = projectDir + "\\" + "package.json";

  try {
    const answers = await initialProjectSetupPrompt();

    scaffoldBasicStructure();

    changeNameValueInPackageJsonFile(
      projectPackageJsonFile,
      projectPackageJsonFile,
      answers.projectName
    );
  } catch (error) {
    console.log(error);
  }
}

initialStart();

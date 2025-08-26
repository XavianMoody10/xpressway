import {
  checkIfDirectoryExist,
  copyAndTransferToAnotherDirectory,
  createDirectory,
  getLastLineWithText,
  getMainRootPath,
  insertLineOfCodeAboveALineInFile,
  insertLineOfCodeBelowALineInFile,
} from "./utils.js";

// Create and scaffold a basic express file structure
export function scaffoldBasicStructure() {
  const projectDir = process.cwd();
  const packageDir = getMainRootPath() + "\\" + "package";
  const basicTemplate = packageDir + "\\" + "templates" + "\\" + "basic";
  copyAndTransferToAnotherDirectory(basicTemplate, projectDir);
}

// Initiate Mock Service Worker
export async function addMockServiceWorker() {
  const projectDir = process.cwd();
  const packageDir = getMainRootPath() + "\\" + "package";
  const mswDirectoryPath = packageDir + "\\" + "templates" + "\\" + "msw";
  const mocksDirectoryPath = projectDir + "\\" + "src" + "\\" + "mocks";
  const doesMockFolderExist = checkIfDirectoryExist(mocksDirectoryPath);
  const doesSrcFolderExist = checkIfDirectoryExist(projectDir + "\\" + "src");
  const serverFilePath = projectDir + "\\" + "server.js";

  try {
    // Check is src folder exist. if not create one
    if (!doesSrcFolderExist) {
      createDirectory(projectDir + "\\" + "src");
    }

    // Check if mocks folder exist in src folder. if not, creat one
    if (!doesMockFolderExist) {
      createDirectory(mocksDirectoryPath);
    }

    // Copy all files and directories from mmsw folder in package templates folder, and transfer them to mocks folder in user project director
    copyAndTransferToAnotherDirectory(mswDirectoryPath, mocksDirectoryPath);

    // Insert the initiateMockServiceWorker function above the app.server in server.js file located in users project folder
    insertLineOfCodeAboveALineInFile(
      serverFilePath,
      "initiateMockServiceWorker() // Initiate Mock Service Worker" + "\n",
      "// Server"
    );

    // Get the line in server.js file that contains the import keyword
    const lastLineWithImportText = getLastLineWithText(
      serverFilePath,
      "import"
    );

    // Then, insert the import for initiateMockServiceWorker below the last line that contains the import keyword
    // Basically add the import for initiateMockServiceWorker below all the existing lines that contains the import keyword
    insertLineOfCodeBelowALineInFile(
      serverFilePath,
      lastLineWithImportText.index,
      "import { initiateMockServiceWorker } from './src/mocks/node.js'" + "\n"
    );
  } catch (error) {
    console.log(error);
    console.log("Error adding mock sevice worker");
  }
}

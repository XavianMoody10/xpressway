import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get upmost project directory
export function getMainRootPath() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  // Go two levels up from current file
  const grandparentDir = path.dirname(path.dirname(__dirname));

  return grandparentDir;
}

// Copy files in a located directory and transfer the file into another new directory
export async function copyAndTransferToAnotherDirectory(
  fromDirectoryPath,
  toDirectoryPatch
) {
  try {
    fs.cpSync(fromDirectoryPath, toDirectoryPatch, { recursive: true });
  } catch (error) {
    console.log(error);
    console.log("Error copying an transfering files");
  }
}

// Change name value in package.json file
export function changeNameValueInPackageJsonFile(
  fromFilePath,
  toFilePath,
  projectName
) {
  let content = fs
    .readFileSync(fromFilePath, "utf8")
    .replace(/"name": ""/, `"name": "${projectName}"`);

  fs.writeFileSync(toFilePath, content, "utf8");
}

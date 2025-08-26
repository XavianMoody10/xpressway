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

export function checkIfDirectoryExist(pathToDirectory) {
  return fs.existsSync(pathToDirectory);
}

export function createDirectory(pathOfDirectory) {
  fs.mkdirSync(pathOfDirectory);
}

export function insertLineOfCodeAboveALineInFile(
  filePath,
  newLine,
  aboveWhatLine
) {
  let data = fs.readFileSync(filePath, "utf8");

  let lines = data.split("\n");

  const index = lines.findIndex((line) => line.includes(aboveWhatLine));

  if (index !== -1) {
    lines.splice(index, 0, newLine);
  }

  fs.writeFileSync(filePath, lines.join("\n"), "utf8");
}

export function getLastLineWithText(filePath, text) {
  const data = fs.readFileSync(filePath, "utf8");
  const lines = data.split("\n");

  let lastImportLine = null;
  let lastImportIndex = -1;

  lines.forEach((line, idx) => {
    if (line.trim().startsWith(text)) {
      lastImportLine = line;
      lastImportIndex = idx;
    }
  });

  return { line: lastImportLine, index: lastImportIndex };
}

export function insertLineOfCodeBelowALineInFile(filePath, lineIndex, newText) {
  const data = fs.readFileSync(filePath, "utf8");
  const lines = data.split("\n");

  if (lineIndex >= 0 && lineIndex < lines.length) {
    lines.splice(lineIndex + 1, 0, newText); // insert after the target line
    fs.writeFileSync(filePath, lines.join("\n"), "utf8");
  } else {
    console.log("Invalid line index");
  }
}

import { copyAndTransferToAnotherDirectory, getMainRootPath } from "./utils.js";

export function scaffoldBasicStructure() {
  const projectDir = process.cwd();
  const packageDir = getMainRootPath() + "\\" + "package";
  const basicTemplate = packageDir + "\\" + "templates" + "\\" + "basic";
  copyAndTransferToAnotherDirectory(basicTemplate, projectDir);
}

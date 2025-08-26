#!/usr/bin/env node

import { promptMockServiceWorker } from "../lib/prompts.js";
import { addMockServiceWorker } from "../lib/scaffold.js";

async function setUpMockServiceWorker() {
  try {
    const answers = await promptMockServiceWorker();

    if (answers.msw) {
      addMockServiceWorker();
    }
  } catch (error) {
    console.log(error);
  }
}

setUpMockServiceWorker();

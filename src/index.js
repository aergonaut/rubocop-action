import core from "@actions/core";
import github from "@actions/github";
import exec from "@actions/exec";

async function run() {
  try {
    let exitCode = await exec.exec("bundle exec rubocop");
    if (exitCode > 0) {
      core.setFailed(`Command exited with ${exitCode}`);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

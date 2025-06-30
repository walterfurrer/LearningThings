import { Octokit } from "@octokit/rest";

async function getPullRequests() {
  const octokit = new Octokit({
    auth: import.meta.env.GITHUB_TOKEN,
    userAgent: "LearningThings - getPullRequests",
    timeZone: "America/New_York",
  });

  const { data: pullRequests } = await octokit.rest.pulls.list({
    owner: "walterfurrer",
    repo: "LearningThings",
    state: "all",
    per_page: 10,
  });

  console.log(pullRequests);
}

getPullRequests();

import { Octokit } from 'octokit';

const octokit = new Octokit({ auth: import.meta.env.GITHUB_TOKEN });

export const getReposInOrg = async (org: string) => {
  const repos = await octokit.paginate(octokit.rest.repos.listForOrg, {
    org,
    per_page: 100,
  });
  return repos;
};

export const getFileContent = async (owner: string, repo: string, path: string, branch = 'main') => {
  try {
    const response = await octokit.rest.repos.getContent({
      owner,
      repo,
      path,
      ref: branch,
    });

    // The content will be base64 encoded
    const content = Buffer.from(response.data.content, 'base64').toString('utf-8');
    return content;
  } catch (error) {
    console.error('Error fetching file: ', error);
    throw error;
  }
};

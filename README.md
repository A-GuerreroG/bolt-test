To make this work, you'll need to set up GitHub OAuth credentials and add them to your environment variables:

Go to GitHub Developer Settings (https://github.com/settings/developers)
Create a new OAuth App
Set the Authorization callback URL to http://localhost:3000/api/auth/callback/github
Create a .env.local file in the root of your project and add:

GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
NEXTAUTH_SECRET=a_random_string_for_encryption
Remember to add .env.local to your .gitignore file if it's not already there.

# Bedework Guide

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## First Time User Set Up

### Install Required Software

1. PC users only, install the following:
   1. Install Git: [Download for PC]](https://git-scm.com/downloads)
   1. Install Github Desktop: [Download for Windows](https://desktop.github.com/) - link is under the giant Mac button

1. Install Node.js -- [See Requirements on Docusaurus](https://docusaurus.io/docs/installation#requirements)
   1. Go to [Node.js website](https://nodejs.org/en/).
   1. Click the download button.
   1. Follow install instructions. During install, uncheck the box to “install additional things.”

1. Verify that Node is installed:  
`node -v`
   1. If version is below required version, update Node:  
   `nvm use 14.4.0`
   1. If version is at or above required version, proceed to next step.

1. Install Yarn -- [See Requirements on Docusaurus](https://docusaurus.io/docs/installation#requirements)
   1. Go to [Yarn website](https://classic.yarnpkg.com/en/docs/install/#mac-stable).
   1. Follow install instructions.

1. Verify that Yarn is installed:  
`yarn --version`
   1. If version is below required version, update Yarn.
   1. If version is above required version, proceed.

### Get Code and Install Site

1. Go to your Sites folder or whichever directory you store websites.
   1. SSH: `git clone git@github.com:Nashville-Public-Library/bedework-guide.git bedework-guide`
   1. HTTP: `git clone https://github.com/Nashville-Public-Library/bedework-guide.git bedework-guide`

1. Go to the bedework-guide folder that was created during git clone above:  
`cd bedework-guide`

1. Install Docusaurus:  
`npm install`

1. Verify that the local environment works:  
`npm run start`

## Returning User Workflow (THIS IS NOT COMPLETE DOCUMENTATION)

### Start Local Development Server

Either command below starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.
```
console
npm run start
```
or
```
console
yarn start
```

## Deploy to Production (THIS IS NOT COMPLETE DOCUMENTATION)

### Merge Pull Requests into Develop then Master

1. Go to the pull requests page on the bedework guide repo: [bedework-guide Github repo](https://github.com/Nashville-Public-Library/bedework-guide/pulls).

1. Review code on each pull request to be deployed.

1. Delete merged branches in Github.

1. After merging in Github, go to terminal and checkout develop:  
`git checkout develop`

1. Pull code on develop:  
`git pull origin develop`

1. Checkout main:  
`git checkout main`

1. Pull code on main:  
`git pull origin main`

1. Merge develop into main:
`git merge develop`

1. Push changes:  
`git push origin main`

### Deploy to Github Pages

1. In terminal, make sure you're in the main branch. Run the build command to create the static files for Github pages. This command generates static content into the `build` directory and can be served using any static contents hosting service.
`npm run build`

1. Deploy changes to Github pages. The github username in the command must be a user that has that has commit access to this repo.  
`GIT_USER=[GITHUB_USERNAME] yarn deploy`

1. The html pages will get built and deployed to Github. [Visit the site on Github Pages](https://nashville-public-library.github.io/bedework-guide/) and verify that newly deployed content is present.

## Troubleshooting

### Cannot start the local development environment

Try the troubleshooting steps below. Try to restart the environment after each step using `npm run start`.

1. Check your node version. You must be running node 14 or higher:
```
node -v
nvm use 14.4.0
```

1. Reinstall docusaurus packages:  
`npm install`

1. Get a fresh repo:
   1. Delete the bedework-guide folder on your local.
   1. Go into the sites folder or wherever you want to put the bedework-guide project.
   1. Clone the repo:
   `git clone https://github.com/Nashville-Public-Library/bedework-guide.git bedework-guide`
   1. See if clone fixed the issue:  
   `npm run start`

## License

Built with Docusaurus, [MIT licensed](/LICENSE.txt).

Bedework Guide documentation (e.g., `.md` files in the `/docs` folder) by Nashville Public Library [Creative Commons licensed](/LICENSE-docs).

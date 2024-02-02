# RCIF User Documentation Repository
Welcome to the Research Computing and Informatics Facility (RCIF) at the Washington University School of Medicine!
This repository contains user documentation for the RCIF facilities, and we rely on people like you to help us keep
it updated, relevant, and correct ... so thanks :)!

# Getting Started
The documentation is organized in sections under the main `docs/` directory, and the "main" branch of this
repository is automatically published to [https://rcifw.github.io/](https://rcifw.github.io/) whenever a pull
request is merged to the branch.

## Setting up Local Development Environment
1. [Install yarn](https://classic.yarnpkg.com/lang/en/docs/install/) if you don't have it already.
2. Install the Project Dependencies
```bash
yarn install
```
3. Run a local development server, with hot-reloading.
```bash
yarn docs:dev
```
4. Open the browser to [http://localhost:8080/](http://localhost:8080/)

**note** The hot-reloading will allow you to see the changes you make in real-time.

# Contributing
If you would like to contribute content, and we know you do, we follow a simple
[Gitflow](https://nvie.com/posts/a-successful-git-branching-model/) branching model. This is even simpler for
this repo, since it is only for documentation. Basically, if you want to suggest a change you:
1. create a local branch (e.g., `git checkout -b my_branch`)
2. make the changes in that local branch - commit changes as often as you like to track your progress!
3. when you are happy with them, make sure the branch is pushed to the origin (`git push origin my_branch`)
4. then open up a [pull request](https://github.com/rcifw/rcifw.github.io/pulls) ... aka "PR"
5. someone will look at the changes and either approve or suggest changes
6. once all changes are accepted, the pull request can be merged by an admin ...
7. and magically you will see your contributions in [https://rcifw.github.io/](https://rcifw.github.io/)

## Automated software pages
For even more magic, we've added `software_packages.yml` to semi-automatically generate certain simple software pages:
1. Add a new section to the `software_packages.yml` file with all of the fields filled out (tip: it is easiest to copy and paste one of the pre-existing records and replace with your new content)
2. Run `./generate_pages.py` to generate the new software pages into the `software/` folder
3. Add a new list item to the `software.md` and to `config.ts` (to update the drop-down list)

# Conventions
We just ask that you observe some basic conventions when you make changes:
* Observe the document organization
* Check for spelling and grammar before a PR
* Make your branch name descriptive (e.g., "tutorial/working-with-singularity")

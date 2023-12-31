# RCIF User Documentation Repository
Welcome to the Research Computing and Informatics Facility (RCIF) at the Washington University School of Medicine!
This repository contains user documentation for the RCIF facilities, and we rely on people like you to help us keep
it updated, relevant, and correct ... so thanks :)!

# Getting Started
The documentation is organized in sections under the main `docs/` directory, and the "main" branch of this 
repository is automatically published to [https://rcifw.github.io/](https://rcifw.github.io/) whenever a pull 
request is merged to the branch.

You can run Jekyll locally to test your changes. Follow the [instructions](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll) to setup local testing via Jekyll. When you are finished, you can run `run_local.sh` from the `/docs` directory in your terminal or just:
```
bundle install
bundle exec jekyll serve
```

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

# Conventions
We just ask that you observe some basic conventions when you make changes:
* Observe the document organization
* Check for spelling and grammar before a PR
* Make your branch name descriptive (e.g., "tutorial/working-with-singularity")

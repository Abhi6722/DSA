---
sidebar_position: 1
---

# Git/Github

## Git

Git is a distributed version control system that allows us to track changes, collaborate, and manage different versions of our code or project. It is designed to handle everything from small to large-scale projects with speed and efficiency.

**Git Commands:**

1. `git init`: Initializes a new Git repository in the current directory.
    
    ```bash
    git init
    ```
    
2. `git clone <repository_url>`: Clones (downloads) a repository from a remote server to your local machine.
    
    ```bash
    git clone <https://github.com/example/repository.git>
    ```
    
3. `git commit -m "<message>"`: Commits the changes in the staging area with a descriptive message.
    
    ```bash
    git commit -m "Add new feature"
    ```
    
4. `git status`: Shows the status of the working directory and staging area.
    
    ```bash
    git status
    ```
    
5. `git diff`: Displays the differences between the working directory and the staging area.
    
    ```bash
    git diff
    ```
    
6. `git push`: Pushes committed changes to a remote repository.
    
    ```bash
    git push origin main
    ```
    
7. `git pull`: Fetches and merges changes from a remote repository to your local repository.
    
    ```bash
    git pull origin main
    ```
    
8. `git branch`: Lists all branches in the repository.
    
    ```bash
    git branch
    ```
    
9. `git checkout <branch_name>`: Switches to a specific branch.
    
    ```bash
    git checkout feature-branch
    ```
    
10. `git merge <branch_name>`: Merges a branch into the current branch.
    
    ```bash
    git merge feature-branch
    ```
    
11. `git remote add <remote_name> <repository_url>`: Adds a remote repository. (Github or Gitlab)
    
    ```bash
    git remote add origin <https://github.com/example/repository.git>
    ```
    
12. `git remote -v`: Lists all the remote repositories.
    
    ```bash
    git remote -v
    ```
    
13. `git log`: Displays a log of commits.
    
    ```bash
    git log
    ```
    
14. `git reset <commit_id>`: Resets the repository to a specific commit.
    
    ```bash
    git reset HEAD~1
    ```
    
15. `git stash`: Temporarily saves changes that are not ready to be committed.
    
    ```bash
    git stash
    ```
    
16. `git tag <tag_name>`: Creates a new tag for a specific commit.
    
    ```bash
    git tag v1.0.0
    ```
    
17. `git fetch`: Fetches changes from a remote repository without merging.
    
    ```bash
    git fetch origin
    ```
    

## Github

GitHub is a web-based hosting service built around Git. It provides a platform for storing, managing, and sharing Git repositories online. It adds a social aspect to Git, allowing developers to collaborate on projects, review code, track issues, and manage project documentation.

**GitHub Commands:**

1. `git remote add origin <repository_url>`: Connects your local repository to a remote GitHub repository.
    
    ```bash
    git remote add origin <https://github.com/example/repository.git>
    ```
    
2. `git push -u origin <branch_name>`: Pushes the branch to the remote repository, establishing an upstream connection.
    
    ```bash
    git push -u origin main
    ```
    
3. `git pull origin <branch_name>`: Fetches and merges changes from a remote GitHub repository to your local repository.
    
    ```bash
    git pull origin main
    ```
    
4. `git clone <repository_url>`: Clones a GitHub repository to your local machine.
    
    ```bash
    git clone <https://github.com/example/repository.git>
    ```
    
5. `git fork`: Creates a copy (fork) of a repository on your GitHub account. This command is performed on the GitHub website by clicking the "Fork" button on the repository page.
6. `git pull request`: Initiates a pull request on GitHub to propose changes from your branch to the original repository. This command is performed on the GitHub website by clicking the "New pull request" button on your forked repository page.
7. `git merge <pull_request_branch>`: Merges a pull request into the main branch of the repository. This command is performed on the GitHub website by clicking the "Merge pull request" button on the pull request page.
8. `git issues`: Lists all issues (bugs, tasks, feature requests) in a GitHub repository.
    
    This command is performed on the GitHub website by visiting the "Issues" tab of the repository.
    
9. `git branch -d <branch_name>`: Deletes a branch in your local repository.
    
    ```bash
    git branch -d feature-branch
    ```
    
10. `git push origin --delete <branch_name>`: Deletes a branch in a remote GitHub repository.
    
    ```bash
    git push origin --delete feature-branch
    ```
    
11. `git remote set-url origin <new_repository_url>`: Changes the URL of the remote repository.
    
    ```bash
    git remote set-url origin <https://github.com/new/example/repository.git>
    ```
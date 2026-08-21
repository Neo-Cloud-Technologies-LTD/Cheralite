# Contributing Guide for Interns.

#### Hello Intern, this readme is meant to help you contribute to this project properly, adopting guidelines and best practices.
---
***Tip:** you can copy the code easily if you open this file in preview mode, anything after '#' is a comment and will not run so don't worry about it.*

## What's next after cloning?
#### 1. Install dependencies
```bash
npm install
```
#### 2. Run the development server
```bash
npm run dev
```
#### 3. Make sure you are in the 'develop' branch first (don't change anything here!)
```bash
git checkout develop
```
#### 4. Create your own branch
```bash
git checkout -b <your-branch-name> 
# creates a new branch with the given name based on the current branch 
# example: 'git checkout -b feature/new-feature'
```
#### 5. Make changes and commit
```bash
git add . # add all changes to the staging area ('.' means all files here)
git commit -m "Added new... feature etc" # your message inside ""
# say something about what you did and how you did it
```

## Pushing and making a pull request

#### 6. Connect your branch to the remote repository using -u
```bash
git push -u origin <your-branch-name>
```
#### 7. Push your changes to your branch
```bash
git push origin <your-branch-name>
```
#### 8. Make a pull request and wait for changes to be approved or rejected
```bash
git pull request
```
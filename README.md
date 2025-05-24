---------------------------------------------------------------------------------------
**basic git command**

🔧 Initial Setup  
git config --global user.name "Your Name"  
git config --global user.email "your@email.com"  

📁 Start a Project  
git init                            # Initialize repo  
git clone <repo-url>                # Clone existing repo  

📄 Stage & Commit  
git status                          # Check changes  
git add .                           # Stage all files  
git add <file>                      # Stage specific file  
git commit -m "Message"             # Commit staged changes  

🌿 Branching  
git branch                          # List branches  
git branch <name>                   # Create branch  
git checkout <name>                 # Switch branch  
git checkout -b <name>              # Create + switch  
git branch -d <name>                # Delete branch  

🔃 Push & Pull  
git remote add origin <url>         # Connect to GitHub  
git push -u origin main             # First push  
git push                            # Push current branch  
git pull                            # Pull latest changes  
git pull origin main --allow-unrelated-histories  # Pull with different histories  

🔁 Merge  
git checkout main  
git pull                            # Update main  
git merge <branch>                  # Merge branch into main  

⚔️ Fix Merge Conflicts  
# 1. Manually resolve conflict markers in file  
git add <file>  
git commit -m "Resolve conflict in <file>"  

⏪ Undo  
git restore <file>                 # Discard local changes  
git reset HEAD <file>              # Unstage file  
git revert <commit>                # Safely undo a commit  

🚀 Pull Request Flow  
# 1. git checkout -b feature/xyz  
# 2. Make changes + commit + push  
# 3. Open PR on GitHub and merge  

🧽 Stash (optional)  
git stash                           # Save work temporarily  
git stash apply                     # Reapply stashed work  

---------------------------------------------------------------------------------------
**dependencies**

Bootstrap : npm install bootstrap@5.2  
Material  : ng add @angular/material@15  

---------------------------------------------------------------------------------------
**basic file structure**

src/  
├── app/  
│   ├── core/                  ← shared core features (e.g., header/footer/nav)  
│   │   ├── header/  
│   │   ├── footer/  
│   │   └── services/          ← global services (e.g., API)  
│   ├── shared/                ← reusable UI components (buttons, cards, etc.)  
│   ├── pages/                 ← main app pages  
│   │   ├── home/  
│   │   ├── catalog/  
│   │   ├── blog/  
│   │   ├── about/  
│   │   └── contact/  
│   ├── app-routing.module.ts ← route configuration  
│   └── app.component.ts  
├── assets/                   ← images, icons, etc.  
└── styles.css                ← global CSS styles  

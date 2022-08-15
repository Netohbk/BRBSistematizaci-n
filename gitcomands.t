git diff 
    "Alows me to look deeper inside of the project´s changes"

git add <file> --patch 
    "Allows me to update changes in different parts of the project"

git log
    "Change history"
    git log --oneline 
        "resume"
    git log --stat
        "How many"
    git log -p
        "divide by code of coommit"

git branch <name>
    "new routes for changes that not modify the original project"
    git checkout <name>
        "move to the route <name>"
    git checkout <1df3bd4> (commits)
        "show in local the code until that time of commit <register>"
<<<<<<< HEAD
        
=======
        @if (you see this) you are in newroutelogging@if
>>>>>>> newroutelogging

jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
    
    /* Load public repositories from GitHub's API instead of the retired activity widget. */
    var githubRepos = document.getElementById("ghfeed");
    if (githubRepos) {
        fetch("https://api.github.com/users/hons82/repos?sort=updated&per_page=100", {
            headers: { Accept: "application/vnd.github+json" }
        })
            .then(function(response) {
                if (!response.ok) {
                    throw new Error("GitHub API request failed with status " + response.status);
                }
                return response.json();
            })
            .then(function(repositories) {
                var recentRepositories = repositories
                    .filter(function(repository) {
                        return !repository.fork && !repository.archived;
                    })
                    .slice(0, 4);

                githubRepos.textContent = "";
                githubRepos.setAttribute("aria-busy", "false");

                if (recentRepositories.length === 0) {
                    var emptyMessage = document.createElement("p");
                    emptyMessage.className = "github-status";
                    emptyMessage.textContent = "No public projects to show right now.";
                    githubRepos.appendChild(emptyMessage);
                    return;
                }

                recentRepositories.forEach(function(repository) {
                    var card = document.createElement("article");
                    card.className = "github-repo";

                    var title = document.createElement("h3");
                    title.className = "github-repo-title";
                    var link = document.createElement("a");
                    link.href = repository.html_url;
                    link.target = "_blank";
                    link.rel = "noopener noreferrer";
                    link.textContent = repository.name;
                    title.appendChild(link);
                    card.appendChild(title);

                    if (repository.description) {
                        var description = document.createElement("p");
                        description.className = "github-repo-description";
                        description.textContent = repository.description;
                        card.appendChild(description);
                    }

                    var details = document.createElement("p");
                    details.className = "github-repo-details";
                    if (repository.language) {
                        var language = document.createElement("span");
                        language.textContent = repository.language;
                        details.appendChild(language);
                    }

                    var stars = document.createElement("span");
                    stars.textContent = "\u2605 " + repository.stargazers_count;
                    details.appendChild(stars);

                    var updated = document.createElement("span");
                    updated.textContent = "Updated " + new Intl.DateTimeFormat(undefined, {
                        month: "short",
                        year: "numeric"
                    }).format(new Date(repository.updated_at));
                    details.appendChild(updated);
                    card.appendChild(details);
                    githubRepos.appendChild(card);
                });
            })
            .catch(function(error) {
                console.error("Unable to load GitHub projects.", error);
                githubRepos.setAttribute("aria-busy", "false");
                var errorMessage = document.createElement("p");
                errorMessage.className = "github-status";
                errorMessage.textContent = "GitHub projects could not be loaded. Please visit my GitHub profile.";
                githubRepos.replaceChildren(errorMessage);
            });
    }


});
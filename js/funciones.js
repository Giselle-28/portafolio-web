document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('nav a');
    const projects = document.querySelectorAll('.project');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-filter');

            projects.forEach(project => {
                project.classList.remove('hide');

                if (category !== 'all' && !project.classList.contains(category)) {
                    project.classList.add('hide');
                }
            });
        });
    });
});

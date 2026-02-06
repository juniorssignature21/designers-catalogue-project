// Minimal JavaScript - Most functionality handled by Django backend
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
        });
    });
});

            // Drag and drop
            designUpload.addEventListener('dragover', function(e) {
                e.preventDefault();
                this.style.backgroundColor = 'rgba(106, 90, 205, 0.1)';
                this.style.borderColor = 'var(--primary-color)';
            });

            designUpload.addEventListener('dragleave', function(e) {
                e.preventDefault();
                this.style.backgroundColor = 'var(--light-gray)';
                this.style.borderColor = 'transparent';
            });

            designUpload.addEventListener('drop', function(e) {
                e.preventDefault();
                this.style.backgroundColor = 'var(--light-gray)';
                this.style.borderColor = 'transparent';
                if (e.dataTransfer.files.length) {
                    designInput.files = e.dataTransfer.files;
                }
            });

            designInput.addEventListener('change', function() {
                if (this.files.length) {
                    designUpload.innerHTML = `<i class="fas fa-check-circle"></i><p>${this.files[0].name}</p>`;
                    designUpload.style.backgroundColor = 'rgba(106, 90, 205, 0.05)';
                }
            });
        }
    }
});

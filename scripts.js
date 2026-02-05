// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {


    // Cover Image Upload with Drag & Drop
    const coverImageUpload = document.getElementById('coverImageUpload');
    const coverImageInput = document.getElementById('coverImage');

    if (coverImageUpload && coverImageInput) {
        // Click to upload
        coverImageUpload.addEventListener('click', function() {
            coverImageInput.click();
        });

        // Drag and drop
        coverImageUpload.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.style.borderColor = 'var(--primary-color)';
            this.style.backgroundColor = 'rgba(106, 90, 205, 0.05)';
        });

        coverImageUpload.addEventListener('dragleave', function(e) {
            e.preventDefault();
            this.style.borderColor = 'var(--border-color)';
            this.style.backgroundColor = 'transparent';
        });

        coverImageUpload.addEventListener('drop', function(e) {
            e.preventDefault();
            this.style.borderColor = 'var(--border-color)';
            this.style.backgroundColor = 'transparent';
            if (e.dataTransfer.files.length) {
                coverImageInput.files = e.dataTransfer.files;
            }
        });

        coverImageInput.addEventListener('change', function() {
            if (this.files.length) {
                coverImageUpload.innerHTML = `<i class="fas fa-check-circle"></i><p>${this.files[0].name}</p>`;
                coverImageUpload.style.borderColor = 'var(--primary-color)';
            }
        });
    }

    // Design Items Upload with Drag & Drop
    for (let i = 1; i <= 4; i++) {
        const designUpload = document.getElementById(`design${i}Upload`);
        const designInput = document.getElementById(`design${i}`);

        if (designUpload && designInput) {
            // Click to upload
            designUpload.addEventListener('click', function() {
                designInput.click();
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

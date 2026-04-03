
document.addEventListener('DOMContentLoaded', function() {
    
   
    const form = document.querySelector('form');
    

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
           
            const bookId = document.querySelector('input[name="book_id"]');
            const title = document.querySelector('input[name="title"]');
            const author = document.querySelector('input[name="author"]');
            const category = document.querySelector('select[name="category"]');
            const description = document.querySelector('textarea[name="description"]');
            
            let isValid = true;
            
           
            removeErrors();
            
           
            if (!bookId.value.trim()) {
                showError(bookId, 'Book ID is required');
                isValid = false;
            } else if (isNaN(bookId.value.trim()) || bookId.value.trim().indexOf(' ') !== -1) {
                showError(bookId, 'Book ID must be a number without spaces');
                isValid = false;
            }
            
           
            if (!title.value.trim()) {
                showError(title, 'Book Name is required');
                isValid = false;
            } else if (title.value.trim().length < 2) {
                showError(title, 'Book Name must be at least 2 characters');
                isValid = false;
            }
            
           
            if (!author.value.trim()) {
                showError(author, 'Author is required');
                isValid = false;
            } else if (author.value.trim().length < 2) {
                showError(author, 'Author name must be at least 2 characters');
                isValid = false;
            }
            
           
            if (!category.value) {
                showError(category, 'Please select a category');
                isValid = false;
            }
            
            
            if (!description.value.trim()) {
                showError(description, 'Description is required');
                isValid = false;
            } else if (description.value.trim().length < 10) {
                showError(description, 'Description must be at least 10 characters');
                isValid = false;
            }
            
           
            if (isValid) {
                showSuccessMessage();
              
            }
        });
        
       
        const resetBtn = document.querySelector('button[type="reset"]');
        if (resetBtn) {
            resetBtn.addEventListener('click', function() {
                removeErrors();
            });
        }
    }
    
    function showError(inputElement, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = '#e74c3c';
        errorDiv.style.fontSize = '12px';
        errorDiv.style.marginTop = '5px';
        errorDiv.innerText = message;
        errorDiv.style.display = 'block';
        
        inputElement.style.borderColor = '#e74c3c';
        inputElement.parentNode.insertBefore(errorDiv, inputElement.nextSibling);
    }
    
   
    function removeErrors() {
        const errors = document.querySelectorAll('.error-message');
        errors.forEach(function(error) {
            error.remove();
        });
        
        const inputs = document.querySelectorAll('input, select, textarea');
        inputs.forEach(function(input) {
            input.style.borderColor = '#ddd';
        });
    }
    

    function showSuccessMessage() {
        let successDiv = document.querySelector('.success-message');
        if (!successDiv) {
            successDiv = document.createElement('div');
            successDiv.className = 'success-message';
            const form = document.querySelector('form');
            form.parentNode.insertBefore(successDiv, form);
        }
        successDiv.style.display = 'block';
        successDiv.innerText = '✓ Form submitted successfully!';
        
        
        setTimeout(function() {
            successDiv.style.display = 'none';
        }, 3000);
    }
});
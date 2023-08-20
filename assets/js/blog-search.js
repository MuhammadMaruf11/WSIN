

/*------------------------------------
   input[type="search"]
    --------------------------------------*/

    const blogSearch = document.getElementById('blogSearch');
    const searchIcon = document.querySelector('i.fal.fa-search');
    
    blogSearch.addEventListener('input', () => {
        if (blogSearch.value != 0) {
            searchIcon.style.display = 'none';
        } else {
    
            searchIcon.style.display = 'block';
        }
    })
    

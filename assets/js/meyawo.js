/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

// Add this code to handle the download button click
document.getElementById('download-btn').addEventListener('click', function() {
    // Create a link element
    const link = document.createElement('a');
    // Set the download path to your resume file
    link.href = 'assets/AKASH BALAKRISHNAN RESUME.pdf';
    // Set the download attribute with desired filename
    link.download = 'AKASH_BALAKRISHNAN_RESUME.pdf';
    // Append link to document
    document.body.appendChild(link);
    // Trigger click on the link
    link.click();
    // Remove the link from document
    document.body.removeChild(link);
});
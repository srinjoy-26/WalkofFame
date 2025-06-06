let Nameval = document.getElementById('name')
let Emailval = document.getElementById('email')
let Inq_cat = document.getElementById('inquiry_category')
let Messageval = document.getElementById('message')

document.getElementById('contactForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(Nameval.value , Emailval.value , Inq_cat.value , Messageval.value);
    charactersInMessage = Messageval.value.length;
    gtag('event', 'contact_form_submit', {
                    inquiry_category: Inq_cat.value, 
                    characters_in_message: charactersInMessage,
                    submission_count: 1,
                    form_id: 'contactForm',
                    form_name: 'Contact Us Form', 
                    page_location: window.location.href
                })
    console.log('GA4: add_to_cart event sent for:', Nameval.value )

})

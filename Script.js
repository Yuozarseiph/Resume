const $ = document
const personName = $.getElementById('name')
const subjectMessage = $.getElementById('subject')
const emailAddress = $.getElementById('email')
const textBox = $.getElementById('message')
const sendBtn = $.getElementById('send')

sendBtn.addEventListener("click", function sendEmail(event) {
    event.preventDefault();
    
    if(personName.value != '' && emailAddress.value != '' && subjectMessage.value != '' && textBox.value != ''){
        const name = personName.value;
        const email = emailAddress.value;
        const subject = subjectMessage.value;
        const message = textBox.value;
        const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        window.open(mailtoLink, '_blank');
    }else{
        return false;
    }

})

   function validateEmail() {
        var email = document.getElementById('email').value;
        if (!email.endsWith('@gmail.com')) {
            alert('Please enter a valid Gmail address (@gmail.com).');
            return false;
        }
        return true;
    }

    function validatePhone() {
        var phone = document.getElementById('phone').value;
        var phonePattern = /^\d+$/;
        if (!phonePattern.test(phone)) {
            document.getElementById('phoneError').style.display = 'inline';
            return false;
        }
        document.getElementById('phoneError').style.display = 'none';
        return true;
    }

    function validateForm() {
        if (validateEmail() && validatePhone()) {
            alert('Message sent succesfully!');
            return true;
        }
        return false;
    }

    var phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^\d]/g, '');
    });

    var textarea = document.getElementById('message');
    textarea.addEventListener('input', function () {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
    textarea.dispatchEvent(new Event('input'));
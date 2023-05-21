function validateForm() {
    var email = document.forms["registerForm"]["email"].value;
    var name = document.forms["registerForm"]["name"].value;
    var phone = document.forms["registerForm"]["phone"].value;
    var password = document.forms["registerForm"]["password"].value;
    var confirm_password = document.forms["registerForm"]["confirm_password"].value;

    // Kiểm tra các trường có được điền đầy đủ không
    if (email === "" || name === "" || phone === "" || password === "" || confirm_password === "") {
        alert("Vui lòng điền đầy đủ thông tin.");
        return false;
    }

    // Kiểm tra định dạng email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        alert("Vui lòng nhập một địa chỉ email hợp lệ.");
        return false;
    }
    
    // Kiểm tra định dạng số điện thoại
    var phonePattern = /^\d{10}$/; // Định dạng 10 chữ số
    if (!phone.match(phonePattern)) {
        alert("Vui lòng nhập một số điện thoại hợp lệ (10 chữ số).");
        return false;
    }

    // Kiểm tra độ dài mật khẩu
    if (password.length < 6) {
        alert("Mật khẩu phải chứa ít nhất 6 ký tự.");
        return false;
    }

    // Kiểm tra xác nhận mật khẩu
    if (password !== confirm_password) {
        alert("Xác nhận mật khẩu không khớp.");
        return false;
    }
}
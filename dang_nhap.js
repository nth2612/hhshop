function validateForm() {
    var email = document.forms["loginForm"]["email"].value;
    var password = document.forms["loginForm"]["password"].value;

    // Kiểm tra các trường có được điền đầy đủ không
    if (email === "" || password === "") {
        alert("Vui lòng điền đầy đủ thông tin.");
        return false;
    }

    // Kiểm tra định dạng email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        alert("Vui lòng nhập một địa chỉ email hợp lệ.");
        return false;
    }
    
    // Kiểm tra độ dài mật khẩu
    if (password.length < 6) {
        alert("Mật khẩu phải chứa ít nhất 6 ký tự.");
        return false;
    }

    if (email == 'admin@gmail.com' && password == 123456){
        alert("Đăng nhập thành công");
    }

    else{
        alert("Thông tin đăng nhập không chính xác!");        
    }
}
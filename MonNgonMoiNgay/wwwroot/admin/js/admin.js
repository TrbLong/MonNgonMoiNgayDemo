

//My Custom

//Hàm xử lý đẩy bài đăng
function setDayBaiDang(mabd, elm) {

	event.preventDefault();

    $.ajax({
        url: 'DayBaiDang',
        type: 'POST',
        data: { id: mabd },
        success: function (data) {
			if (data.tt) {
                $(elm).addClass('disabled')
                alert('success - Bạn có thể xem lại trong phần bài đăng đã đẩy !')
            }
            else {
                alert('warning! - Bạn đã đẩy bài đăng này rồi !')
            }
        },
        error: function () {
            alert('error! - Không thể gửi yêu cầu về máy chủ !')
        }
    })
}
//Hàm xử lý ẩn bài đăng
function setAnBaiDang(mabd, elm) {

    event.preventDefault();

    $.ajax({
        url: 'AnBaiDang',
        type: 'POST',
        data: { id: mabd },
        success: function (data) {
            if (data.tt) {
                $(elm).addClass('disabled')
                alert('success - Bạn có thể xem lại trong phần ẩn đăng đã đẩy !')
            }
            else {
                alert('warning! - Bạn đã ẩn bài đăng này rồi !')
            }
        },
        error: function () {
            alert('error! - Không thể gửi yêu cầu về máy chủ !')
        }
    })
}


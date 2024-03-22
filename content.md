# Hệ thống một Web App

- FrontEnd : phần giao diện user sẽ nhìn thấy, có thể thao tác
- Khi user tương tác => gửi request đến server lấy dữ liệu
- Có dữ liệu mong muốn => server sẽ response để cho FrontEnd hiện thị lên UI

# String

- length: string.length - in ra độ dài của string
- index: vị trí từng ký tự của string. bắt đầu từ 0
- split(): tách chuỗi thành mảng
- toLowerCase() và toUpperCase(): chuyển đổi qua lại chữ in hoa và chữ thường
- includes(): kiểm tra chuỗi có chứa ký tự đó hay không: có trả về true và không thì trả về false
- indexOf() : kiểm tra vị trí của ký tự đó trong str
- replace('str muốn thay', 'str thay thế'): thay thế
- repeat() : lặp lại
- slice(start, end) : cắt str và trả ra str được cắt từ start đến end - 1
- trim() : loại bỏ khoảng trống 2 bên
- charAt() : trả về ký tự đó
- substr(index , length): index vị trí bắt đầu lấy, length số lượng ký tự muốn lấy
- substring(index, end) : index vị trí bắt đầu, end vị trí kết thúc

# truthy và falsy:

- falsy bao gồm: 0 , ' ', false, undefined, null, NaN

# Function

- Thực hiện một chức năng nào đó
- Các loại function: Declaration Function, Xpression function, Arrow Function
- `return` - nếu không có return thì kết quả của hàm trả về undefined
- Kiểm tra tính hợp lệ của tham số đầu vào

# Object

- Lấy value của key: object.key hoặc object['key']
- Thêm key mới vào object: object.newKey
- Clone Object: Object.assign() , spread operator
- Object.keys(object) : trả tất cả các key của object

# Array

- kiểm tra array: arr.isArray()
- Method array:
  - push(), pop(), shift(), unshift()
  - every(): ktra tất cả ptu có tmdk không? trả về true hoặc false
  - some(): kiểm tra 1 ptu tmdk - trả về true hoặc false
  - indexOf(searchEl): tìm vị trí đầu tiên của searchEl
  - inclues(): kiểm tra có chứa ptu không kq trả về true hoặc false
  - reverse(): đảo mảng
  - join(): nối mảng về chuỗi
  - slice(start, end): trả ra 1 mảng mới: start(vị trí bắt đầu) - end - 1
  - splice(start, count, addValue): cắt bỏ và thay thế
  - sort(): sắp xếp
  - map(): duyệt qua từng pt trong mảng và trả ra mảng mới = leng mảng ban đầu
  - forEach(): duyệt qua ptu của mảng : forEach không return đc, chạy mãi k dừng, không trả ra mảng mới
  - filter(): duyệt qua một mảng và loại bỏ ptu không thỏa mãn dk
  - reduce():

# Scope

- ĐN: đưa phần khai báo biến lên đầu scope
- Global scope:
- Function scope
- Block scope
- Lexical scope: function con có thể truy xuất scope của function cha

# Date

- new Date(): built-in object (tích hợp sẵn trong javascript)
- getFullYear(): in ra năm
- getMonth(): in ra tháng
- getDate(): in ra ngày
- getDay(): in ra thứ của tuần 0 - 6 (0 là chủ nhật)
- getHours(): in ra giờ
- getMinutes(): in ra phút
- getSeconds(): in ra giây
- setTimeOut() và setInterval()
  - setTimeout(): thực hiện 1 chức năng nào đó sau một tgian nhất định
  - setInterval(): sau liên tục sau 1 khoảng thời gian nhất định
  - clearInterval(): dừng lại Interval()

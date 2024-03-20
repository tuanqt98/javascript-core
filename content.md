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
  - every(): ktra tất cả ptu có tmdk không
  - some(): kiểm tra 1 ptu tmdk
  - indexOf(searchEl): tìm vị trí đầu tiên của searchEl
  - inclues(): kiểm tra có chứa ptu không

# Scope

- ĐN: đưa phần khai báo biến lên đầu scope
- Global scope:
- Function scope
- Block scope
- Lexical scope: function con có thể truy xuất scope của function cha

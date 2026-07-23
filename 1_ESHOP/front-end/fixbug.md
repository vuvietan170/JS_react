
khi ma bi loi khi them slider vao (error: element type is invalid) : react-slick la package commonJS. Doi khi vite pre-bundle sai khien Slider tro thanh {default: Slider}(mot object thay vi component that) - thong bao se hien got:object
Cach sua:
```
# Xem đã cài chưa
npm list react-slick slick-carousel
# Chưa có thì cài 
npm install react-slick slick-carousel

# Sau đó xóa cache Vite và khơi động lại
rm -rf node_modules/.vite
npm run dev
# Powershell
Remove-Item -Recurse -Force node_modules\.vite
npm run dev
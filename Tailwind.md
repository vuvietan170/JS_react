- Tailwind make building modern responsive websites faster and easier
- fuck css
# How tailwind work
- we can structure in html without defines class in html and style in css
- change the class and style adjust instantly
# Tailwind fundamental
```
<h1 class="mt-20 text-center text-3xl text-blue-300">Hello World</h1>
magin-top 20px text-aligh:center ,font-size line-height, color
```
```
<div class="my-10 h-10 w-full rounded-2xl border-4 bg-amber-100 p-5 flex justify-center items-center">
  <h1 class="text-center font-mono font-extrabold">Hello World</h1>
</div>
margin-block , height, width, border-radious, border, back-groundcolor, padding, display:flex , justify-content , align-items
```
# Just in time
custom size color or property 
```
class="text-[30px] bg-[#177013] w-[762px] h-[1080px]"
```
# Layout & Flex-box: Structuring UI
- Position: defines where an element appears
```
<div class="mt-10 flex flex-col items-center justify-center space-y-6">
  <div class="h-15 w-15 rounded-full bg-blue-500"></div>
  <div class="h-15 w-15 rounded-full bg-green-500"></div>
  <div class="h-15 w-15 rounded-full bg-yellow-500"></div>
</div>
```
# Media Query & Responsive Design

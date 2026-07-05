// Bài 4: Conditional Rendering Exercise
// Tạo component hiển thị weather information với các trạng thái khác nhau (sunny, rainy, cloudy).
const Weather = ({weather}) => {
    return(
        <div className="weather">

            <h2>Weather today</h2>

            {weather === "sunny" && (<p>It's sunny today!</p>)}
            {weather === "rainy" && (<p>Today it's rainy</p>)}
            {weather === "cloudy" && (<p>Today it's cloudy</p>)}
        </div>
    );
};
export default Weather;
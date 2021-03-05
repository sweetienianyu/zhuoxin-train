
import axios, {AxiosResponse} from 'axios'
import colors from 'colors'
import { Command } from 'commander';
const program = new Command();
program
  .version("0.1.0")
  .option("-c, --city [name]", "Add city name")
  .parse(process.argv)

if(process.argv.slice(2).length === 0) {
  program.outputHelp(colors.red);
  process.exit()
}

// 接口返回天气格式
// {
//   "status":"1",
//   "count":"1",
//   "info":"OK",
//   "infocode":"10000",
//   "lives":
//     [
//       {"province":"四川","city":"成都市","adcode":"510100","weather":"多云","temperature":"18","winddirection":"东北","windpower":"≤3","humidity":"46","reporttime":"2021-03-05 14:59:04"}
//     ]
// }

interface Ilive {
  province: string,
  city: string,
  adcode: string,
  weather: string,
  temperature: string,
  windddirection: string,
  windpower: string,
  humidity: string,
  reporttime: string
}
interface IweatherResponse {
  status: string,
  count: string,
  info: string,
  infocode: string,
  lives: Ilive[]
}

const URL = "https://restapi.amap.com/v3/weather/weatherInfo"
const KEY = "78b3cfe213b3294c02d99201fea829b9"
// axios.get(`${URL}?key=${KEY}&city=${encodeURI(program.city)}`).then((res:AxiosResponse<IweatherResponse>) => {
//   const live = res.data.lives[0]
//   console.log(colors.yellow(live.reporttime))
//   console.log(colors.white(`${live.province} ${live.city}`))
//   console.log(colors.green(`${live.weather} ${live.temperature}度`))
// })
// .catch(() => {
//   console.log(colors.red('天气服务出现异常'))
// })

async function getWeather(city: string) {
  try {
    const url = `${URL}?city=${encodeURI(city)}&key=${KEY}`
    const response = await axios.get(url)
    const live = response.data.lives[0]
    console.log(colors.yellow(live.reporttime))
    console.log(colors.white(`${live.province} ${live.city}`))
    console.log(colors.green(`${live.weather} ${live.temperature}度`))
  }
  catch {
    console.log(colors.red('天气服务出现异常'))
  }
}
getWeather(program.city)
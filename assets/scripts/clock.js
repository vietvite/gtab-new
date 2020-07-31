var display12hFormat = true

function getDateString() {
  const dayStr_vi = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7']
  const dayStr_en = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  
  const datetime = new Date()
  const date = datetime.getDate()
  const month = datetime.getMonth() + 1
  const year = datetime.getFullYear()
  const day = datetime.getDay()

  const dateStr = `${dayStr_en[day]}, ${date}/${month}/${year}`
  return dateStr
}
function getTime(is12Format) {
  const time = new Date()
  const hour = standardized(to12Format(is12Format, time.getHours()))
  const min = standardized(time.getMinutes())
  const sec = standardized(time.getSeconds())
  const ampm = is12Format ? (time.getHours() < 12 ? 'AM' : 'PM') : ''

  let timeStr = `${hour}:${min}`
  return {
    time: timeStr,
    ampm
  }
}
function to12Format(is12Format = false, hour) {
  return is12Format ? hour > 12 ? hour - 12 : hour : hour
}
function standardized(number) {
  return number < 10 ? '0' + number : number
}
function updateClockAndDate() {
  // style datetime wrapper
  const wrapper = document.getElementById('datetime-wrapper')
  // wrapper.style.position = 'absolute'
  // wrapper.style.right = '10px'
  // wrapper.style.textAlign = 'right'

  // style date
  const dateTag = document.getElementById('date')
  // dateTag.style.margin = '0px'
  // dateTag.style.fontWeight = '200'
  // dateTag.style.fontSize = '1.25rem'

  // style time
  const timeTag = document.getElementById('time')
  // timeTag.style.margin = '0px'
  // timeTag.style.fontWeight = '200'
  // timeTag.style.fontSize = '10rem'
  // timeTag.style.cursor = 'pointer'
  // timeTag.style.display = 'inline-block'

  const time = getTime(display12hFormat)

  timeTag.innerText = time.time
  dateTag.innerText = getDateString()

  let ampmTag = ''
  if(display12hFormat) {
    ampmTag = document.createElement('span')
    // ampmTag.style.fontSize = '0.75rem'
    // ampmTag.style.marginLeft = '2px'
    // ampmTag.style.verticalAlign = 'super'
    // ampmTag.innerText = time.ampm
  }
  timeTag.append(ampmTag)
}

function toggleDisplayType() {
  display12hFormat = !display12hFormat
  updateClockAndDate()
}

setInterval(() => {
  updateClockAndDate()
}, 1000)
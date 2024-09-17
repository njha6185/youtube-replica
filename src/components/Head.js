import { HEMBURGER_MENU_ICON_URL, LOGO, USER_ICON } from "../constant"

const Head = () => {
  return (
    <div className="grid grid-flow-col p-1 md:p-5 md:m-2 shadow">
      <div className="flex col-span-1 pt-2 md:mx-2">
        <img 
        className="h-8"
        src={HEMBURGER_MENU_ICON_URL} alt="menu"/>
        <img
        className="h-8 ml-1 md:mx-2"
        src={LOGO} alt="logo"/>
      </div>
      <div className="col-span-10 text-center">
        <input className="w-1/2 p-2 border-2 widt border-gray-500 rounded-l-full text-center" type="text" placeholder="Search"/>
        <button className="border-2 border-gray-500 bg-gray-100  p-2 px-3 text-center rounded-r-full">🔍</button>
      </div>
      <div className="col-span-1 pt-1">
        <img className="h-8" alt="user icon" src={USER_ICON}/>
      </div>
    </div>
  )
}

export default Head
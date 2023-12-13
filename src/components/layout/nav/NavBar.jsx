import { useNavigate } from "react-router-dom"
import Button from "../../Button"
import Container from "../../Container"
import AlertButton from "./AlertButton"
import Search from "./Search"
import { useAuth } from "../../AuthPage/hook/useAuth"
import { Avatar } from "@mui/material"
import Logo from '@root/assets/logo.png'
import { useState } from "react"

// eslint-disable-next-line react/prop-types
const NavBar = () => {
  const { isLogged, authUser, hanldeLogout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  const navigate = useNavigate()

  return (
    <div className="sticky top-0 w-full z-30 shadow-sm bg-white">
      <div className="py-2 border-b-[2px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md-gap-0">
            <div className="cursor-pointer text-2xl font-bold"
              onClick={() => navigate('/shop')}
            >
              <img src={Logo} alt="logo" className="h-16" />
            </div>
            <div className="hidden md:block xl:w-[500px] md:w-[300px]">
              <Search />
            </div>
            <div className="flex flex-row items-center gap-8 md:gap-12 cursor-pointer">
              <AlertButton />
              {isLogged ?
                // <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <div className="relative">
                  <Avatar
                    alt="Remy Sharp"
                    src={authUser?.avatar}
                    onClick={() => setIsOpen(!isOpen)}
                  />
                  {isOpen &&
                    <div
                      className="absolute z-30 bg-white mt-2 min-w-[120px] rounded-sm right-0"
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
                      }}
                    >
                      <div
                        className={`flex flex-col`}
                      >
                        <div className=" py-1 px-2 hover:bg-slate-100">{authUser?.fullname}</div>
                        <div
                          className="font-semibold border-t-[1px] border-slate-800 py-1 px-2 hover:bg-slate-100"
                          onClick={hanldeLogout}
                        >
                          Đăng xuất
                        </div>
                      </div>
                    </div>
                  }
                </div>
                :
                <Button
                  label="Sign Up"
                  color="black"
                  onClick={() => navigate('/login')}
                />
              }
            </div>
          </div>
        </Container>
      </div >
    </div >
  )
}

export default NavBar
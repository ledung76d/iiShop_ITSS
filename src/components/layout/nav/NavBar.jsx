import { useNavigate } from "react-router-dom"
import Button from "../../Button"
import Container from "../../Container"
import AlertButton from "./AlertButton"
import Search from "./Search"
import { useAuth } from "../../AuthPage/hook/useAuth"
import { Avatar } from "@mui/material"

// eslint-disable-next-line react/prop-types
const NavBar = () => {
  const { isLogged } = useAuth()

  const navigate = useNavigate()

  return (
    <div className="sticky top-0 w-full z-30 shadow-sm bg-white">
      <div className="py-4 border-b-[2px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md-gap-0">
            <div className="cursor-pointer text-2xl font-bold"
              onClick={() => navigate('/shop')}
            >
              Logo iiShop
            </div>
            <div className="hidden md:block xl:w-[500px] md:w-[300px]">
              <Search />
            </div>
            <div className="flex flex-row items-center gap-8 md:gap-12 cursor-pointer">
              <AlertButton />
              {isLogged ?
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
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
      </div>
    </div >
  )
}

export default NavBar
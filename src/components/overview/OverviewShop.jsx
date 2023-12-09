import Container from "../Container"
import Heading from "../Heading"
import instance from "../../utils/backendApi"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Rating, Chip } from "@mui/material";
import ImageGallery from "./ImageGallery";
import parser from 'html-react-parser';

const OverviewShop = () => {
  const { shopId } = useParams();
  const [shop, setShop] = useState({});

  const createImage = (n) => {
    let images = [];
    for (let i = 0; i < n; i++) {
      images.push({
        url: "https://fptshop.com.vn/uploads/originals/2016/2/27//635921650660919288_Xom-noi-01.JPG"
      })
    }
    return images;
  }

  //const images = createImage(4);
  const images = [
    {
      url: "https://fptshop.com.vn/uploads/originals/2016/2/27//635921650660919288_Xom-noi-01.JPG",
    },
    {
      url: "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/145345/Originals/NF_1200x628.png"
    },
    {
      url: "https://cdnphoto.dantri.com.vn/j11Cf15v7vJDSvEd-KEj1_OHFiM=/zoom/1200_630/2023/05/10/0905fpt-shop-ly-giai-thanh-cong-tu-chuong-trinh-khuyen-mai-crop-1683685464125.jpeg"
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUcb2zITm0X_lf3i2pUE752mSF69yLVIu7CQ&usqp=CAU"
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc-HOcV7yY9uX8P234O_UgWuPaBbZoiCs5nQ&usqp=CAU"
    },
    {
      url: "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/146370/Originals/%E1%BA%A3nh_Viber_2022-06-05_17-00-03-831.png"
    }
  ]
  //const images = shop?.images?.slice(1) || [];

  useEffect(() => {
    const fetch = async () => {
      const res = await instance.get("/api/v1/store/" + shopId);
      console.log(res.data);
      if (res.data.EC === 200) {
        setShop(res.data.data);
      }
      else alert(res.data.message);
    }
    fetch();
  }, [shopId]);



  return (
    <div>
      <Container>
        {
          shop && (
            <div className="my-5">
              {/* Name */}
              <Heading title={shop.name || ""} />
              {/* Rating */}
              <div className="flex items-center gap-2 mt-3">
                <Chip label="Rating" color="primary" size="small" />
                <Rating value={shop.rating || 0} readOnly />
              </div>
              {/* Address */}
              <div className="flex gap-2 mt-3">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.2537 25.13C4.64445 23.6452 5.42242 22.2907 6.50811 21.205L11.0156 16.6975L13.3025 18.9844L8.79499 23.4919C7.70931 24.5776 6.35483 25.3555 4.86999 25.7463L4.42216 25.8641C4.24858 25.9098 4.09018 25.7514 4.13586 25.5778L4.2537 25.13Z" fill="#FFF4D9" stroke="black" stroke-width="1.40625" stroke-linejoin="round" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.734 16.894C21.1848 16.3448 21.1848 15.4544 21.734 14.9052L24.6069 12.0322C26.2911 10.3481 26.2911 7.61757 24.6069 5.93344L23.9195 5.24601C22.2354 3.56188 19.5049 3.56188 17.8207 5.24601L14.9477 8.119C14.3986 8.66818 13.5082 8.66818 12.959 8.119L12.5594 7.71936C11.0949 6.25489 8.72052 6.25489 7.25605 7.71936L5.6819 9.29351C5.13273 9.84269 5.13273 10.7331 5.6819 11.2822L18.8317 24.432C19.3808 24.9812 20.2712 24.9812 20.8204 24.432L22.3945 22.8579C23.859 21.3934 23.859 19.019 22.3945 17.5546L21.734 16.894Z" fill="#D27C2C" />
                  <path d="M24.6069 12.0322L25.1041 12.5294H25.1041L24.6069 12.0322ZM24.6069 5.93344L25.1041 5.43625V5.43625L24.6069 5.93344ZM23.9195 5.24601L23.4223 5.7432V5.7432L23.9195 5.24601ZM17.8207 5.24601L18.3179 5.7432L17.8207 5.24601ZM7.25605 7.71936L7.75324 8.21654L7.25605 7.71936ZM18.8317 24.432L18.3345 24.9292L18.8317 24.432ZM20.8204 24.432L20.3232 23.9348L20.8204 24.432ZM5.6819 11.2822L5.18472 11.7794L5.6819 11.2822ZM12.959 8.119L13.4562 7.62182L12.959 8.119ZM21.734 14.9052L21.2368 14.408L21.734 14.9052ZM21.734 16.894L21.2368 17.3911L21.734 16.894ZM24.1098 11.535L21.2368 14.408L22.2311 15.4024L25.1041 12.5294L24.1098 11.535ZM24.1098 6.43062C25.5193 7.84017 25.5193 10.1255 24.1098 11.535L25.1041 12.5294C27.0629 10.5707 27.0629 7.39498 25.1041 5.43625L24.1098 6.43062ZM23.4223 5.7432L24.1098 6.43062L25.1041 5.43625L24.4167 4.74883L23.4223 5.7432ZM18.3179 5.7432C19.7275 4.33365 22.0128 4.33365 23.4223 5.7432L24.4167 4.74883C22.458 2.7901 19.2823 2.79011 17.3235 4.74883L18.3179 5.7432ZM15.4449 8.61619L18.3179 5.7432L17.3235 4.74883L14.4506 7.62182L15.4449 8.61619ZM12.0622 8.21655L12.4618 8.61619L13.4562 7.62182L13.0565 7.22218L12.0622 8.21655ZM7.75324 8.21654C8.94311 7.02667 10.8723 7.02667 12.0622 8.21655L13.0565 7.22218C11.3175 5.48312 8.49792 5.48312 6.75887 7.22217L7.75324 8.21654ZM6.17909 9.7907L7.75324 8.21654L6.75887 7.22217L5.18472 8.79633L6.17909 9.7907ZM19.3288 23.9348L6.17909 10.7851L5.18472 11.7794L18.3345 24.9292L19.3288 23.9348ZM21.8974 22.3607L20.3232 23.9348L21.3176 24.9292L22.8917 23.355L21.8974 22.3607ZM21.8974 18.0517C23.0872 19.2416 23.0872 21.1708 21.8974 22.3607L22.8917 23.355C24.6308 21.616 24.6308 18.7964 22.8917 17.0574L21.8974 18.0517ZM21.2368 17.3911L21.8974 18.0517L22.8917 17.0574L22.2311 16.3968L21.2368 17.3911ZM18.3345 24.9292C19.1582 25.753 20.4938 25.753 21.3176 24.9292L20.3232 23.9348C20.0486 24.2094 19.6034 24.2094 19.3288 23.9348L18.3345 24.9292ZM5.18472 8.79633C4.36095 9.62009 4.36095 10.9557 5.18472 11.7794L6.17909 10.7851C5.9045 10.5105 5.9045 10.0653 6.17909 9.7907L5.18472 8.79633ZM14.4506 7.62182C14.176 7.89641 13.7308 7.89641 13.4562 7.62182L12.4618 8.61619C13.2856 9.43995 14.6212 9.43995 15.4449 8.61619L14.4506 7.62182ZM21.2368 14.408C20.413 15.2318 20.413 16.5674 21.2368 17.3911L22.2311 16.3968C21.9566 16.1222 21.9566 15.677 22.2311 15.4024L21.2368 14.408Z" fill="black" />
                  <path d="M21.7968 7.26582C20.3905 6.32833 19.453 7.73457 18.0468 9.14082" stroke="black" stroke-width="1.40625" stroke-linecap="round" />
                </svg>
                <span
                  className="text-2xl "
                >{shop.address || ""}</span>
              </div>
              <ImageGallery images={images || []} />
              {/* Description */}
              <div className="mt-5">
                <span>{parser(shop.description || "")}</span>
              </div>
            </div>
          )
        }
      </Container>
    </div>
  )
}

export default OverviewShop
import { Link, useParams } from 'react-router-dom';
import Container from '../Container';
import Button from '../Button';
import { useEffect, useState } from 'react';
import instance from '../../utils/backendApi';

export default function MuiBreadcrumbs() {
  const { shopId } = useParams();
  const [isLine, setIsLine] = useState('');
  const [linkWeb, setLinkWeb] = useState('');

  useEffect(() => {
    const fetch = async () => {
      const res = await instance.get(
        '/api/v1/store/' + shopId,
      );
      if (res.data.EC === 200) {
        // console.log('sos', res.data.data);
        setLinkWeb(res.data.data.url);
      } else alert(res.data.message);
    };
    fetch();
  }, [shopId]);

  useEffect(() => {
    const pathName = window.location.pathname;
    const part = pathName.split('/');
    setIsLine(`/${part[3]}`);

  }, []);

  return (
    <div className=' border-b-[1px] sticky top-[81px] w-full z-10 shadow-sm bg-white'>
      <Container>
        <div className='flex justify-between'>
          <div className='pt-2 flex gap-8 text-lg font-medium'>
            <Link
              to={`/shop/${shopId}/overview`}
              onClick={() => setIsLine('/overview')}
              className={isLine === '/overview' ? 'font-bold border-b-4 border-[#3b82f6] pb-2' : ''}
            >
              Tổng quan
            </Link>
            <Link
              to={`/shop/${shopId}/products`}
              onClick={() => setIsLine('/products')}
              className={isLine === '/products' ? 'font-bold border-b-4 border-[#3b82f6] pb-2' : ''}
            >
              Sản phẩm
            </Link>
            <Link
              key="3"
              to={`/shop/${shopId}/reviews`}
              onClick={() => setIsLine('/reviews')}
              className={isLine === '/reviews' ? ' font-bold border-b-4 border-[#3b82f6] pb-2' : ''}
            >
              Đánh giá
            </Link>
          </div>
          <div className='py-2'>
            <a href={linkWeb ? linkWeb : ""} target="_blank" rel="noopener noreferrer">
              <Button label="Ghé thăm trang web" color="blue" custom={"w-[300px]"} />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

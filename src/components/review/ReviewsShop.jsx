import Container from '../Container';
import Heading from '../Heading';
import ReviewFilter from './ReviewFilter';
import CommentCard from './CommentCard';
import {
  Box,
  CircularProgress,
  Pagination,
} from '@mui/material';
import CommentModal from './components/CommentModal';
import {
  useEffect,
  useState,
} from 'react';
import { shopAPIs } from '../../service';
import { useParams } from 'react-router-dom';

const ReviewsShop = () => {
  const { shopId } = useParams();

  const [filter, setFilter] = useState(
    [],
  ); // option filter
  const [comments, setComments] =
    useState([]); // list comment of shop
  const [isLoading, setIsLoading] =
    useState(false); // loading
  const [shop, setShop] =
    useState(null); // shop info

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] =
    useState(1); // total page
  const [dataFilter, setDataFilter] =
    useState([]); // data after filtering
  const [dataFinal, setDataFinal] =
    useState([]); // data final to show page

  const reloadList = () => {
    fetchReviews();
  };

  const handleFilter = (key) => {
    // clone filterValue
    const selectFilter = filter.map(
      (item) => {
        if (item.key === key) {
          return {
            ...item,
            isSelect: true,
          };
        }
        return {
          ...item,
          isSelect: false,
        };
      },
    );
    setFilter(selectFilter);
    let data = [];
    switch (key) {
      case 'all':
        data = comments;
        break;
      case '5star':
        data = comments.filter(
          (item) => item.rating === 5,
        );
        break;
      case '4star':
        data = comments.filter(
          (item) => item.rating === 4,
        );
        break;
      case '3star':
        data = comments.filter(
          (item) => item.rating === 3,
        );
        break;
      case '2star':
        data = comments.filter(
          (item) => item.rating === 2,
        );
        break;
      case '1star':
        data = comments.filter(
          (item) => item.rating === 1,
        );
        break;
      case 'file':
        data = comments.filter(
          (item) =>
            item.images.length > 0,
        );
        break;
      case 'comment':
        data = comments.filter(
          (item) =>
            item.reactions.length > 0,
        );
        break;
      default:
        break;
    }
    setDataFilter(data);
    setDataFinal(data.slice(0, 2));
    setPage(1);
    const countPage = Math.ceil(
      data.length / 2,
    );
    setTotalPage(countPage);
  };

  const handleOnChangePage = (
    event,
    value,
  ) => {
    setPage(value);
    setDataFinal(
      dataFilter.slice(
        (value - 1) * 2,
        value * 2,
      ),
    );
  };

  const fetchReviews = async () => {
    setIsLoading(true);
    try {
      const param = {
        storeId: shopId,
      };
      const res =
        await shopAPIs.getReviewsByStoreId(
          param,
        );
      if (res.data.EC === 200) {
        const shop = res.data.data;
        setShop({
          _id: shop._id,
          id: shop.id,
          name: shop.name,
          rating: shop.rating,
          images: shop.images,
          address: shop.address,
        });
        const listReviews =
          shop.comments;
        console.log(listReviews);
        setComments(listReviews);
        setDataFilter(listReviews);
        setDataFinal(
          listReviews.slice(0, 2),
        );
        const countPage = Math.ceil(
          listReviews.length / 2,
        );
        setTotalPage(countPage);
        const valueFilter = [
          {
            name: 'Tất cả',
            key: 'all',
            count: listReviews.length,
            isSelect: true, // true: all, false: isSelect
          },
          {
            name: '5 sao',
            key: '5star',
            count: listReviews.filter(
              (item) =>
                item.rating === 5,
            ).length,
            isSelect: false,
          },
          {
            name: '4 sao',
            key: '4star',
            count: listReviews.filter(
              (item) =>
                item.rating === 4,
            ).length,
            isSelect: false,
          },
          {
            name: '3 sao',
            key: '3star',
            count: listReviews.filter(
              (item) =>
                item.rating === 3,
            ).length,
            isSelect: false,
          },
          {
            name: '2 sao',
            key: '2star',
            count: listReviews.filter(
              (item) =>
                item.rating === 2,
            ).length,
            isSelect: false,
          },
          {
            name: '1 sao',
            key: '1star',
            count: listReviews.filter(
              (item) =>
                item.rating === 1,
            ).length,
            isSelect: false,
          },
          {
            name: 'Có hình ảnh',
            key: 'file',
            count: listReviews.filter(
              (item) =>
                item.images.length > 0,
            ).length,
            isSelect: false,
          },
          {
            name: 'Có bình luận',
            key: 'comment',
            count: listReviews.filter(
              (item) =>
                item.reactions.length >
                0,
            ).length,
            isSelect: false,
          },
        ];
        setFilter(valueFilter);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  useEffect(() => {
    console.log('shop: ', shop);
  }, [shop]);

  return (
    <div className="mb-4">
      <Container>
        {!isLoading ? (
          <div className="bg-white flex flex-col">
            <div className="my-5 flex item-center justify-between">
              <Heading title="Đánh giá cửa hàng" />
              <div>
                {shop && (
                  <CommentModal
                    shop={shop}
                    reloadList={
                      reloadList
                    }
                  />
                )}
              </div>
            </div>
            <ReviewFilter
              filter={filter}
              comments={comments}
              handleFilter={
                handleFilter
              }
              rating={shop?.rating || 0}
            />
            <div className=" mx-4 mt-8 flex flex-col gap-4">
              {dataFinal?.length > 0 &&
                dataFinal?.map(
                  (comment) => (
                    <CommentCard
                      key={comment.id}
                      comment={comment}
                      shopId={shopId}
                    />
                  ),
                )}
              {dataFinal?.length ===
                0 && (
                <div className="text-center text-slate-500 text-2xl font-semibold">
                  Chưa có đánh giá nào
                </div>
              )}
            </div>
            <div className="my-8 flex justify-center items-center">
              {totalPage > 0 && (
                <Pagination
                  page={page}
                  count={totalPage}
                  onChange={(
                    event,
                    value,
                  ) =>
                    handleOnChangePage(
                      event,
                      value,
                    )
                  }
                  color="secondary"
                />
              )}
            </div>
          </div>
        ) : (
          <Box
            sx={{
              display: 'flex',
              minHeight: '300px',
            }}
          >
            <CircularProgress
              sx={{
                margin: 'auto',
              }}
            />
          </Box>
        )}
      </Container>
    </div>
  );
};

export default ReviewsShop;

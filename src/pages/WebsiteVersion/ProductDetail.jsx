import React from "react";
import { FaFacebook, FaInstagram, FaShoppingCart } from 'react-icons/fa'; // Use FaShoppingCart for Shopee

function ProductDetail() {
  const shopDetail = {
    "_id": "670f8fbf7df5662dc92935d2",
    "name": "Cơm Rang Gà Sốt 30K - Mỹ Đình",
    "imageUrl": [
        "https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwbnm21ln84b82@resize_ss576x330"
    ],
    "email": "contact@crgasotmydinh.com",
    "phone": "0979123456",
    "minPrice": 30000,
    "maxPrice": 65000,
    "social": [
        {
            "name": "ShopeeFood",
            "link": "https://shopeefood.vn/ha-noi/com-rang-ga-sot-30k-my-dinh",
            "_id": "670f8fbf7df5662dc92935d3"
        }
    ],
    "address": [
        {
            "district": "Quận Nam Từ Liêm",
            "province": "Hà Nội",
            "specificAddress": "14 Ngõ 20 Mỹ Đình, P. Mỹ Đình 2, Nam Từ Liêm",
            "_id": "670f8fbf7df5662dc92935d4"
        }
    ],
    "menu": [
        {
            "name": "Cơm Rang Đùi Gà Sốt + 1 Pepsi",
            "type": "suất",
            "price": "63000",
            "currency": "đ",
            "_id": "670f8fbf7df5662dc92935d5"
        },
        {
            "name": "Cơm Rang Dưa Bò + 1 Pepsi",
            "type": "suất",
            "price": "63000",
            "currency": "đ",
            "_id": "670f8fbf7df5662dc92935d6"
        },
        {
            "name": "Cơm Rang Cải Bò + 1 Pepsi",
            "type": "suất",
            "price": "63000",
            "currency": "đ",
            "_id": "670f8fbf7df5662dc92935d7"
        },
        {
            "name": "Cơm Rang Dưa Bò",
            "type": "suất",
            "price": "35000",
            "currency": "đ",
            "_id": "670f8fbf7df5662dc92935d8"
        },
        {
            "name": "3 Cơm rang dưa bò + 3 Pepsi",
            "type": "suất",
            "price": "180000",
            "currency": "đ",
            "_id": "670f8fbf7df5662dc92935d9"
        }
    ],
    "reviews": {
        "reviewCount": 48,
        "reviewDetail": [
            {
                "name": "Nguyễn Phi Tuấn Anh",
                "email": "user1@example.com",
                "rating": 4,
                "comment": "Ngon lắm!",
                "_id": "670f8fbf7df5662dc92935db"
            },
            {
                "name": "Trần Văn B",
                "email": "user2@example.com",
                "rating": 3,
                "comment": "Bình thường.",
                "_id": "670f8fbf7df5662dc92935dc"
            },
            {
                "name": "Văn Minh Tuấn",
                "email": "vanminhtuan2003@gmail.com",
                "rating": 4,
                "comment": "Chuẩn vị!",
                "_id": "670f8fbf7df5662dc92935dd"
            }
        ],
        "_id": "670f8fbf7df5662dc92935da"
    },
    "rating": 3.9,
    "createdAt": "2024-10-16T10:04:47.889Z",
    "updatedAt": "2024-10-16T10:04:47.889Z",
    "__v": 0
  };
  function formatPrice(price) {
    // Chuyển đổi số thành chuỗi và thêm dấu '.' giữa các nhóm số
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        {/* Shop Image */}
        <div className="w-full md:w-1/2 px-4 mb-8">
          <img
            src={shopDetail.imageUrl[0]} 
            alt={shopDetail.name}
            className="w-full h-auto rounded-lg shadow-md mb-4"
          />
        </div>

        {/* Shop Details */}
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-3xl font-bold mb-2">{shopDetail.name}</h2>
          <div className="mb-4">
            <span className="text-2xl font-bold text-red-600">
              ₫{formatPrice(shopDetail.minPrice)} - ₫{formatPrice(shopDetail.maxPrice)}
            </span>
          </div>

          {/* Address Information */}
          <div className="mb-4">
            <h4 className="text-xl font-semibold">Địa chỉ:</h4>
            <p className="text-gray-600">
              {shopDetail.address[0].specificAddress}, {shopDetail.address[0].district}, {shopDetail.address[0].province}
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-4">
            <h4 className="text-xl font-semibold">Liên hệ:</h4>
            <p className="text-gray-600">Email: {shopDetail.email}</p>
            <p className="text-gray-600">SĐT: {shopDetail.phone}</p>
          </div>

          {/* Social Media Links */}
          <div className="mb-4">
            <h4 className="text-xl font-semibold">Mạng xã hội:</h4>
            <div className="flex gap-4">
              {shopDetail.social.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="text-indigo-500 hover:text-indigo-700"
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.name === "Facebook" && <FaFacebook className="w-6 h-6" />}
                  {social.name === "Instagram" && <FaInstagram className="w-6 h-6" />}
                  {social.name === "ShopeeFood" && <FaShoppingCart className="w-6 h-6" />}
                </a>
              ))}
            </div>
          </div>

          {/* Display shop rating */}
          <div className="flex items-center mb-4">
            {[...Array(Math.floor(shopDetail.rating))].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
            <span className="ml-2 text-gray-600">
              {shopDetail.rating} ({shopDetail.reviews.reviewCount} reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Flexbox for Menu and Reviews */}
      <div className="flex space-x-6">
        {/* Menu Section (Left) */}
        <div className="container mx-auto max-w-6xl p-4 mt-24">
  <h2 className="flex justify-center text-lg font-medium text-red-400">MENU</h2>
  <h3 className="flex justify-center text-4xl font-bold text-black my-4">Khám Phá Món Ăn</h3>
  <div className="md:columns-2 lg:columns-2 gap-6 p-4 sm:p-1 mt-2">
    {shopDetail.menu.map((item, index) => (
      <div key={index} className="animate-in zoom-in ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-red-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
        <h4 className="font-bold text-lg">{item.name}</h4>
        <p className="text-gray-700 font-semibold">Giá: ₫{formatPrice(item.price)}/{item.type}</p>
        
      </div>
    ))}
  </div>
</div>


<div className="container mx-auto max-w-6xl p-4 mt-24">
  <h2 className="flex justify-center text-lg font-medium text-red-400">PHẢN HỒI</h2>
  <h3 className="flex justify-center text-4xl font-bold text-black my-4">Khách Hàng Nói Gì?</h3>
  <div className="md:columns-2 lg:columns-3 gap-6 p-4 sm:p-1 mt-2">
    {shopDetail.reviews.reviewDetail.map((review, index) => (
      <div key={index} className="animate-in zoom-in ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-red-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
        <div className="flex flex-col break-inside-avoid-page z-0 relative">
          <div className="flex justify-between">
            <div className="flex space-x-6">
              <div className="flex space-x-4 flex-shrink-0 w-52">
                <div className="h-10 w-10 bg-indigo-500 text-white rounded-full flex items-center justify-center">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{review.name}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center mb-2">
            {[...Array(review.rating)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
          </div>
          <p className="text-gray-600">{review.comment}</p>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  );
}

export default ProductDetail;
 
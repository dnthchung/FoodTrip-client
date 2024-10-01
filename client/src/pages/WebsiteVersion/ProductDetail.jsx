import React from "react";
import { useLocation } from "react-router-dom";

function ProductDetail() {
  const products = [
    {
      name: "Gyro Sandwhic",
      price: "$15.00",
      rating: "4.9",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e323753ed4ee638813c8c9354f0b3e3324a1e07daa7495d880397f3528c3925a?apiKey=ff22ebd9af3b40868bf46ef63076972a&",
    },
    {
      name: "Enchilade",
      price: "$25.50",
      rating: "5.0",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/70aac73f7020ca446d118fef0eb7a642ba741bd59e5f93a027e7d6366934e1a4?apiKey=ff22ebd9af3b40868bf46ef63076972a&",
    },
    {
      name: "Green Beans",
      price: "$12.00",
      rating: "4.9",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f192e246195049212e868c2a0bf82685e85352ae0f90c75603af7316560099e?apiKey=ff22ebd9af3b40868bf46ef63076972a&",
    },
    {
      name: "Pizza",
      price: "$18.50",
      rating: "5.0",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ddc179f653dffa6fea80526b012a661d78c43a6b06cc6df9010eb70de48ea220?apiKey=ff22ebd9af3b40868bf46ef63076972a&",
    },
    {
      name: "Chicken Pot Pie",
      price: "$25.00",
      rating: "4.9",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/250e28ab4c601083409b7989c2a29ee9cf7a881777bb641b17e083ebfaf10db8?apiKey=ff22ebd9af3b40868bf46ef63076972a&",
    },
    {
      name: "Green Salad",
      price: "$15.00",
      rating: "4.9",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/31fcfb115378ac66b4decc3414ef8b861d07be2b7c426baeba33ac91d899794d?apiKey=ff22ebd9af3b40868bf46ef63076972a&",
    },
  ];
  const { state } = useLocation();
  const pDetail = products.find((p) => p.name == state.name);
  return (
    <>
      <div class="bg-gray-100">
        <div class="container mx-auto px-4 py-8">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full md:w-1/2 px-4 mb-8">
              <img src={pDetail.image} alt="Product" class="w-full h-auto rounded-lg shadow-md mb-4" id="mainImage" />
              {/* <div class="flex gap-4 py-4 justify-center overflow-x-auto">
                <img
                  src="https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Thumbnail 1"
                  class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onclick="changeImage(this.src)"
                />
                <img
                  src="https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Thumbnail 2"
                  class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onclick="changeImage(this.src)"
                />
                <img
                  src="https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Thumbnail 3"
                  class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onclick="changeImage(this.src)"
                />
                <img
                  src="https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Thumbnail 4"
                  class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onclick="changeImage(this.src)"
                />
              </div> */}
            </div>

            <div class="w-full md:w-1/2 px-4">
              <h2 class="text-3xl font-bold mb-2">{pDetail.name}</h2>
              <p class="text-gray-600 mb-4">SKU: WH1000XM4</p>
              <div class="mb-4">
                <span class="text-2xl font-bold mr-2">{pDetail.price}</span>
                {/* <span class="text-gray-500 line-through">$399.99</span> */}
              </div>
              <div class="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-yellow-500">
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-yellow-500">
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-yellow-500">
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-yellow-500">
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-yellow-500">
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="ml-2 text-gray-600">4.5 (120 reviews)</span>
              </div>
              <p class="text-gray-700 mb-6">
                Experience premium sound quality and industry-leading noise cancellation with these wireless headphones. Perfect for music lovers and frequent travelers.
              </p>

              <div class="flex space-x-4 mb-6">
                <button class="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  Add to Cart
                </button>
                <button class="bg-gray-200 flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                  Wishlist
                </button>
              </div>

              <div>
                <h3 class="text-lg font-semibold mb-2">Key Features:</h3>
                <ul class="list-disc list-inside text-gray-700">
                  <li>Industry-leading noise cancellation</li>
                  <li>30-hour battery life</li>
                  <li>Touch sensor controls</li>
                  <li>Speak-to-chat technology</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <script>
    function changeImage(src) {
            document.getElementById('mainImage').src = src;
        }
  </script> */}
      </div>
    </>
  );
}

export default ProductDetail;
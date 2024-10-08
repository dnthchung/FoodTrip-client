const posts = [
  {
    id: 1,
    title: "Cơm Tấm Sài Gòn",
    descriptions: "Những hạt gạo không hoàn hảo này đã bị loại bỏ theo truyền thống sau quá trình xay xát nhưng đã được nâng lên thành một nét văn hóa ẩm thực đường phố...",
    pic: "https://static.vinwonders.com/production/com-tam-sai-gon-thumb.jpg",
    publishDate: "Sep 10, 2025",
    categoryId: "SaiGon",
    categoryName: "Ẩm thực Sài Gòn",
    paragraphs: [
      "Những hạt gạo không hoàn hảo này đã bị loại bỏ theo truyền thống sau quá trình xay xát nhưng đã được nâng lên thành một nét văn hóa ẩm thực đường phố của người Sài Gòn từ xưa đến nay.",
      "Cơm Tấm - đó là những hạt cơm bị hỏng còn sót lại từ quy trình sấy khô và xay xát truyền thống . Nó trông rất giống với gạo bình thường, chỉ có hạt được chia thành các miếng nhỏ hơn, do đó tên.",
      "Về cơ bản, thật khó để bán do không hoàn hảo của nó. Các loại ngũ cốc thường được dùng làm bột gạo hoặc thức ăn cho gia súc, hoặc do người nông dân ăn; Tuy nhiên, người Sài Gòn đã làm một hình thức nghệ thuật của gạo này và sử dụng nó như là một nền tảng cho tất cả các loại kết hợp.",
      "Gạo tự nó có vị như gạo bình thường, và có một cấu trúc tương tự, nó chỉ nhỏ hơn - hương vị phụ thuộc vào cách bạn phục vụ.",
      "Một đĩa Cơm Tấm có rất nhiều thành phần , chẳng hạn như sườn nướng (thịt heo nướng), thịt heo (thịt heo xắt lát), chả trứng (thịt lợn hấp trứng), chả cá   và trứng (trứng chiên). Nó thường được trang trí với một số hành tây thái nhỏ, thái lát hoặc một số gia vị đậm đặc điển của món ăn Việt Nam: hành lá và chanh chẳng hạn.",
      "Ở bên cạnh bạn có thể có rau muối hoặc dưa leo và cà chua thái lát. Nước sốt, nước chanh và ớt có thể được phục vụ.",
      "Thực phẩm đường phố ở Sài Gòn là thức ăn phục vụ nhanh và Cơm Tấm là điển hình. Mặc dù mỗi thành phần trên đĩa có thể mất đến 2-3 giờ để chuẩn bị, khi thứ tự được lên, phải mất không quá một phút để đến bàn của bạn.",
      "Một tấm có thể có giá từ 20.000 VND đến 60.000 VND tùy thuộc vào việc bạn mua nó từ một quán lề đường hay quán ăn sang trọng.",
      "Mỗi khu phố ở thành phố Hồ Chí Minh có một gian hàng, dễ dàng nhận diện được bằng chữ “Cơm Tấm”. Phục vụ vào buổi sáng, trưa và tối. Nếu bạn tìm thấy nó bên ngoài thành phố, nó sẽ được gọi là Cơm Tấm Sài Gòn, vì nó được coi là một món ăn thành phố Hồ Chí Minh.",
      "Vâng, nếu bạn sống ở thành phố Hồ Chí Minh. Nhưng thực tế, gạo tấm thường không xuất khẩu.",
      "Vì thành phố Hồ Chí Minh là trung tâm kinh tế của Việt Nam , người Sài Gòn thường xuyên đi lại và cần một cái gì đó nhanh chóng và tràn ngập trong suốt cả ngày - foodtrip.com cho rằng cơm tấm phản ánh lối sống đó.",
    ],
    headings: [
      "",
      "Món ăn là gì?",
      "Nó đến từ đâu?",
      "Vị nó như thế nào?",
      "Nó được phục vụ như thế nào?",
      "Ăn kèm thêm?",
      "Tại sao bạn nên thử nó?",
      "Giá cả?",
      "Bạn có thể mua nó ở đâu?",
      "Bạn có thể làm nó ở nhà không?",
      "Món ăn này nói gì về Thành phố Hồ Chí Minh?",
    ],
    images: ["https://static.vinwonders.com/production/com-tam-sai-gon-thumb.jpg"],
  },
  {
    id: 2,
    title: "Thức ăn đường phố Việt Nam",
    descriptions: "Những hạt gạo không hoàn hảo này đã bị loại bỏ theo truyền thống sau quá trình xay xát nhưng đã được nâng lên thành một nét văn hóa ẩm thực đường phố...",
    pic: "https://danviet.mediacdn.vn/296231569849192448/2022/2/6/am-thuc-sai-gon-164415516861455273850.jpg",
    publishDate: "Sep 10, 2025",
    categoryId: "Explore",
    categoryName: "Khám phá",
    paragraphs: [
      "Bạn đang đến Việt Nam - bạn đã đọc về thức ăn đường phố Việt Nam, bạn đã nghe nói về thức ăn đường phố, nhưng bạn sẽ thử nó? Bạn có thể được trên con đường của bạn ở đây, nói với chính mình: “Tất nhiên tôi sẽ thử nó!”. Nhưng thành thật mà nói, khi đến nơi đầu tiên, bạn có thể trở nên cảnh giác với những gì bạn sẽ  thực sự cố gắng. Không có khả năng là một trình đơn bằng tiếng Anh và không chắc hơn rằng các nhân viên sẽ nói tiếng Anh tuyệt vời. Chúng tôi đã đưa ra 7 lý do để ăn thức ăn đường phố tại Việt Nam để giúp giảm bớt lo lắng của bạn!",
      "Hầu hết các dãy thức ăn đường phố từ $ 1- $ 3 (USD) cho mỗi món ăn. Nếu cảm thấy chưa no, tại sao không  gọi thêm bát nữa? cơm tấm Sài Gòn chẳng hạn? Thức ăn đường phố Việt Nam là một cách tốt để chi tiêu (hoặc tiết kiệm) tiền của bạn. Bánh Bao, như bên dưới, dao động từ mỗi 5.000-10.000 đồng. Nó là một bữa ăn nhẹ buổi chiều tuyệt vời.",
      "Quầy hàng thức ăn đường phố đã làm chủ được nghệ thuật cân bằng hương vị. Hầu hết các quầy hàng nấu một món ăn, và vì vậy món ăn của họ được hoàn thiện tốt nhất. Nếu bạn bắt chuyện với một chủ  gian hàng thức ăn đường phố địa phương, bạn sẽ thường nghe rằng họ đã học được kỹ năng ẩm thực của họ từ cha mẹ, và cha mẹ học được từ ông bà họ (và như vậy!). Thế hệ tinh chỉnh & hoàn thiện công thức nấu ăn cổ điển đã dẫn đến nhiều quầy hàng thức ăn đường phố là một số trong những nơi tốt nhất để ăn trong bất cứ thị trấn bạn có thể truy cập.",
      "Nó có thể có vẻ đáng sợ,đi bộ lên đến một gian hàng thức ăn đường phố không biết bất kỳ tiếng Việt và hiểu biết rằng họ sẽ không có bất kỳ loại menu.Tuynhiên, nó khá thú vị để đặt hàng một cái gì đó ngay cả khi bạn có thể không biết nó là gì. Bây giờ, bạn có thể tự hỏi - những chén vàng nhỏ là gì? Những điều này, bạn tôi, là một món ăn tuyệt vời gọi là Banh Can. ",
      "Lấy một chiếc ghế màu đỏ nhỏ xíu và tham gia vào bầu không khí nhộn nhịp của thức ăn đường phố. Nếu bạn đang nhìn xuống một loạt các quầy hàng và không biết làm thế nào để chọn một, hãy đến gian hàng có nhiều người nhất. Vì đây là những “nhà hàng thức ăn nhanh” của Việt Nam, bạn sẽ không phải chờ đợi lâu cho bữa ăn ngon miệng của bạn.",
      "Những người chạy các quầy hàng thức ăn đường phố thường lấy gian hàng của họ làm kế mưu sinh chính, và bỏ ra hàng giờ tạo ra các thành phần khác nhau của các món ăn. Họ tự hào về thực phẩm của họ, như bạn có thể nhìn thấy từ Madam Khánh - nổi tiếng Banh Mi Nữ hoàng của Hội An.",
      "Trong hầu hết các nước, khi bạn nghĩ về thức ăn nhanh, từ 'tươi' là không chính xác từ đầu tiên đến tâm. Phiên bản của thức ăn nhanh của Việt Nam là siêu tươi và lành mạnh. Đầy đủ các loại rau quả và thịt được mua tươi sáng hôm đó tại các chợ địa phương.",
      "Khi khám phá Việt Nam, bạn nên tận hưởng những nét văn hóa địa phương! Người dân ở đây rất thân thiện và tình yêu để chia sẻ văn hóa của họ, và thức ăn đường phố là một nơi tuyệt vời để trải nghiệm nó.",
    ],
    headings: [
      "",
      "1. Đó là giá vừa túi tiền.",
      "2. Đó là hoàn toàn ngon.",
      "3. Đó là mạo hiểm.",
      "4. Đó là không gian.",
      "5. Đó là xác thực.",
      "6. Đó là vị tươi.",
      '7. Đó là cách "Nhập gia tùy tục".',
    ],
    images: [
      "",
      "https://lyhoangdong.weebly.com/uploads/1/0/9/6/109671651/banh-bao_orig.jpg",
      "https://lyhoangdong.weebly.com/uploads/1/0/9/6/109671651/miquang2-02_orig.jpg",
      "https://lyhoangdong.weebly.com/uploads/1/0/9/6/109671651/banh-can_orig.jpg",
      "https://lyhoangdong.weebly.com/uploads/1/0/9/6/109671651/mon-ngon-nen-thu-khi-du-lich-nha-trang-167045_orig.jpg",
      "https://lyhoangdong.weebly.com/uploads/1/0/9/6/109671651/banh-mi-queen_orig.jpg",
      "https://lyhoangdong.weebly.com/uploads/1/0/9/6/109671651/img-4879-copy_orig.jpg",
    ],
  },
  {
    id: 3,
    title: "Bánh mì thịt nướng Sài Gòn",
    descriptions: "Những hạt gạo không hoàn hảo này đã bị loại bỏ theo truyền thống sau quá trình xay xát nhưng đã được nâng lên thành một nét văn hóa ẩm thực đường phố...",
    pic: "https://cdn.tgdd.vn/2021/05/CookRecipe/Avatar/banh-mi-thit-bo-nuong-thumbnail-1.jpg",
    publishDate: "Sep 10, 2025",
    categoryId: "SaiGon",
    categoryName: "Ẩm thực Sài Gòn",
    headings: ["", "Bánh mì Bảy Hổ", "", "", "Bánh mì phá lấu Tâm Ký", ""],
    images: [
      "",
      "https://lyhoangdong.weebly.com/uploads/1/0/9/6/109671651/quan-banh-mi-thit-nuong_orig.jpg",
      "",
      "",
      "https://lyhoangdong.weebly.com/uploads/1/0/9/6/109671651/banh-mi-nhan-thit_orig.jpg",
      "",
    ],
    paragraphs: [
      "Từ lâu, bánh mì đã trở thành món ăn quen thuộc đối với mọi người, là một trong những món đặc trưng của ẩm thực đường phố Sài Gòn. Không chỉ đơn điệu với một món duy nhất, bánh mì được biến hóa hoàn hảo và đa dạng trong vô vàn hương vị từ bánh mì pate, bánh mì xíu mại, đến bánh mì chả cá hay bánh mì thịt nướng. Khám phá những quán bánh mì ngon ở Sài Gòn sẽ “đốn tim” bất thực khách khó tính nào bởi sự kết hợp giòn rụm của bánh mì với các loại nhân mang hương vị đặc trưng riêng của từng quán.",
      "- Địa chỉ: 19 Huỳnh Khương Ninh, Phường Đa Kao, Quận 1, TP HCM",
      "Với tuổi đời gần 80 năm, qua bao nhiêu thăng trầm nhưng quán bánh mì này vẫn không hề giảm đi số lượng người mua. Chất lượng của bánh mì càng ngày càng được nâng cao, biến tấu phù hợp với thị hiếu người dùng. Nhân bánh tại đây rất đa dạng với thịt luộc, chả lụa, pate… với công thức gia truyền, nhất là pate – vừa hấp vừa nướng nên hương vị đặc biệt ngậy béo, hòa quyện cùng với nhân bánh. Các nguyên liệu này đều được chuẩn bị sát giờ bán đảm bảo cho món bánh mì ngon, vừa ra lò đến tay khách nóng hổi. Giá bán bánh mì ở đây chỉ khoảng 12.000 đồng nhưng được chăm chút đến từng chi tiết nhỏ vì vậy quán rất đông khách và tấp nập người xếp hàng mua bánh.",
      "",
      "Địa chỉ: 823 Nguyễn Trãi, Phường 14, Quận 5, TP HCM",
      "Là dân đam mê bánh mì, bạn không thể bỏ qua món bánh mì phá lấu cực hấp dẫn này trên đường Nguyễn Trãi. Bánh mì tại đây siêu giòn, phá lấu được chế biến sạch và kỹ, tẩm ướp gia vị vừa miệng và cực ngon. Sự hấp dẫn của món ăn này từ hậu vị ngọt dịu của nước sốt đi kèm với bánh mì, cái dai dai, sừn sựt của tai heo, một chút béo của những miếng bao tử, phèo… Mỗi ổ bánh mì phá lâu chỉ có giá từ 15 đến 20.000 đồng.",
    ],
  },
  {
    id: 4,
    title: "Phở Bò",
    descriptions: "Những hạt gạo không hoàn hảo này đã bị loại bỏ theo truyền thống sau quá trình xay xát nhưng đã được nâng lên thành một nét văn hóa ẩm thực đường phố...",
    pic: "https://mia.vn/media/uploads/blog-du-lich/top-19-quan-pho-ha-noi-ngon-nuc-tieng-an-la-ghien-phan-1--1639124992.jpg",
    publishDate: "Sep 10, 2025",
    categoryId: "HaNoi",
    categoryName: "Ẩm thực Hà Nội",
  },
  {
    id: 5,
    title: "Bún chả",
    descriptions: "Những hạt gạo không hoàn hảo này đã bị loại bỏ theo truyền thống sau quá trình xay xát nhưng đã được nâng lên thành một nét văn hóa ẩm thực đường phố...",
    pic: "https://cdn.buffetposeidon.com/app/media/uploaded-files/090724-bun-cha-ha-noi-buffet-poseidon-1.jpeg",
    publishDate: "Sep 10, 2025",
    categoryId: "HaNoi",
    categoryName: "Ẩm thực Hà Nội",
  },
  {
    id: 6,
    title: "Phố ẩm thực người Hoa",
    descriptions: "Những hạt gạo không hoàn hảo này đã bị loại bỏ theo truyền thống sau quá trình xay xát nhưng đã được nâng lên thành một nét văn hóa ẩm thực đường phố...",
    pic: "https://media.cooky.vn/images/blog-2016/chinatown-sai-gon-thien-duong-am-thuc-nguoi-hoa-giua-long-thanh-pho%2015.jpg",
    publishDate: "Sep 10, 2025",
    categoryId: "Explore",
    categoryName: "Khám phá",
  },
];

export default posts;

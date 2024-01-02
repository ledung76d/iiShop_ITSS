import Container from '../Container';
import Heading from '../Heading';
import instance from '../../utils/backendApi';
import {
  useEffect,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';
import {
  Rating,
  Chip,
} from '@mui/material';
import ImageGallery from './ImageGallery';
import parser from 'html-react-parser';

const OverviewShop = () => {
  const { shopId } = useParams();
  let test = [`<div><div class="tht_custom_page_cskh"><div id="cskh_top_page"><div class="cskh_nav"><p style="text-align: center;"></p> <h1 style="text-align: center;"><span style="font-size: x-large;"><strong>Giới thiệu về cửa hàng</strong></span></h1></div></div></div> <div class="tht_custom_page_cskh"><p><span style="font-size: medium;">Là công ty hoạt động trong lĩnh vực bán lẻ và sửa chữa các sản phẩm công nghệ và lĩnh vực truyền thông giải trí bao gồm 3 công ty thành viên CellphoneS - Điện thoại vui - Smedia và chuỗi trung tâm bảo hành Apple AASP với quy mô hơn 2.000 nhân viên:</span></p> <h2><strong><span style="font-size: medium;">CellphoneS</span></strong></h2> <p><span style="font-size: medium;">Sau hơn 10 năm vận hành và phát triển không ngừng, hệ thống bán lẻ CellphoneS liên tục mở rộng với chuỗi hơn 100 cửa hàng trên toàn quốc và tự hào là 1 trong 5 hệ thống lớn nhất tại Việt Nam trong lĩnh vực công nghệ.</span></p> 
   <h2><span style="font-size: medium;"><a href="https://dienthoaivui.com.vn/" rel="nofollow" target="_blank"><strong><span style="font-size: medium;">Điện thoại vui</span></strong></a></span></h2> <p><span style="font-size: medium;">Tháng 5/2017, Điện Thoại Vui chính thức thành lập với tiền thân là trung tâm bảo hành của CellphoneS. Đến nay, Điện Thoại Vui đã có hơn 21 cửa hàng được đánh giá là một trong những là chuỗi cửa hàng sửa chữa ĐTDĐ số 1 tại Hồ Chí Minh và Hà Nội, là điểm đến uy tín cung cấp các dịch vụ sửa chữa chất lượng dành cho khách hàng.</span></p> <p style="text-align: center;"><span style="font-size: medium;"><img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:850:0/q:80/plain/https://cellphones.com.vn/media/wysiwyg/photo_2021-12-28_18.22.26.jpeg" width="850" alt="Cửa hàng Điện Thoại Vui" loading="lazy"></span></p> <h2 style="text-align: left;"><a href="https://schannel.vn/" rel="nofollow" target="_blank" style="font-size: 1.17em;"><strong><span style="font-size: medium;">Schannel Network</span></strong></a></h2> <p><span style="font-size: medium;">Được xem là 1 trong những Network về YouTube hàng đầu Việt Nam điều hành hơn 18 kênh YouTube chất lượng.</span></p> <p><span style="font-size: medium;">Hiện nay, Schannel Network đã có tổng gần 10 triệu lượt Subscribers, hơn 250 triệu lượt views/tháng và gần 100 nhân sự với 10 năm hoạt động trong lĩnh vực giải trí truyền thông.</span></p> <p style="text-align: center;"><img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:80/plain/https://cellphones.com.vn/media/wysiwyg/cover-p0wrfk6z9h9gj2mzmxldovhtcsa62y19miw3i1k2mq_1.png" loading="lazy" title="Schannel Network"></p> <h2><a href="https://dienthoaivui.com.vn/asp/" rel="nofollow" target="_blank"><strong><span style="font-size: medium;">Trung tâm bảo hành Apple AASP</span></strong></a></h2> <p><span style="font-size: medium;">Tháng 11/2021, Điện Thoại Vui chính thức trở thành trung tâm bảo hành uỷ quyền của Apple và là trung tâm bảo hành (APPLE Authorised Service Provider AASP) đầu tiên tại Hà Nội. Đây là trung tâm bảo hành uỷ quyền toàn bộ các sản phẩm được bán chính hãng tại Việt Nam của hãng Apple như: iPhone, iPad, Mac, tai nghe,...</span></p> <p><span style="font-size: medium;"><img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:80/plain/https://cellphones.com.vn/media/wysiwyg/download_6__1.png" loading="lazy" title="AASP" style="display:block;margin-left:auto;margin-right:auto;"></span></p> <p style="text-align: left;"><strong><span style="font-size: medium;">Tầm nhìn:</span></strong></p> <p></p> <ul><li style="text-align: left;"><span style="font-size: medium;">Xây dựng một doanh nghiệp vững mạnh về tài chính và vững chãi về đời sống tinh thần. </span></li> <li><span style="font-size: medium;">Doanh nghiệp hạnh phúc và phụng sự, góp phần xây dựng xã hội phồn vinh.</span></li> <li><span style="font-size: medium;">Phủ sóng tất cả các tỉnh/ thành phố lớn tại Việt Nam cung cấp các sản phẩm giá tốt, mang lại sự an tâm, tin tưởng và các trải nghiệm hài lòng cho khách hàng.</span></li></ul> <p><strong><span style="font-size: medium;">Cam kết của công ty</span></strong></p> <ul><li><span style="font-size: medium;">Đem đến cho khách hàng các sản phẩm giá tốt, mang lại sự an tâm, tin tưởng.</span></li> <li><span style="font-size: medium;">Đem đến cho nhân viên một môi trường làm việc thân thiện, có nhiều cơ hội phát triển.</span></li> <li><span style="font-size: medium;">Đem đến cho quản lý một sân chơi công bằng để thể hiện, đảm bảo cuộc sống sung túc.</span></li> <li><span style="font-size: medium;">Đem đến cho mọi đối tác sự hợp tác chặt chẽ, tôn trọng lẫn nhau &amp; đôi bên cùng phát triển.</span></li></ul> <p><strong><span style="font-size: medium;">Mục tiêu hướng tới</span></strong></p> <ul><li><span style="font-size: medium;">Phát triển cá nhân: Tạo ra môi trường bình đẳng cho các thành viên phát huy năng lực cá nhân &amp; có một đời sống đầy đủ, sung túc cả về vật chất lẫn đời sống tinh thần.</span></li> <li><span style="font-size: medium;">Môi trường làm việc: Xây dựng môi trường làm việc đoàn kết, thương yêu nhau trên giá trị cốt lõi của tình huynh đệ.</span></li> <li><span style="font-size: medium;">Đóng góp xã hội: Tạo ra hàng ngàn việc làm, đóng thuế đầy đủ. Tích cực tham gia các hoạt động thiện nguyện, cứu trợ các hoàn cảnh khó khăn trong xã hội.</span><em style="font-size: medium;"><span class="c0">.</span></em></li></ul> <p class="c6"><span class="c9" style="font-size: medium;"></span><span style="font-size: medium;">Liên hệ để được tư vấn thêm vui lòng liên hệ ngay tổng đài:&nbsp;<span class="c1"><strong><a href="tel:18002097">1800.2097</a></strong></span><em><span class="c9">hoặc email : cskh@cellphones.com.vn</span></em></span></p></div> <div class="tht_custom_page_cskh"><p><span style="font-size: medium;"></span></p></div></div>`,
    `<div id="content" style="width:800px; margin:auto;">
<h1 style="font-size:30px; line-height:30px; margin-bottom:10px;">Giới thiệu</h1>
<h1 style="text-align: justify;"><strong><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">GIỚI THIỆU CHUNG</span></strong></h1>
<p style="text-align: justify;"><sup><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">Laptop88 là một trong những đơn vị tiên phong tại Hà Nội hoạt động trong lĩnh vực kinh doanh các dòng sản phẩm laptop. Thành lập từ năm 2013 đến nay, Laptop88 đã tạo dựng được chỗ đứng vững chắc trên thị trường và trở thành cái tên quen thuộc đối với khách hàng.</span></sup></p>
<p style="text-align: justify;"><sup><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">Sau 7 năm thành lập, Laptop88 luôn nỗ lực hết mình để đem đến dịch vụ và giải pháp công nghệ chuyên nghiệp, với tâm niệm mỗi khách hàng khi tìm kiếm đến chúng tôi không chỉ trải nghiệm dịch vụ mua bán thông thường mà sẽ cảm nhận thấy sự khác biệt - tin cậy, an tâm đến từ chất lượng sản phẩm, chế độ hậu mãi. </span></sup></p>
<p style="text-align: justify;"><sup><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">Laptop88 cam kết các sản phẩm luôn đảm bảo chất lượng cao và nguồn gốc rõ ràng, giá cạnh tranh trên thị trường, nhiều sự lựa chọn, nhiều ưu đãi hấp dẫn, bảo hành uy tín với chế độ hậu mãi dài lâu.</span></sup></p>
<p style="text-align: justify;"><sup><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">✅ Laptop cũ chất lượng - Bảo hành hậu mãi DÀI LÂU</span></sup></p>
<p style="text-align: justify;"><sup><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">✅ Laptop mới 100% chính hãng - GIÁ TỐT NHẤT THỊ TRƯỜNG</span></sup></p>
<p style="text-align: justify;"><sup><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif;">Quy tụ&nbsp;đội ngũ nhân viên trẻ tuổi, có chuyên môn, nhiệt huyết, tận tụy với khách hàng, khi tìm đến Laptop88 các bạn sẽ&nbsp;cảm thấy hài lòng khi tiếp xúc trực tiếp tại cửa hàng hoặc qua điện thoại, nhân viên tư vấn của chúng tôi sẽ hướng dẫn và cung cấp cho khách hàng những thông tin hữu ích nhất với sự nhiệt thành và thân thiện. Đi theo&nbsp;phương châm “Kiến tạo chất lượng - Kết nối sẻ chia”, chúng tôi luôn lắng nghe và quan tâm tới nhu cầu của khách hàng, đồng thời không ngừng nâng cao chất lượng dịch vụ mỗi ngày.</span></sup></p>
<p style="text-align: justify;"><em><sup><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">Xin chân thành cảm ơn quý khách đã ủng hộ Laptop88. Sự hài lòng của quý khách chính là niềm vui và tạo động lực giúp chúng tôi không ngừng hoàn thiện và phát triển dịch vụ hơn nữa!</span></sup></em></p>
</div>`,
    `<section class="f-s2">
<div class="f-wrap">
<div class="f-row clearfix">
<div class="f-col1 wow fadeInUp">
<h2 class="f-htit">Giới thiệu chung</h2>
<p>Năm 1988, 13 nhà khoa học trẻ thành lập Công ty FPT với mong muốn xây dựng <strong><i>“một tổ chức kiểu mới, giàu mạnh bằng nỗ lực lao động sáng tạo trong khoa học kỹ thuật và công nghệ, làm khách hàng hài lòng, góp phần hưng thịnh quốc gia, đem lại cho mỗi thành viên của mình điều kiện phát triển đầy đủ nhất về tài năng và một cuộc sống đầy đủ về vật chất, phong phú về tinh thần.”</i></strong></p><br> <p>Không ngừng đổi mới, liên tục sáng tạo và luôn tiên phong mang lại cho khách hàng các sản phẩm/ giải pháp/ dịch vụ công nghệ tối ưu nhất đã giúp FPT phát triển mạnh mẽ trong những năm qua. FPT trở thành công ty công nghệ lớn nhất trong khu vực kinh tế tư nhân của Việt Nam với hơn <strong>28.000</strong> cán bộ nhân viên, trong đó có <strong>17.628</strong> nhân sự khối Công nghệ. Đồng thời, FPT cũng là doanh nghiệp dẫn đầu trong các lĩnh vực: Xuất khẩu phần mềm; Tích hợp hệ thống; Phát triển phần mềm; Dịch vụ CNTT. Hầu hết các hệ thống thông tin lớn trong các cơ quan nhà nước và các ngành kinh tế trọng điểm của Việt Nam đều do FPT xây dựng và phát triển.</p><br>
<p>FPT sở hữu hạ tầng viễn thông phủ khắp 59/63 tỉnh thành tại Việt Nam và không ngừng mở rộng hoạt động trên thị trường toàn cầu với 46 văn phòng tại 22 quốc gia và vùng lãnh thổ bên ngoài Việt Nam.</p>
<p>Trong suốt quá trình hoạt động, FPT luôn nỗ lực với mục tiêu cao nhất là mang lại sự hài lòng cho khách hàng thông qua những dịch vụ, sản phẩm và giải pháp công nghệ tối ưu nhất. Đồng thời, FPT không ngừng nghiên cứu và tiên phong trong các xu hướng công nghệ mới góp phần khẳng định vị thế của Việt Nam trong cuộc cách mạng công nghiệp lần thứ 4 - Cuộc cách mạng số. FPT sẽ tiên phong cung cấp dịch vụ chuyển đổi số toàn diện cho các tổ chức, doanh nghiệp trên quy mô toàn cầu.</p>
</div>
<div class="f-col2 wow fadeInUp">
<p class="f-dkimg"><img src="/gioi-thieu/Content/images/b1-dk.png?v=323" alt=""></p>
<p class="f-ipimg f-ipc2"><img src="/gioi-thieu/Content/images/b1-dk.png?v=323" alt=""></p>
<p class="f-mbimg f-ipc2"><img src="/gioi-thieu/Content/images/b1-dk.png?v=323" alt=""></p>
</div>
</div>
</div>
</section>`,
    `<div id="main_container" class="row">
<div class="content_detail">
<div class="wapper-content-page">
<h1 class="content_title">
<span>Về Trungtran</span>
</h1>


<div class="summary"></div>
<div class="description">
<p><strong>1. Lịch sử hình thành</strong></p>
<p>Hệ Thống bán lẻ máy tính toàn quốc Trung Trần&nbsp;là một trong những điểm đến tin cậy của người tiêu dùng thông thái bắt nguồn từ diễn đàn mua bán www.vozforums.com – diễn đàn công nghệ lớn nhất Việt Nam. Trung Trần&nbsp;là thương hiệu đã được bảo hộ bởi Công Ty Cổ Phần Thương Mại Dịch Vụ Trung Trần.<br>
Lick topic bán Thinkpad, HP Elitebook, Dell Precision, Apple:&nbsp;<strong><a href="http://vozforums.com/showthread.php?t=625984">http://vozforums.com/showthread.php?t=625984</a></strong></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; – Được sự ủng hộ của sân chơi công nghệ tinh tế nhất lên đến gần 500 trang ( gần&nbsp;5000 lời bình luận) và gần 1,4&nbsp;triệu lượt views.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; – Được cộng đồng vozforums.com đánh giá cao về bán hàng uy tín, tin cậy, hỗ trợ kĩ thuật nhiệt tình.</p>
<p>Bắt nguồn từ một topic bán hàng của thetrungbk, người dùng biết đến chúng tôi với kim chỉ nam:</p>
<p>“Luôn song hành và đứng về phía khách hàng”</p>
<p>Với tinh thần bán hàng trung thực, hài hước, lấy 4 đối tượng sản phẩm, khách hàng, chất lượng dịch vụ, nhân sự&nbsp; làm trọng tâm, chúng tôi cực kì chú trọng đến xây dựng quy trình cung cấp dịch vụ chuẩn, không ngừng nâng cấp để:</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; – Luôn nhập được hàng tốt với giá đầu vào tốt, các sản phẩm được kiểm tra kĩ càng bởi đội ngũ kiểm tra chất lượng chuẩn trước khi bán ra.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; – Luôn làm hài lòng khách hàng về giá bán, thời gian phục vụ nhanh chóng, và giải quyết thỏa đáng các vấn đề trong bảo hành.</p>
<p>Sau 5&nbsp;năm&nbsp;hoạt động trungtran.vn đã trở thành điểm đến quen thuộc của người yêu công nghệ Hà Nội và ba miền toàn quốc, được biết đến như một điểm sáng trong cộng động yêu công nghệ Việt Nam.</p>
<p>Dưới đây là các hạng mục sản phẩm mà hệ thống trungtran.vn&nbsp;cung cấp:</p>
<p>– Các sản phẩm của Apple: iPhone, iPad USA</p>
<p>– Các sản phẩm Thinkpad: T, X , W Series USA</p>
<p>– Các sản phẩm HP dòng bussiness USA bền bỉ: HP Elitebook, HP Probook.</p>
<p>– Các sản phẩm Dell dòng bussiness USA bền bỉ: Dell Latitude, Dell Precision.</p>
<p>&nbsp;</p>
<p><strong>2. Tầm nhìn – sứ mệnh</strong></p>
<p>Sứ mệnh:&nbsp;Chúng tôi lấy khách hàng làm trung tâm, lấy tổ chức chức chuyên nghiệp làm sức mạnh cạnh tranh, không ngừng nỗ lực cung cấp những sản phẩm, dịch vụ giá trị mới, chất lượng cao với giá hợp lý để đóng góp vào mục tiêu nâng cao chất lượng cuộc sống thông tin.</p>
<p>Tầm nhìn:&nbsp;Trở thành một công ty hàng đầu cung cấp sản phẩm, dịch vụ các thế hệ máy tính xách tay USA dòng bussiness, Multimedia giải trí cao cấp, iPhone, iPad USA&nbsp;trong đó lấy chất lượng phục vụ khách hàng làm sự phát triển bền vững.</p>
<p><strong>3. Những Giá Trị Cốt Lõi&nbsp;</strong></p>
<p>Giá trị cốt lõi của Trung Trần&nbsp; là các giá trị bền vững làm nên thành công,&nbsp; là tôn chỉ toàn bộ hành động của công ty , được hình thành qua những ngày tháng gian khổ đầu tiên của công ty, được xây dựng từ những kinh nghiệm và học hỏi, tôi luyện qua những thử thách trong suốt quá trình phát triển.</p>
<p><strong>Tư duy hệ thống xã hội hóa:&nbsp;</strong></p>
<p>Công ty được tổ chức như một hệ thống với những nhiệm vụ sứ mệnh rõ ràng, được tổ chức toàn vẹn và hiệu quả, không ngừng nâng cấp để thay đổi về tầm ảnh hưởng, hệ thống sẽ được Xã Hội Hóa theo hướng là tài sản chung của toàn bộ cán bộ, nhân viên Trung Trần&nbsp;và đóng góp để trở thành 1 phần hữu cơ của Xã Hội.&nbsp;</p>
<p><strong>Thành công của con người là thành công của tổ chức.&nbsp;</strong></p>
<p>Công ty Trung Trần&nbsp;xây dựng đội ngũ nhân viên như những người đồng đội trên cùng một chiến thuyền, mỗi cá nhân được đánh thức nhân sinh quan và hướng dẫn cách nhận định, phấn đấu vì mục tiêu sống, thành công của mỗi nhân viên là thành công của tổ chức. Hội tụ càng nhiều thành công này, tổ chức đạt được mục tiêu. Trên cùng một chiến thuyền, giữa biển khơi bao la…đòi hỏi một tập thể phải biết tối ưu ở mọi cấp độ, đoàn kết và tin tưởng vào mục tiêu của tổ chức. Hệ thống đòi hỏi những con người phải biết thành công và dám thành công.&nbsp;</p>
<p><strong>Giá trị doanh nghiệp nằm ở khách hàng&nbsp;</strong></p>
<p>Giá trị doanh nghiệp nằm ở khách hàng, kết nối khách hàng thành một xã hội và phục vụ xã hội này với những năng lực, tư duy luôn đổi mới. Mỗi khách hàng là một hạt nhân quan trọng trên bước đường cóp nhặt thành công của công ty. Toàn thể từ lãnh đạo đến nhân viên trước khách hàng luôn phải thể hiện trong vai trò người phục vụ: tận tụy, lắng nghe và đưa ra giải pháp tốt nhất.&nbsp;</p>
<p>Lời kết:<strong>&nbsp;<a href="https://trungtran.vn/">http://trungtran.vn</a>&nbsp;</strong>xin gửi lời cám ơn chân thành nhất đến quý khách, mọi ý kiến góp ý dù là nhỏ nhất xin mời liên hệ theo số phone: 094.2345.996</p>
<p>Xin chân thành cám ơn anh em!</p> </div>
</div>
</div>
<div class="hethong container">
<h2>Hệ Thống Showroom</h2>
<p class="p-hethong">Thời gian mở cửa: 8h30 - 20h (T2-CN)</p>
<div class="row_inline row_inline_pc">
<div class="col_item col_item_left">
<div class="item_hethong">
<p class="p-title"><span>01</span> Showroom Thái Hà - Hà Nội</p>
<ul>
<li>Số 3 Ngõ 117 Thái Hà, Đống Đa, Hà Nội (có chỗ gửi ô tô thuận tiện)</li>
<li>Bán hàng / Kỹ thuật: 19006903</li>
<li>Zalo OA: zalo.trungtran.vn</li>
<li>Lắng nghe góp ý: 0969.819.818</li>
</ul>
<a href="" target="_bank">Hình ảnh thực tế showroom <img alt="trung trần" src="https://trungtran.vn/upload_images/images/muiten.png"></a> <a href="https://www.google.com/maps/place/Laptop+C%C5%A9+Gi%C3%A1+R%E1%BA%BB,+Laptop+Gaming+C%C5%A9+Uy+T%C3%ADn+-+TrungTran.vn/@21.0125216,105.8202766,15z/data=!4m6!3m5!1s0x3135abcd6e0be7b5:0xacd60b7651b50a1d!8m2!3d21.0125216!4d105.8202766!16s%2Fg%2F11h_bnb1zp?hl=vi&amp;entry=ttu" target="_bank">Xem bản đồ đường đi <img alt="trung trần" src="https://trungtran.vn/upload_images/images/muiten.png"></a></div>
<div class="item_hethong item_hethong_2">
<p class="p-title"><span>02</span> Phòng Bán Hàng Online</p>
<ul>
<li>Phục vụ đơn hàng Online trên toàn quốc</li>
<li>Bán hàng / Kỹ thuật: 19006903</li>
<li>Zalo OA: zalo.trungtran.vn</li>
</ul>
<a href="" target="_bank">Xem quy trình Mua Hàng Online An Toàn <img alt="trung trần" src="https://trungtran.vn/upload_images/images/muiten.png"></a></div> </div>

</div>
</div>
</div>`,
    `<div class="wpb_text_column wpb_content_element ">
<div class="wpb_wrapper">
  <ol>
<li><strong>LỊCH SỬ HÌNH THÀNH </strong></li>
</ol>
<p>Được thành lập vào tháng 07 &nbsp;năm 2007 , Công Ty TNHH Máy Tính Phong Vũ lúc đó là một cửa hàng buôn bán máy tính nhỏ lẻ. Qua nhiều năm Phong Vũ đã từng bước lớn mạnh và phát triển trong lĩnh vực kinh doanh các sản phẩm, linh kiện máy tính, thiết bị văn phòng, thông tin liên lạc và giải trí do các hãng điện tử hàng đầu trên thế giới sản xuất.</p>
<p>Thành lập từ năm 2007, Tiền thân là một cơ sở bán lẻ các thiết bị vi tính, đến nay Công Ty TNHH Máy Tính Phong Vũ đã trở thành một trong những thương hiệu đi đầu trong lĩnh vực vi tính, công nghệ thông tin. Thành công này bắt đầu từ nhiều nguyên nhân khác nhau, trong đó có lý do quan trọng khi chọn Miền Trung là thị trường tiềm năng để phát triển. Công Ty TNHH Máy Tính Phong Vũ là doanh nghiệp góp phần đặt nền móng kinh doanh lĩnh vực tin học với mục tiêu trở thành đơn vị chuyên nghiệp và đi đầu Khu vực miền Trung .</p>
<p>Phong Vũ luôn phấn đấu, nỗ lực không ngừng để đem lại cho người tiêu dùng những sản phẩm công nghệ tiên tiến, và đã trở thành một trong những thương hiệu đáng tin cậy và được yêu thích nhất. Phong Vũ luôn cam kết cung cấp hàng chính hãng từ các nhà sản xuất, chất lượng luôn được đảm bảo và mức giá phù hợp trong môi trường cạnh tranh.</p>
<p><img class="aligncenter" src="http://www.saygold-adv.com/hinh/sp/du_an/1402977821.jpg" alt="Kết quả hình ảnh cho phong vũ đà nẵng"></p>
<p><strong>2. LĨNH VỰC HOẠT ĐỘNG</strong></p>
<p>Phong Vũ luôn đa dạng các mặt hàng và phong phú về mẫu mã trong lĩnh vực Công nghệ thông tin nhằm đáp ứng nhu cầu ngày càng cao của khách hàng.</p>
<p>Phân phối nhiều dòng máy laptop , máy tính để bàn, các linh kiện, phụ kiện, kỹ thuật số, camera, … của nhiều hãng nổi tiếng trên thế giới như Acer, HP, Samsung, Asus, LG, CorlorFul, TEAM, Motospeed…</p>
<p>Các thiết bị văn phòng: máy photocopy, may fax, máy scan, thiết bị hủy giấy, máy tính tiền, máy chấm công, máy quét mã vạch, máy tính, kim tự điển,…</p>
<p>Chuyên lắp đặt hệ thống Camera Quan Sát, &nbsp;tổng đài điện thoại …</p>
<p>Phong Vũ còn là địa chỉ tin cậy đối với khách hàng có nhu cầu bảo hành và bảo trì cho các loại máy tính để bàn, máy tính xách tay, máy in,… Với các loại hình dịch vụ bảo hành và bảo trì tận nơi, bảy ngày trong tuần, chúng tôi bảo đảm tối ưu hóa năng lực các máy móc, thiết bị của khách hàng.</p>
<p><strong>3. NGUỒN NHÂN LỰC</strong></p>
<p>Một tổ chức phát triển bền vững luôn cần có một đội ngũ nhân lực tốt về chất và lượng. Chính vì quan niệm đó mà đội ngũ nhân lực của Phong Vũ luôn được chọn lọc kỹ càng trước khi trải qua các quá trình đào tạo. Chúng tôi cập nhật thường xuyên những kiến thức sản phẩm mới nhất, không ngừng nâng cao trình độ chuyên môn kỹ thuật và tác phong giao tiếp với khách hàng luôn được chú trọng. Chúng tôi xem khả năng làm hài lòng khách hàng là thước đo thành công của chính mình.</p>

</div>
</div>`
  ]
  let urlDes = test[shopId % test.length]
  const [shop, setShop] = useState({});
  useEffect(() => {
    const fetch = async () => {
      const res = await instance.get(
        '/api/v1/store/' + shopId,
      );
      if (res.data.EC === 200) {
        setShop(res.data.data);
        // console.log('sos', res.data.data);
      } else alert(res.data.message);
    };
    fetch();
  }, [shopId]);

  return (
    <div>
      <Container>
        {shop && (
          <div className="my-5">
            {/* Name */}
            <Heading
              title={shop.name || ''}
            />
            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <Chip
                label="Rating"
                color="primary"
                size="small"
              />
              <Rating
                value={shop.rating || 0}
                readOnly
              />
            </div>
            {/* Address */}
            <div className="flex gap-2 mt-3">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.2537 25.13C4.64445 23.6452 5.42242 22.2907 6.50811 21.205L11.0156 16.6975L13.3025 18.9844L8.79499 23.4919C7.70931 24.5776 6.35483 25.3555 4.86999 25.7463L4.42216 25.8641C4.24858 25.9098 4.09018 25.7514 4.13586 25.5778L4.2537 25.13Z"
                  fill="#FFF4D9"
                  stroke="black"
                  strokeWidth="1.40625"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.734 16.894C21.1848 16.3448 21.1848 15.4544 21.734 14.9052L24.6069 12.0322C26.2911 10.3481 26.2911 7.61757 24.6069 5.93344L23.9195 5.24601C22.2354 3.56188 19.5049 3.56188 17.8207 5.24601L14.9477 8.119C14.3986 8.66818 13.5082 8.66818 12.959 8.119L12.5594 7.71936C11.0949 6.25489 8.72052 6.25489 7.25605 7.71936L5.6819 9.29351C5.13273 9.84269 5.13273 10.7331 5.6819 11.2822L18.8317 24.432C19.3808 24.9812 20.2712 24.9812 20.8204 24.432L22.3945 22.8579C23.859 21.3934 23.859 19.019 22.3945 17.5546L21.734 16.894Z"
                  fill="#D27C2C"
                />
                <path
                  d="M24.6069 12.0322L25.1041 12.5294H25.1041L24.6069 12.0322ZM24.6069 5.93344L25.1041 5.43625V5.43625L24.6069 5.93344ZM23.9195 5.24601L23.4223 5.7432V5.7432L23.9195 5.24601ZM17.8207 5.24601L18.3179 5.7432L17.8207 5.24601ZM7.25605 7.71936L7.75324 8.21654L7.25605 7.71936ZM18.8317 24.432L18.3345 24.9292L18.8317 24.432ZM20.8204 24.432L20.3232 23.9348L20.8204 24.432ZM5.6819 11.2822L5.18472 11.7794L5.6819 11.2822ZM12.959 8.119L13.4562 7.62182L12.959 8.119ZM21.734 14.9052L21.2368 14.408L21.734 14.9052ZM21.734 16.894L21.2368 17.3911L21.734 16.894ZM24.1098 11.535L21.2368 14.408L22.2311 15.4024L25.1041 12.5294L24.1098 11.535ZM24.1098 6.43062C25.5193 7.84017 25.5193 10.1255 24.1098 11.535L25.1041 12.5294C27.0629 10.5707 27.0629 7.39498 25.1041 5.43625L24.1098 6.43062ZM23.4223 5.7432L24.1098 6.43062L25.1041 5.43625L24.4167 4.74883L23.4223 5.7432ZM18.3179 5.7432C19.7275 4.33365 22.0128 4.33365 23.4223 5.7432L24.4167 4.74883C22.458 2.7901 19.2823 2.79011 17.3235 4.74883L18.3179 5.7432ZM15.4449 8.61619L18.3179 5.7432L17.3235 4.74883L14.4506 7.62182L15.4449 8.61619ZM12.0622 8.21655L12.4618 8.61619L13.4562 7.62182L13.0565 7.22218L12.0622 8.21655ZM7.75324 8.21654C8.94311 7.02667 10.8723 7.02667 12.0622 8.21655L13.0565 7.22218C11.3175 5.48312 8.49792 5.48312 6.75887 7.22217L7.75324 8.21654ZM6.17909 9.7907L7.75324 8.21654L6.75887 7.22217L5.18472 8.79633L6.17909 9.7907ZM19.3288 23.9348L6.17909 10.7851L5.18472 11.7794L18.3345 24.9292L19.3288 23.9348ZM21.8974 22.3607L20.3232 23.9348L21.3176 24.9292L22.8917 23.355L21.8974 22.3607ZM21.8974 18.0517C23.0872 19.2416 23.0872 21.1708 21.8974 22.3607L22.8917 23.355C24.6308 21.616 24.6308 18.7964 22.8917 17.0574L21.8974 18.0517ZM21.2368 17.3911L21.8974 18.0517L22.8917 17.0574L22.2311 16.3968L21.2368 17.3911ZM18.3345 24.9292C19.1582 25.753 20.4938 25.753 21.3176 24.9292L20.3232 23.9348C20.0486 24.2094 19.6034 24.2094 19.3288 23.9348L18.3345 24.9292ZM5.18472 8.79633C4.36095 9.62009 4.36095 10.9557 5.18472 11.7794L6.17909 10.7851C5.9045 10.5105 5.9045 10.0653 6.17909 9.7907L5.18472 8.79633ZM14.4506 7.62182C14.176 7.89641 13.7308 7.89641 13.4562 7.62182L12.4618 8.61619C13.2856 9.43995 14.6212 9.43995 15.4449 8.61619L14.4506 7.62182ZM21.2368 14.408C20.413 15.2318 20.413 16.5674 21.2368 17.3911L22.2311 16.3968C21.9566 16.1222 21.9566 15.677 22.2311 15.4024L21.2368 14.408Z"
                  fill="black"
                />
                <path
                  d="M21.7968 7.26582C20.3905 6.32833 19.453 7.73457 18.0468 9.14082"
                  stroke="black"
                  strokeWidth="1.40625"
                  strokellinecap="round"
                />
              </svg>
              <span className="text-2xl ">
                {shop.address || ''}
              </span>
            </div>
            {shop &&
              shop.images &&
              shop.images.length >
              0 && (
                <ImageGallery
                  images={
                    shop?.images?.slice(
                      0, 3
                    ) || []
                  }
                />
              )}
            {/* Description */}
            <div className="mt-5 mx-20">
              <span>
                {parser(
                  urlDes ||
                  '',
                )}
              </span>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default OverviewShop;

import { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Explore from './Explore/Explore';
import NewRealease from './NewRealease/NewRealease';


import img001 from './Explore/image/001.jpg'
import img002 from './Explore/image/002.jpg'
import img003 from './Explore/image/003.jpg'
import img004 from './Explore/image/004.jpg'
import img005 from './Explore/image/005.png'
import img006 from './Explore/image/006.jpg'
import img007 from './Explore/image/007.jpg'

function App() {

  const [firstFilm, setFirstFilm] = useState({
    img: img001,
    id: "001",
    moviename: "Weather With You",
    description: "Mùa hè năm đầu cấp Ba, Hodaka bỏ nhà ra đi. Cậu từ một hòn đảo xa xôi hẻo lánh đến Tokyo, nhưng sau đó nhanh chóng rơi vào cảnh túng thiếu và phải sống chuỗi ngày cô đơn. Nhưng cuối cùng cậu đã tìm được công việc: viết bài cho một tạp chí huyền bí. Sau khi cậu bắt đầu công việc, mưa cứ rơi mãi rơi mãi không thôi.",
    episode: "01"
  });

  const [Films, setFlims] = useState([
    {
      img: img001,
      id: "001",
      moviename: "Weather With You",
      description: "Mùa hè năm đầu cấp Ba, Hodaka bỏ nhà ra đi. Cậu từ một hòn đảo xa xôi hẻo lánh đến Tokyo, nhưng sau đó nhanh chóng rơi vào cảnh túng thiếu và phải sống chuỗi ngày cô đơn. Nhưng cuối cùng cậu đã tìm được công việc: viết bài cho một tạp chí huyền bí. Sau khi cậu bắt đầu công việc, mưa cứ rơi mãi rơi mãi không thôi.",
      episode: "01"
    },
    {
      img: img002,
      id: "002",
      moviename: "Once Peace",
      description: "One Piece là bộ truyện tranh dành cho thiếu niên của tác giả nổi tiếng Oda Eiichiro. Bộ manga này được chuyển thể thành một series anime nhiều tập hài hước, đặc sắc. Phim Đảo Hải Tặc mở đầu câu chuyện bằng cảnh xử tử vua hải tặc Gol D. Roger. Trước khi chết ông đã tiết lộ rằng mình có một kho báu được giấu ngoài biển. Nếu ai tìm thấy kho báu thì chúng sẽ thuộc về người đó. Rất nhiều người gan dạ đã đổ xô ra biển để tìm kiếm kho báu bí ẩn của vua hải tặc Gol D. Roger.",
      episode: "1018"
    },
    {
      img: img003,
      id: "003",
      moviename: "Boruto: Naruto Next Generations",
      description: "Boruto: Naruto Next Generations kể về thế hệ sau của Naruto. Bộ phim vẫn lấy bối cảnh là thế giới Ninja nhưng nhân vật chính lần này lại là Uzumaki Boruto, con trai của Uzumaki Naruto và Hyuga Hinata. Đồng hành cùng Naruto trong lần quay lại này là Sarada Uchiha là con gái của Sasuke Uchiha, Sakura Haruno và Mitsuki “con” của Orochimaru.",
      episode: "250"
    },
    {
      img: img004,
      id: "004",
      moviename: "Spy X Family",
      description: "Bộ phim là phần phim điện ảnh của series anime nổi tiếng Spy x Family. Trong bộ phim lần này, sau khi nhận được yêu cầu thay thế mình trong Chiến dịch Strix, Loid Forger quyết định giúp con gái Anya chiến thắng trong cuộc thi nấu ăn tại Học viện Eden bằng cách nấu bữa ăn yêu thích của hiệu trưởng để tránh bị thay thế khỏi nhiệm vụ mật. Nhưng từ đây, gia đình Forger phát hiện ra bí mật kinh hoàng ảnh hưởng đến hòa bình thế giới",
      episode: "07"
    },
    {
      img: img005,
      id: "005",
      moviename: "Shingeki no kyojin",
      description: "Câu chuyện của Đại chiến Titan tập trung vào một nền văn minh bên trong ba bức tường đồ sộ quây tròn đồng tâm, nơi được cho là duy nhất mà nhân loại còn tồn tại. Ba bức tường được đặt tên theo tên ba người con gái của vị vua đầu tiên có tên là Maria, Rose và Sina. Người dân ở đó, được gọi là dân tộc Eldia, đã tin rằng hơn một trăm năm trước, loài người đã bị đẩy đến bờ vực tuyệt chủng sau sự xuất hiện của những người khổng lồ hình dáng con người, được gọi là Titan.",
      episode: "28"
    },
    {
      img: img006,
      id: "006",
      moviename: "Captain Tsubasa",
      description: "Tsubasa Oozora là nhân vật chính trong bộ truyện này. Khi còn nhỏ, cậu đã thoát chết nhờ một quả bóng bất ngờ. Điều đó đã thúc đẩy cậu trở thành một fan hâm mộ bóng đá. Câu chuyện tập trung vào các trận đấu bóng đá hấp dẫn, đem lại những bất ngờ cho khán giả. Đây là bản làm lại của 'Tsubasa Giấc mơ sân cỏ', với những chi tiết được thêm hoặc bỏ, để cộng thêm nét đặc trưng vào bộ truyện. Bộ phim này đã làm vợi lên kí ức về tuổi thơ của biết bao người.",
      episode: "28"
    },
    {
      img: img007,
      id: "007",
      moviename: "Ao Ashi",
      description: "Ashito Aoi là một cầu thủ bóng đá trẻ, đầy khát vọng đến từ một thị trấn vùng nông thôn ở Nhật Bản. Hy vọng vào được một trường trung học với một câu lạc bộ bóng đá giỏi đã tan thành mây khói khi anh gây ra một sự cố trong một trận đấu quan trọng cho đội của mình, dẫn đến việc họ bị loại khỏi giải đấu. Tuy nhiên, anh đã lọt vào mắt xanh của một người quan trọng tình cờ đến thăm từ Tokyo. Mọi chuyện sẽ diễn ra như thế nào đối với Ashito?",
      episode: "28"
    }
  ])

  const ChangeExplore = (index, Films) => {
    console.log("Click Thanh Cong");

    setFirstFilm({
      img: Films[index].img,
      stt: Films[index].id,
      moviename: Films[index].moviename,
      description: Films[index].description,
      episode: Films[index].episode,
    })
  };

  return (
    <div className="App">

      <div className="DivOuter">

        <header className="App-header">
          <Header />
        </header>

        <div className='Body'>

          <div className='Explore'>
            <Explore img={firstFilm.img} stt={firstFilm.id} name={firstFilm.moviename} description={firstFilm.description} episode={firstFilm.episode} />
          </div>

          <div className='NewRealease'>
            <div>
              <h2 style={{ textAlign: "left", padding: "0", width: "1320px" }}>New Realease</h2>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", position: "relative" }}>
              <NewRealease img={Films[1].img} stt={Films[1].id} name={Films[1].moviename} description={Films[1].description} episode={Films[1].episode} onClick={() => ChangeExplore(1, Films)} />
              <NewRealease img={Films[2].img} stt={Films[2].id} name={Films[2].moviename} description={Films[2].description} episode={Films[2].episode} onClick={() => ChangeExplore(2, Films)} />
              <NewRealease img={Films[3].img} stt={Films[3].id} name={Films[3].moviename} description={Films[3].description} episode={Films[3].episode} onClick={() => ChangeExplore(3, Films)} />
              <NewRealease img={Films[4].img} stt={Films[4].id} name={Films[4].moviename} description={Films[4].description} episode={Films[4].episode} onClick={() => ChangeExplore(4, Films)} />
              <NewRealease img={Films[5].img} stt={Films[5].id} name={Films[5].moviename} description={Films[5].description} episode={Films[5].episode} onClick={() => ChangeExplore(5, Films)} />
              <NewRealease img={Films[6].img} stt={Films[6].id} name={Films[6].moviename} description={Films[6].description} episode={Films[6].episode} onClick={() => ChangeExplore(6, Films)} />
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;

import {useState} from "react";
import PlayListMock from "../__mock__/playList.json";



function State1() {
  /* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */
 

  console.log(PlayListMock.playlist);
  /* 데이터 콘솔에 찍어두었으니 확인해볼 것 */

  const [playList, setPlaylist] = useState(PlayListMock.playlist);

  const onSubmitAddPlaylist = (event) => {
    
    event.preventDefault();
    
    const newPlaylist = {
      id: Math.floor(Math.random() * 1000000),
      title: event.target.title.value,
      singer: event.target.singer.value,
      state: false,
    };
    
    setPlaylist([...playList, newPlaylist]);
    
  }

  const onClickDeletePlaylist = (id) => {
    const filteredPlaylist = playList.filter((playlist) => playlist.id !== id);
    setPlaylist(filteredPlaylist);
  };

  return (
    <>
      <h1>문제1</h1>
      <ul>
        {/* list */}
        {/* 예시 데이터 */}
        {playList.map((playlist) => (
          <div key={playlist.id}>
            <b>{playlist.title}</b>
            <p>{playlist.singer}</p>
            <button onClick={() => onClickDeletePlaylist(playlist.id)}>삭제</button>
          </div>
        ))}
      </ul>
      <form onSubmit={onSubmitAddPlaylist}>
        <p>
          곡명 : <input name="title" />
        </p>
        <p>
          가수/작곡 : <input name="singer" />
        </p>
        <p>
          <button type="submit">추가</button>
        </p>
      </form>
    </>
  );
}
export default State1;
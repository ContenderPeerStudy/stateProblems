import { useState } from "react";
import PlayListMock from "../__mock__/playList.json";
import { useRef } from "react";

function State1() {
    /* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */
    // 삭제 버튼 구현
    // 1. 요소에 달린 삭제 버튼을 누르면....
    // 2. 삭제 버튼이 속한 요소의 index를 찾는다.
    // 3. 찾은 index와 일치하지 않는 요소만 filter로 거른다.
    // // 4. filter로 거른 배열을 다시 표시한다. (state 필요)
    // 추가 버튼 구현
    // 1. 두 입력창을 ref 변수에 담는다.
    // 2. 버튼 누르면 실행하는 함수로 두 입력창의 value를 가져온다.
    // 3. setState 함수로 이전 배열 + 새 요소의 형태로 배열을 다시 만든다.
    console.log(PlayListMock.playlist);
    /* 데이터 콘솔에 찍어두었으니 확인해볼 것 */
    const [playList, setPlayList] = useState(PlayListMock.playlist);
    const titleRef = useRef();
    const singerRef = useRef();

    function handlePressDelete(index) {
        const deletedPlayList = playList.filter((_, elIndex) => {
            return elIndex !== index;
        });
        setPlayList(deletedPlayList);
    }
    function handlePressUpdate() {
        const title = titleRef.current.value;
        const singer = singerRef.current.value;
        setPlayList([
            ...playList,
            {
                title,
                singer,
            },
        ]);
    }
    return (
        <>
            <h1>문제1</h1>
            <details>
                <summary>리스트 보기</summary>
                <ul>
                    {playList.map((el, index) => {
                        return (
                            <li>
                                <h3>{el.title}</h3>
                                <p>{el.singer}</p>
                                <button
                                    onClick={() => handlePressDelete(index)}
                                >
                                    삭제
                                </button>
                            </li>
                        );
                    })}
                </ul>

                <div>
                    <p>
                        곡명 : <input ref={titleRef} />
                    </p>
                    <p>
                        가수/작곡 : <input ref={singerRef} />
                    </p>
                    <p>
                        <button
                            onClick={() => {
                                handlePressUpdate();
                            }}
                        >
                            추가
                        </button>
                    </p>
                </div>
            </details>
        </>
    );
}
export default State1;

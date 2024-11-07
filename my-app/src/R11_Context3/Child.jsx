import React, { useState, useContext } from 'react';

/* 외부에 존재하는 Context 파일 가져오기 */
import UserContext from './UserContext';

/* 자식 컴포넌트 정의 */
const Child = () => {

  // Context로 전달받은 부모의 상태변수 얻어오기 // 구조분해할당
  const {userList, setUserList} = useContext(UserContext);

  // 자식 컴포넌트에서만 사용할 상태변수 선언
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');

  /* 추가버튼 클릭 시
     부모상태변수 userList에 입력값을 추가하는 함수 */

  const addUser = () => {

    // 입력값을 이용해서 객체생성
    const user = {"name" : inputName, "age" : inputAge};

    // 부모의 상태변수 userList를 깊은복사 + user 추가
    const newUserList = [...userList, user];

    // 새 배열을 부모 상태변수에 대입
    setUserList(newUserList);

    // 자식 상태변수 빈칸으로 초기화
    setInputAge('');
    setInputName('');
  }

  return(
    <div>
      <label htmlFor='inputName'>이름 입력 :</label>
      <input 
        type="text"
        id="inputName" 
        onChange={ (e) => { setInputName(e.target.value)}}
        value={inputName}
        />

        <br />
      <label htmlFor='inputName'>나이 입력 :</label>
      <input 
        type="number"
        id="inputAge" 
        onChange={ (e) => { setInputAge(e.target.value)}}
        value={inputAge}
        />

        <button onClick={addUser}>추가</button>

    </div>
  );

}

export default Child;

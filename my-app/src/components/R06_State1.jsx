import React, { useState } from 'react'; // imrs

/*
  State : 컴포넌트의 상태(컴포넌트 단위의 전역변수)

  useState : 함수형 컴포넌트에서 State 사용을 위해 import하는 객체
*/
const StateEx1 = () =>{

  /* 일반 변수 사용시
    -> test 변수에 저장된 값은 A,B 변하고 있으나
       화면은 리랜더링 되지 않음
       (단순히 변수값이 변한 것이라고 인식하는 것일뿐)
  */
  // let test = 'A';

  /* 상태변수(State) 이용 */
const [test, setTest] = useState('A');

// useState('A')의 반환값
// === ['A', 0번 인덱스의 값을 바꿀 수 있는 함수(setter)]
  

  // 클릭 시 수행되는 함수(이벤트 핸들러)
  const ClickHandler = () => {
    // A <-> B 왔다 갔다 동작

    if(test === 'A') setTest('B');
    else setTest ('A');
    // setTest() 함수를 이용해서
    // 상태 변수 test 값을 변경하면
    // 해당 컴포넌트 리랜더링 수행!!

    console.log("test : ", test);
  }

  return(
    <>
      <h1>{test}</h1>    
      <button
      className='changeBtn'
      onClick={ClickHandler}>Change!!Change!!Change!!Change!!Change!!Change!!Change!!Change!!Change!!Change!!Change!!Change!!Change!!Change!!Change!!Change!!Change!!Change!!Change!!</button>
    </>
  );

}

export default StateEx1;
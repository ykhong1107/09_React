import React, {createContext, useContext, useState} from 'react';

/* Context 객체 생성 ( 변수명 대문자로 시작 ) */
const Ctx = createContext();

/* 후손 컴포넌트 */
const GrandChild = () => {

  // Context를 이용해서 제공된 값 구조분해할당
  // -> {"number": number, "setNumber": setNumber}
  const{number, setNumber} = useContext(Ctx);
  // -> number, setNumber 는 Parent의 상태변수
  // --> 상태변수 값이 변하면 컴포넌트(Parent) 리랜더링 수행

  return(
   <> 
     <h3>GrandChild Component</h3>
     <div>
      Parent로 전달할 값 : 
      <input 
        type="number" 
        value={number} 
        onChange={ e => {setNumber(e.target.value)}}/>
     </div>
   </>
  );
}

const Child = () => {

  return(   
     <>
      <h3>Child Component</h3>
      <GrandChild/>
     </>
  );
}

const Parent = () => {

  // 상태변수선언
  const [number, setNumber] = useState(0);

  /** Content 객체를 이용해서 여러값을 제공하고 싶을 경우
   * JS 객체 {}를 이용
   */
  
  // const obj = {"number":number, "setNumber":setNumber};

  // 리액트에서 {number, serNumber} 형태로 작성하면
  // 자동으로 변수명이 key, 값이 value 로 변환됨
  // -> {"number":number, "setNumber":setNumber};
  return(   
    <Ctx.Provider value={ {number, setNumber} }>
     <h3>
        Parent Component :
        <span className='red'>{number}</span>
     </h3>
     <Child/>
    </Ctx.Provider>
 );
}

export default Parent;
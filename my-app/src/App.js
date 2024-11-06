import './App.css';
import ClassComponent from './components/R01_ClassComponent';
// ->R01_ClassComponent 에서 export 된 HTML 요소를 
// ClassComponent 라고 부르겠다 
// --> <ClassComponent/> 형태로 사용가능

import FunctionComponent from './components/R02_FuctionComponent';

// import 여기서 사용할 이름 form '경로';
import Props1 from './components/R03_Props1';
import Props2 from './components/R04_Props2';
import Props3 from './components/R05_Props3';

import State1 from './components/R06_State1';
import State2 from './components/R07_State2';
import State3 from './components/R08_State3';

// 기본적으로 //, /*  */ 주석 사용가능(JS니까!!)
// 단, HTML 코드가 작성되는 영역에서는 {/* */} 주석 사용

function App() {
  return (
    <>
      {/* JSX(JS에 HTML코드 포함) 주석 */}
      {/* 클래스형 컴포넌트 */}
      {/* <ClassComponent/> */}
      {/* <FunctionComponent/> */}

      {/* Props */}
      {/* <Props1 num='1' name='홍아영'/>
      <Props1 num='2' name='기모링'/>
      <Props1/>

      <hr/>

      <Props2 name='강감찬'
              age ='72'
              address='낙성대'
              gender='남자'
              />

      <Props2 name='영앤리치'
              age ='19'
              address='랑남'
              gender='템플러 '
              />

      <hr/>
      <Props3 productName='순대국' price='10000'/> */}
      {/* State */}
      <State1/>

      <State2 init='0'/>

      <hr/>
      <State3/>

    </>
  );
}

export default App;

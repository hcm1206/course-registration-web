import React, {useState} from "react";

function Selections() {

  const [aClass, setAClass] = useState(false);
  const [bClass, setBClass] = useState(false);
  const [cClass, setCClass] = useState(false);
  const [dClass, setDClass] = useState(false);
  const [eClass, setEClass] = useState(false);

function toggle(c) {
  if (c == true) {
    console.log(false);
    return false;
  }
  else if (c == false) {
    console.log(true);
    return true
  }
  
}

function showClass(t, c) {
  if (t == true) {
    return (
      <div className={`class`+c}></div>
    )
  }
}




    return (
      <div>
        <div id="selections">
          <p>Test</p>
          <input type="checkbox" name="class" value="A" onClick={() => {setAClass(toggle(aClass))}}></input><span>A (월 2교시~5교시)</span><br/>
          <input type="checkbox" name="class" value="B" onClick={() => {setBClass(toggle(bClass))}}></input><span>B (화 1교시~3교시)</span><br/>
          <input type="checkbox" name="class" value="C" onClick={() => {setCClass(toggle(cClass))}}></input><span>C (화 5교시~6교시)</span><br/>
          <input type="checkbox" name="class" value="D" onClick={() => {setDClass(toggle(dClass))}}></input><span>D (수 4교시~6교시)</span><br/>
          <input type="checkbox" name="class" value="E" onClick={() => {setEClass(toggle(eClass))}}></input><span>E (목 5교시~7교시)</span><br/>
        </div>
        <div id="table">
          {showClass(aClass, 1)}
          {showClass(bClass, 2)}
          {showClass(cClass, 3)}
          {showClass(dClass, 4)}
          {showClass(eClass, 5)}
          <table border="1">
            <thead>
              <tr>
                <th>시간</th>
                <th>월</th>
                <th>화</th>
                <th>수</th>
                <th>목</th>
                <th>금</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1교시</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>2교시</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>3교시</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>4교시</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>5교시</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>6교시</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>7교시</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>8교시</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>9교시</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }



export default Selections;
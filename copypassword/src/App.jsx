import { useCallback, useState, useEffect, useRef } from "react";


function App() {
  let [length, setlength] = useState(8);
  const [numberallowed, setnumberallowed] = useState(false);
  const [charallowed, setcharallowed] = useState(false);
  const [password, setpassword] = useState("");

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberallowed) string = string + "0123456789";
    if (charallowed) string = string + "!@#$%^&*(){}[]<>,./?:;";

    for (let i = 1; i < length; length++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char);
    }  

    setpassword(pass)

  }, [length, numberallowed, charallowed, setpassword]);

  useEffect(() => {
    passwordgenerator()
  }, [length, numberallowed, charallowed, passwordgenerator])
  return (
    <>
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            
        />
        <button
        
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setlength(e.target.value)}}
          />
          <label>Length: {length}</label>
          </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberallowed}
          id="numberInput"
          onChange={() => {
              setnumberallowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charallowed}
              id="characterInput"
              onChange={() => {
                  setcharallowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    </>
  );
}

export default App;




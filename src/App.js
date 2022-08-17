
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1 className='text-black'>hfeyde</h1>
       <button>Metamask</button>
       <button onClick={async () =>{
         alert("hey")
         if(window.ethereum){
          console.log(await window.ethereum.enable())
         }
       }} class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default</button>

      </header>
    </div>
  );
}

export default App;

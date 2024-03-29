import React, { Component } from 'react';

class Notes extends Component {
    //updated the constructor files
    //removed typos
    constructor(props){

        super(props)
        
        //State is set in wrong here


        this.state={
            notes:[
                {id:1,title:"My first Note", body:"My first note body, yes"},
                {id:2,title:"My second Note", body:"My Second note body, second"},
                {id:3,title:"My third Note", body:"My Third note body, third"}
            ]
        }

    }
    render() {
        return (
            <div>
                ;<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link rel="stylesheet" href="/css/compiled.css" />
  <header className="bg-gray-900 shadow h-12 w-full mb-4 flex justify-center items-center">
    <a
      href="/"
      className="text-gray-50 font-bold text-lg uppercase tracking-wide"
    >
      Notes For Everyone

    </a>
  </header>
  <div className="w-full px-4 mb-4">
    <div className="block w-full bg-gray-800 rounded-lg h-10 outline-none p-2 flex">
      <svg
        className="h-6 w-6 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        />
      </svg>
      <input
        type="text"
        className="flex-1 outline-none h-full bg-transparent ml-2 font text-gray-300"
        placeholder="Search"
      />
    </div>
  </div>
  <div className="px-4 mb-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {this.state.notes.map(note=>
            <a href="single-note.html" className="bg-blue-200 p-3 rounded shadow">
                <div className="flex justify-between items-center mb-1">
                <h1 className="font-medium text-lg">Trip to San fran</h1>
                </div>
                <p className="text-gray-600 text-sm">
                San francisco is the best
            place on planet earth and evrybody loves, it
            amazing
                </p>
                <p className="text-gray-600 text-sm">
                We have our exams going on.
                </p>
            </a>
        )}
    
    
  </div>
  <div className="w-full h-full fixed top-0 left-0 bg-black bg-opacity-50 z-20 flex justify-center items-center hidden">
    <div className="bg-white w-4/5 rounded-lg p-4">
      <div className="flex justify-end">
        <div className="rounded-full bg-transparent border border-gray-500 h-8 w-8 flex justify-center items-center text-gray-500 cursor-pointer hover:border-gray-700 text-gray-700">
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
  <a
    href="new-note.html"
    className="right-10 bottom-10 z-10 absolute h-14 w-14 rounded-full bg-blue-500 text-white shadow-lg text-xl flex justify-center items-center outline-none focus:outline-none focus:bg-blue-600"
  >
    <svg
      className="h-8 w-8"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
        clipRule="evenodd"
      />
            
      <path
        fillRule="evenodd"
        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
        clipRule="evenodd"
      />
            
      <path
        fillRule="evenodd"
        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
        clipRule="evenodd"
      />
            
      <path
        fillRule="evenodd"
        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
        clipRule="evenodd"
      />
            
      <path
        fillRule="evenodd"
        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
        clipRule="evenodd"
      />
    </svg>
  </a>
</>

            </div>
        );
    }
}

export default Notes;

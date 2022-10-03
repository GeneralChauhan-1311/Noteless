import React from "react";
import Notes from "./pages/Notes"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <>
      
      

        
        <Routes>
          <Route path="/" component={Notes} />
        </Routes>
      </>
    </Router>
  );
}
;



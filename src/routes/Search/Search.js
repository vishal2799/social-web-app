import React from 'react';
import Tabs from "../../components/UI/Tabs/Tabs";
import "../../components/UI/Tabs/Tabs.css"
import Accounts from './Accounts/Accounts';
import Posts from './Posts/Posts';
import Tags from './Tags/Tags';

function Search() {

    return (
      <div>
        <h1>Search Page</h1>
        <Tabs>
          <div label="Accounts">
            <Accounts />
          </div>
          <div label="Posts">
            <Posts />
          </div>
          <div label="Tags">
            <Tags />
          </div>
        </Tabs>
      </div>
    );
  }
  
  export default Search;
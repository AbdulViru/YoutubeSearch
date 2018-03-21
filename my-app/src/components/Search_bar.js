import React, {Component} from 'react';
import './../index.css';
// React class
class SearchBar extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { 
            searchStr : ''
        };
    }
   
    onVideoSearch(searchStr)
    { 
        this.setState({searchStr});
        this.props.onVideoSearch(searchStr);
    }

    render()
    {
        return (
        <div className="search-bar"> 
            <input        
            onChange={event => this.onVideoSearch(event.target.value)} />            
        </div> );
    }
}


// const SearchBar = () => {
//     return <input />;
// };

export default SearchBar;
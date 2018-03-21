import React, {Component} from 'react'
import _ from 'lodash';
import ReactDOM from 'react-dom'
import SearchBar from './components/Search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/VideoList';
import VideoDetails from './components/VideoDetails';
import './index.css'

const API_KEY = 'AIzaSyA7uOTWc5VSjEbuzPQJ_6wVmRuZanuehmg';


// .......... Class Component declaration ..........

class App extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
             videos : [],
             selectedVideo : null 
        };        
        this.videoSearch("Cricket");        
    }

    videoSearch(searchStr)
    {
        YTSearch({key : API_KEY, term : searchStr}, (videos) =>
        {
            this.setState( {videos});
            this.setState({selectedVideo : this.state.videos[0]});            
        });
       
    }

    render()
    {
        let videoSearch = _.debounce((searchStr) => {this.videoSearch(searchStr)},300);
        return ( 
            <div>
                <SearchBar onVideoSearch={videoSearch}/>
                <br/>
                <VideoDetails videos= {this.state.selectedVideo} />
                <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos= {this.state.videos} /> 
            </div> 
                );
    }
}

ReactDOM.render(<App />,document.getElementById('root'));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import Sample from './components/sample'
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<Sample />, document.getElementById('root'));
// registerServiceWorker();


// .......... Functional Component declaration ..........
// jsx sample declaration 
// const App = () => {
//     return (
//     <div> 
//        <SearchBar />
//         {/* <ul>
//             <li> Student 1</li>
//             <li> Student 2</li>
//             <li> Student 3</li>
//         </ul> */}
//     </div>);
//     }
import { Component } from 'react';
// npm install react-router-dom
import { Top } from './components/Top/Top';
import WebCam from './components/WebCam/WebCam';
import { MeteoBarBig } from './components/MeteoBarBig/MeteoBarBig';
import { Forum } from './components/Forum/Forum';
import PhotoGallery from './components/PhotoGallery/PhotoGallery'
import { Bottom } from './components/Bottom/Bottom';

import './css/main.css';

export default class App extends Component {

    render() {
        return (
            <div className="top_container">
                <Top />
                <WebCam />
                <MeteoBarBig />
                <Forum />
                <PhotoGallery />
                <Bottom />
            </div>
        )
    }
}
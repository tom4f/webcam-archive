import './css/bottom.css'

export const Bottom = () => {

    return ( 
        <>
            <div className="header">
                
                <a href="https://tomas-blog.vercel.app/">© 1998-2021 Created by Tomáš Kučera</a>
                <br/>
                <a href="http://www.lipnonet.cz/">LIPNOnet.cz</a> | 
                <a href="http://www.lipno.net/"> LIPNO.net</a> | 
                <a href="http://www.frymburk.com/"> FRYMBURK.com</a> | 
                <a href="http://www.frymburk.eu/"> FRYMBURK.eu</a>
            </div>

            <div className="bottom">
                <a href="https://www.toplist.cz/stat/6477" target="_top">
                    <img src="https://toplist.cz/count.asp?id=6477&logo=bc" border="0" alt="TOPlist" width="88" height="120"/>
                </a>
            </div>
        </>
    );
}
import { useEffect, useState } from 'react'
import { serverPath } from './../../api/serverPath'
import './css/forum.css'

export const Forum = () => {
    const [ items, setItems ] = useState( [] )

    const loadForumShort = () => {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', `${serverPath}/rekreace/api/pdo_read_forum.php`, true);
        xhr.onload = function() {
            if (this.readyState === 4 && this.status === 200) {
                setItems( JSON.parse(this.responseText) );
            }
        }
        xhr.onerror = function () {
            console.log( JSON.parse('{"status" : "ajax_failed"}') );
        }
        xhr.send(JSON.stringify(
            {
            'start' : 0,
            'limit' : 5,
            'searchCriteria' : ''
            }
        ));
    }

    const showForum = () => {
        let knihaUL = []
        items.forEach(item => {
            const { id, datum, text, jmeno, email } = item;
            const [ year, month, day ] = datum.split(' ')[0].split('-');
            const mailto = `mailto:${email}`
            knihaUL.push(
                <li key={id}>
                    {day}.{month}.{year}
                    &nbsp;<b><i>{ email ? <a href={mailto}>{jmeno}</a> : <>{jmeno}</> }</i></b>
                    &nbsp;{ text.slice(0,80) }
                </li>)
        });
        return knihaUL
    }

    useEffect( loadForumShort, [] )
    
    return (
        <>
            <div className="header">
                <a className="menu" href="./forum/" >LIPNO FÓRUM</a>
            </div>

            <section className="kniha-main-page">
                <ul>
                    { showForum() }
                </ul>
            </section>
        </>
    )
}
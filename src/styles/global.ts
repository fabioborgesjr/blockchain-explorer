import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
    }

    #root{
        display: flex;
        align-items:center;
        justify-content: center;
        background-image: url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Feveresthill.com%2Fwp-content%2Fuploads%2F2018%2F01%2FOrange-Bitcoin-Logos-Wallpaper-1900x1200.jpg&f=1&nofb=1&ipt=1a32753140f48e1fdc9737501bca79bf713d9bb9cc0527e7d915d33a4e85f6eb&ipo=images');
        height: 100vh;
        overflow: auto;
        width: 100%;
        padding-top: 2rem;
    }

 `

export default GlobalStyle

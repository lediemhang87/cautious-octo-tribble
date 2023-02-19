
import Directory from './components/directory/directory.component.jsx'

const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Hats',
      url:'https://img.ltwebstatic.com/images3_pi/2021/09/23/1632383702f9cd60887bc65c00b722bfde9b4db28a_thumbnail_900x.webp'
    },
    {
      id: 2,
      title: 'Jackets',
      url:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRGWf9UtVJhry3QLOg4fnNkFvs7y_7M2LChW-cEZmjpGFBezSAe-sHguGbDHz40snmDQk52PWJ7Sqo&usqp=CAc'
    },
    {
      id: 3,
      title: 'Snickers',
      url:'https://img.ltwebstatic.com/images3_pi/2021/09/15/16316750097bd72ad03080430d97cba0e456bedeb5_thumbnail_900x.webp'
    },
    {
      id: 4,
      title: 'Women',
      url:'https://img.ltwebstatic.com/images3_pi/2021/11/25/163783830392343cb2b3f40b67120b4d338a9d7453_thumbnail_900x.webp'
    },
    {
      id: 5,
      title: 'Men',
      url:'https://img.ltwebstatic.com/images3_pi/2022/08/24/1661338601bcf406471dbb20e643f75ccafbc7494e_thumbnail_900x.webp'
    },
  ]

  return (
   
    <Directory category={categories}/>
    
  );
}

export default App;


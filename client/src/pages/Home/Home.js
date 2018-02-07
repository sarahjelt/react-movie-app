import React from 'react';
import {Carousel} from '../../components/Carousel'
import {AboutInfoBanner} from "../../components/AboutInfoBanner";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Carousel
                    carouselItems={carouselItemsArr}
                />
                <AboutInfoBanner/>
            </div>
        )
    }
}

const carouselItemsArr =
    ['https://i.pinimg.com/736x/fd/5e/66/fd5e662dce1a3a8cd192a5952fa64f02--classic-poster-classic-movies-posters.jpg',
        'http://www.joblo.com/posters/images/full/Spiderman-poster-7-large.jpg', "http://www.companyfolders.com/blog/media/2017/07/jaws.jpg",
        'http://img.moviepostershop.com/ghostbusters-movie-poster-2016-1020775586.jpg', 'https://cdn.empireonline.com/jpg/70/0/0/1280/960/aspectfit/0/0/0/0/0/0/c/features/59e8d795405a5c6805947751/44%20Fear%20and%20Loathing%20in%20Las%20Vegas.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/71rNJQ2g-EL._SY550_.jpg', 'https://i.pinimg.com/736x/de/e0/b1/dee0b1b176d3eea13a2c3a308850fa6e--poster-wall-movieposter.jpg',
        'http://imgc.allpostersimages.com/img/posters/casablanca_u-L-F31XO90.jpg', 'https://images-na.ssl-images-amazon.com/images/I/51T5sJngQLL.jpg', 'http://static.adweek.com/adweek.com-prod/wp-content/uploads/2017/09/stranger-things-7-450x675.jpg',
        'https://vignette.wikia.nocookie.net/disney/images/a/a4/Maleficent-%282014%29-149.jpg/revision/latest?cb=20140419102200', 'https://orig00.deviantart.net/9bf8/f/2014/184/f/1/batman_v_superman___dawn_of_justice_poster_by_lamboman7-d7p1x88.png',
        'https://fffmoviepostermuseum.com/wp-content/uploads/2016/05/grease-us-movie-poster-40x60.jpg','http://runt-of-the-web.com/wordpress/wp-content/uploads/2014/08/frozen.jpg', 'https://lyonsmouth.files.wordpress.com/2011/10/black-lagoon.jpg',
        'https://lumiere-a.akamaihd.net/v1/images/motherland_characters_panther_25b283f7.jpeg?region=0,0,1600,2271&width=320', 'https://static.posters.cz/image/1300/plakaty/pulp-fiction-cover-i1288.jpg', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDg4NjM1YjMtYmNhZC00MjM0LWFiZmYtNGY1YjA3MzZmODc5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UY1200_CR85,0,630,1200_AL_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/51%2Bwf-vBCUL._SY450_.jpg', 'https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-1uvi0ti_281fe89f.jpeg?region=0%2C0%2C1000%2C1363', 'https://3.bp.blogspot.com/-hfBKZoQxwEo/UBqSP4Q0ewI/AAAAAAAAKpE/901zkoRXd_I/s1600/Nausica%C3%A4+Of+The+Valley+Of+The+Wind+%281984%29+1.jpg',
        'http://img.moviepostershop.com/the-big-lebowski-movie-poster-1998-1010475636.jpg', 'https://ae01.alicdn.com/kf/HTB1O5ArRFXXXXbrXFXXq6xXFXXXr/Home-Decoration-Soul-Eater-Poster-Arachne-Giriko-Anime-Art-Silk-Wall-Posters-Decor-24x34-inch.jpg_640x640.jpg', 'https://i.pinimg.com/736x/39/15/26/3915266d618fe942ffdc87d3c955c969--dvd-set-season-.jpg'
    ]

export default Home;
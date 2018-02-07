import React from 'react';
import API from '../../utils/API'
import {ExploreResultItem} from "../../components/ExploreResultItem";

export default class Explore extends React.Component {
    state = {
        searchValue: '',
        results: []
    }

    componentWillMount() {
        this.setSearchParamsFromMatch(this.props)
    }

    componentDidMount() {
        API.searchByQuery(this.state.searchValue)
            .then(res => {
                console.log(res)
                this.parseResultsFromAPICall(res)
            })
    }

    setSearchParamsFromMatch = (props) => {
        this.setState({
            searchValue: props.match.params.query
        })
    }

    parseResultsFromAPICall = (res) => {
        let results = res.results
        let savedResults = []

        results.forEach(mediaItem => {
            if (mediaItem.media_type === "tv" || mediaItem.media_type === "movie") {
                let mediaItemObj = {
                    id: mediaItem.id,
                    title: mediaItem.name !== undefined ? mediaItem.name : mediaItem.title,
                    date: mediaItem.first_air_date !== undefined ? mediaItem.first_air_date : mediaItem.release_date,
                    overview: mediaItem.overview,
                    mediaType: mediaItem.media_type,
                    posterPath: mediaItem.poster_path
                }

                savedResults.push(mediaItemObj)
            } else if (mediaItem.media_type === 'person') {
                let personKnownForArr = mediaItem.known_for

                personKnownForArr.forEach(mediaItem => {
                    if (mediaItem.media_type === "tv" || mediaItem.media_type === "movie") {
                        let mediaItemObj = {
                            id: mediaItem.id,
                            title: mediaItem.name !== undefined ? mediaItem.name : mediaItem.title,
                            date: mediaItem.first_air_date !== undefined ? mediaItem.first_air_date : mediaItem.release_date,
                            overview: mediaItem.overview,
                            mediaType: mediaItem.media_type,
                            posterPath: mediaItem.poster_path
                        }

                        savedResults.push(mediaItemObj)
                    }
                })
            }
        })

        this.setState({
            results: savedResults
        })
    }

    // goToMediaProfile = (id) => {
    
    // }

    handleAddButtonPress = (title, date, synopsis, img, mediaType) => {
        console.log(['you pressed the add button', title, date, synopsis, img, mediaType])
        let userId = 1
        let mediaItem = {
            title,
            date,
            synopsis,
            img,
            mediaType
        }

        let userData = {
            userId,
            mediaItem
        }

        API.getMediaItemIdIfExists(mediaItem)
            .then(res => {
                console.log([res.data.length === 0, res.data])
                if (res.data.length < 1) {
                    console.log('this item does not exist in the db, so we should add it')
                    API.addMediaItemToDB(mediaItem)
                       .then(response => {
                           API.getMediaItemIdIfExists(mediaItem)
                               .then(res2 => {
                                   let mediaItemId = res2.data[0]._id
                                   console.log(['we added the item to the db and this is the new id for the mediaItem', mediaItemId])
                               })
                       })
                } else {
                    console.log(['this item already exists in the db', res.data[0]._id])
                }
            })
    }

    render() {
        return (
            <div style={Style.container}>
                <p style={Style.searchTextTitle}>Search for: {this.props.match.params.query}</p>
                {this.state.results.map((result, index) => (
                    <ExploreResultItem
                        id={result.id}
                        title={result.title}
                        date={result.date}
                        overview={result.overview}
                        mediaType={result.mediaType}
                        posterPath={`http://image.tmdb.org/t/p/w500/${result.posterPath}`}
                        key={index}
                        handleAddButtonPress={this.handleAddButtonPress}
                    />
                ))}
            </div>
        )
    }
}

const Style = {
    container: {
        width: '60%',
        marginLeft: '20%',
        marginRight: '20%',
        marginBottom: '15%',
    },
    searchTextTitle: {
        fontSize: '20px',
        marginBottom: '8%',
        marginTop: '5%'
    }
}
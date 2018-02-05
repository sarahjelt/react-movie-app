import React from 'react';
import API from '../../utils/API'
import {ExploreResultItem} from "../../components/ExploreResultItem";

export default class Explore extends React.Component {
    constructor(props) {
        super(props)
    }

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

        // (1) check if mediaItem is already in the db,
        // (2) if id exists, use that id, else
        // (3) create/post new mediaItem to the db
        // (4) once created, .then add mediaItem to the user's shelf

        // API.addMediaItemToUserShelf(userData)

        // API.addMediaItemToDB(mediaItem)
        //     .then(res => console.log(res))

        API.getMediaItemIdIfExists(mediaItem)
            .then(res => console.log(res))
    }

    render() {
        return (
            <div style={Style.container}>
                <p style={Style.searchTextTitle}>Search for: {this.props.match.params.query}</p>
                {this.state.results.map((result, index) => (
                    <ExploreResultItem
                        title={result.title}
                        date={result.date}
                        overview={result.overview}
                        mediaType={result.mediaType}
                        posterPath={result.posterPath}
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
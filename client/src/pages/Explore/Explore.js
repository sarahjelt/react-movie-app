import React from 'react';
import API from '../../utils/API'
import {ExploreResultItem} from "../../components/ExploreResultItem";
import Media from "../Media";
import AuthService from '../../components/modules/AuthService';
import decode from 'jwt-decode';

export default class Explore extends React.Component {
    constructor(props) {
        super(props);
        this.Auth = new AuthService();
    }

    state = {
        searchValue: '',
        results: [],
        indexOfOpenModal: null,
        indexOfActiveAddModal: null,
        radioToggleValue: false,
        userEmail: '',
        userId: '',
        userName: ''
    }

    componentWillMount() {
        this.setSearchParamsFromMatch(this.props)
        this.setUserInfoInState()
    }

    componentDidMount() {
        API.searchByQuery(this.state.searchValue)
            .then(res => {
                console.log(res)
                this.parseResultsFromAPICall(res)
            })
    }

    setUserInfoInState = () => {
        let userInfo = this.Auth.getProfile();
        console.log(userInfo)

        if (!userInfo) {
            window.location.replace("/")
        } else {
            this.setState({
                userEmail: userInfo.email,
                userId: userInfo._id,
                userName: userInfo.name,
            })
        }
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

    handleRadioToggle = (e) => {
        let toggleValue = e.target.name === 'watchedIt' ? true : false
        this.setState({
            radioToggleValue: toggleValue
        })
    }

    handleModalOpen = (index) => {
        this.setState({
            indexOfOpenModal: index
        })
    }

    handleAddModalOpen = (index) => {
        console.log('trying to open the add shelf item modal', index)

        this.setState({
            indexOfActiveAddModal: index
        })
    }

    handleConfirmationModalClose = () => {
        console.log('trying to close the modal')

        this.setState({
            indexOfActiveAddModal: null
        })
    }

    handleShelfItemSubmit = (title, date, synopsis, img, mediaType) => {
        console.log('trying to close the modal')
        console.log(['you are trying to add an item to your shelf', title, date, synopsis, img, mediaType, this.state.radioToggleValue])

        this.setState({
            indexOfActiveAddModal: null
        })

        let userId = '5a7f2c7ec65382c1d975d3f3'
        let mediaItem = {
            title,
            date,
            synopsis,
            img,
            mediaType
        }

        // let userData = {
        //     userId,
        //     mediaItem
        // }

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
                                   API.addItemToUserShelf(userId, mediaItemId)
                                       .then(res => console.log(res))
                               })
                       })
                } else {
                    console.log(['this item already exists in the db', res.data[0]._id])
                    API.addItemToUserShelf(userId, res.data[0]._id)
                        .then(res => console.log(res))
                }
            })
    }

    handleAddButtonPress = (title, date, synopsis, img, mediaType, index) => {
        console.log(['you pressed the add button', title, date, synopsis, img, mediaType])

        this.handleAddModalOpen(index)
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
                        indexOfResultItem={index}
                        indexOfOpenModal={this.state.indexOfOpenModal}
                        handleModalOpen={this.handleModalOpen}
                        handleAddButtonPress={this.handleAddButtonPress}
                        handleRadioToggle={this.handleRadioToggle}
                        radioToggleValue={this.state.radioToggleValue}
                        indexOfActiveAddModal={this.state.indexOfActiveAddModal}
                        handleConfirmationModalClose={this.handleConfirmationModalClose}
                        handleShelfItemSubmit={this.handleShelfItemSubmit}
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
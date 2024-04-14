import {Component} from 'react'

import Cookies from 'js-cookie'

import {FaGamepad} from 'react-icons/fa'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import Navigator from '../Navigator'

import GamingVideoItem from '../GamingVideoItem'

import CustomContext from '../../context/CustomContext'

import {
  MainContainer,
  ResponsiveContainer,
  GamingContainer,
  GamingLogoContainer,
  GamingIconContainer,
  GamingHeading,
  VideoListContainer,
  VideosList,
  LoaderContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureViewContentContainer,
  FailureHeding,
  FailureText,
  RetryButton,
} from './styledComponents'

const apiConstantsConfigs = {
  success: 'SUCCESS',
  initial: 'INITIAL',
  failed: 'FAILED',
  inProgress: 'IN_PROGRESS',
}

class GamingRoute extends Component {
  state = {
    apiStatus: apiConstantsConfigs.initial,
    gamesList: [],
  }

  componentDidMount() {
    this.getVideosList()
  }

  formateVideoItem = videoItem => {
    const formatedVideoItem = {
      id: videoItem.id,
      title: videoItem.title,
      thumbnailUrl: videoItem.thumbnail_url,
      viewCount: videoItem.view_count,
    }

    return formatedVideoItem
  }

  getVideosList = async () => {
    this.setState({apiStatus: apiConstantsConfigs.inProgress})
    const gamingVideosApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(gamingVideosApiUrl, options)
    const fetchedData = await response.json()
    if (response.ok) {
      const formatedVideosList = fetchedData.videos.map(videoItem =>
        this.formateVideoItem(videoItem),
      )
      this.setState({
        gamesList: formatedVideosList,
        apiStatus: apiConstantsConfigs.success,
      })
    } else {
      this.setState({apiStatus: apiConstantsConfigs.failed})
    }
  }

  renderSuccessView = () => {
    const {gamesList} = this.state

    return (
      <CustomContext.Consumer>
        {value => {
          const {isInDarkMode} = value
          const colorOfIcon = '#ff0000'

          return (
            <>
              <GamingLogoContainer isInDarkMode={isInDarkMode}>
                <GamingIconContainer>
                  <FaGamepad color={colorOfIcon} />
                </GamingIconContainer>
                <GamingHeading>Gaming</GamingHeading>
              </GamingLogoContainer>
              <VideosList>
                {gamesList.map(videoItem => (
                  <GamingVideoItem videoItem={videoItem} key={videoItem.id} />
                ))}
              </VideosList>
            </>
          )
        }}
      </CustomContext.Consumer>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  onClickRetryButton = () => {
    this.getVideosList()
  }

  renderFailedView = () => (
    <FailureViewContainer>
      <FailureViewImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureViewContentContainer>
        <FailureHeding>Opps! Something Went Wrong</FailureHeding>
        <FailureText>
          We are having some trouble to complete your request. Please try again
        </FailureText>
        <RetryButton type="button" onClick={this.onClickRetryButton}>
          Retry
        </RetryButton>
      </FailureViewContentContainer>
    </FailureViewContainer>
  )

  renderDifferentViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'SUCCESS':
        return this.renderSuccessView()
      case 'FAILED':
        return this.renderFailedView()
      case 'IN_PROGRESS':
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <CustomContext.Consumer>
        {value => {
          const {isInDarkMode} = value
          return (
            <MainContainer data-testid="gaming" isInDarkMode={isInDarkMode}>
              <Header />
              <GamingContainer>
                <ResponsiveContainer>
                  <Navigator />
                  <VideoListContainer>
                    {this.renderDifferentViews()}
                  </VideoListContainer>
                </ResponsiveContainer>
              </GamingContainer>
            </MainContainer>
          )
        }}
      </CustomContext.Consumer>
    )
  }
}

export default GamingRoute
